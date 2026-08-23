/**
 * TVA x KVA Live — Service Worker
 *
 * Caching strategy:
 *   Static assets (/assets/*) → Cache-first  (hashed filenames, safe to cache forever)
 *   Images/icons              → Cache-first  (long-lived)
 *   API calls (/api/*)        → Network-first → stale cache fallback
 *   HTML navigation           → Network-first → cached shell fallback
 */

const CACHE_VERSION = 'tvaxkva-v1';
const OFFLINE_FALLBACK = '/';

/** Static assets that can be cached on install */
const PRECACHE_URLS = [
  '/',
  '/kick',
  '/youtube',
  '/profiles',
  '/manifest.json',
  '/favicon.ico',
  '/favicon-192x192.png',
  '/apple-touch-icon.png',
  '/logo.png',
  '/tvaxkva-loading-logo.webp',
];

// ─── Install ────────────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

// ─── Activate ───────────────────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_VERSION)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

// ─── Fetch ───────────────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests from same origin
  if (request.method !== 'GET' || url.origin !== location.origin) return;

  // Skip dev tools / browser extensions / sw itself
  if (url.pathname === '/sw.js') return;

  // ── Hashed static assets → cache-first (safe: hash changes on deploy) ──
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // ── Images / icons → cache-first ──
  if (/\.(png|jpg|jpeg|webp|svg|ico|gif)$/i.test(url.pathname)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // ── API calls → network-first, stale fallback (offline shows last data) ──
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // ── HTML navigation → network-first, cached shell fallback ──
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request, OFFLINE_FALLBACK));
    return;
  }

  // ── Everything else → stale-while-revalidate ──
  event.respondWith(staleWhileRevalidate(request));
});

// ─── Strategies ─────────────────────────────────────────────────────────────

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline', { status: 503 });
  }
}

async function networkFirst(request, fallbackUrl) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    if (fallbackUrl) {
      const fallback = await caches.match(fallbackUrl);
      if (fallback) return fallback;
    }
    return new Response(
      JSON.stringify({ error: 'offline', message: 'No cached data available' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } },
    );
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_VERSION);
  const cached = await cache.match(request);
  const networkPromise = fetch(request).then((response) => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  });
  return cached ?? networkPromise;
}
