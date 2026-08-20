import {a as g, r as c, B as E, j as e, m, C as f, L as w, c as o, D as L} from "./index-n3ykPomq.js";
import {S as C} from "./tva-streamer-dashboard-C1fSiCd7.js";
import {S as M} from "./site-footer-B3msC5PA.js";
import {C as u} from "./clock-DtvdPvJF.js";
import {M as N} from "./megaphone-ClDb-J2K.js";
import {R as h} from "./radio-DRh3lHme.js";
import {L as B} from "./loader-circle-CE0StrtM.js";
import {A as T} from "./arrow-right-DJuyCAft.js";
import {E as A} from "./external-link-BlRFC6ja.js";
import "./search-COieBnn3.js";
import "./tva-brand-logo-BgLoBUDb.js";
import "./refresh-cw-Bsze8eOY.js";
const P = [["path", {
    d: "M12 7v14",
    key: "1akyts"
}], ["path", {
    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    key: "ruj8y"
}]]
  , k = g("book-open", P);
const G = [["path", {
    d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
    key: "1s2grr"
}], ["path", {
    d: "M20 2v4",
    key: "1rf3ol"
}], ["path", {
    d: "M22 4h-4",
    key: "gwowj6"
}], ["circle", {
    cx: "4",
    cy: "20",
    r: "2",
    key: "6kqj1y"
}]]
  , R = g("sparkles", G);
const V = [["path", {
    d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
    key: "1n3hpd"
}], ["path", {
    d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
    key: "rfe1zi"
}], ["path", {
    d: "M18 9h1.5a1 1 0 0 0 0-5H18",
    key: "7xy6bh"
}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
    key: "1mhfuq"
}], ["path", {
    d: "M6 9H4.5a1 1 0 0 1 0-5H6",
    key: "tex48p"
}]]
  , v = g("trophy", V);
function H(t) {
    return {
        id: String(t.id),
        title: String(t.title),
        description: String(t.description),
        date: String(t.date_display ?? "Coming Soon"),
        time: t.time_display ? String(t.time_display) : void 0,
        category: t.category,
        status: t.status,
        url: t.url ? String(t.url) : void 0,
        platform: t.platform ? t.platform : void 0
    }
}
const O = {
    Tournament: {
        badge: "border-yellow-400/40 bg-yellow-500/10 text-yellow-300",
        glow: "hover:shadow-[0_0_32px_oklch(0.85_0.19_85/0.22)]",
        icon: "text-yellow-400"
    },
    Reveal: {
        badge: "border-[#00ff66]/40 bg-[#00ff66]/10 text-[#00ff66]",
        glow: "hover:shadow-[0_0_32px_oklch(0.86_0.22_142/0.22)]",
        icon: "text-[#00ff66]"
    },
    Community: {
        badge: "border-sky-400/40 bg-sky-500/10 text-sky-300",
        glow: "hover:shadow-[0_0_32px_oklch(0.67_0.19_240/0.22)]",
        icon: "text-sky-400"
    },
    Special: {
        badge: "border-violet-400/40 bg-violet-500/10 text-violet-300",
        glow: "hover:shadow-[0_0_32px_oklch(0.67_0.22_286/0.22)]",
        icon: "text-violet-400"
    }
}
  , D = {
    live: {
        text: "LIVE NOW",
        class: "bg-[#ff2d55] text-white shadow-[0_0_16px_rgb(255_45_85/0.55)] animate-pulse"
    },
    upcoming: {
        text: "UPCOMING",
        class: "border border-primary/40 bg-primary/10 text-primary"
    },
    past: {
        text: "ENDED",
        class: "border border-white/15 bg-white/5 text-zinc-500"
    }
}
  , U = {
    Community: "border-[#39ff14]/40 bg-[#39ff14]/10 text-[#39ff14]",
    Streams: "border-red-400/40 bg-red-500/10 text-red-300",
    Updates: "border-sky-400/40 bg-sky-500/10 text-sky-300",
    Guides: "border-violet-400/40 bg-violet-500/10 text-violet-300"
};
function Y() {
    const [t,l] = c.useState([])
      , [r,n] = c.useState(!0)
      , [i,d] = c.useState(null);
    c.useEffect( () => {
        let s = !1;
        return fetch("/api/d1/events").then(a => a.ok ? a.json() : Promise.reject(a.status)).then(a => {
            s || l(a.map(S => H(S)))
        }
        ).catch( () => {}
        ).finally( () => {
            s || n(!1)
        }
        ),
        fetch("/api/d1/event-banner").then(a => a.ok ? a.json() : null).then(a => {
            s || d(a)
        }
        ).catch( () => {}
        ),
        () => {
            s = !0
        }
    }
    , []);
    const _ = !!(i?.section_enabled && (i.desktop_image || i.mobile_image))
      , b = t.filter(s => s.status === "live")
      , j = t.filter(s => s.status === "upcoming")
      , y = t.filter(s => s.status === "past")
      , z = E().slice(0, 4);
    return e.jsxs("div", {
        "data-roster-bg": "all",
        className: "tva-dash tva-dash--home tva-page-shell flex min-h-dvh flex-col bg-background text-foreground antialiased",
        children: [e.jsx(C, {
            searchValue: "",
            onSearchChange: () => {}
            ,
            searchPlaceholder: "Search events...",
            searchAriaLabel: "Search events",
            hideProfilesButton: !0
        }), e.jsxs("main", {
            className: "relative z-0 mx-auto w-full max-w-7xl flex-1 px-3 py-6 sm:px-6 sm:py-10",
            children: [_ && i && e.jsxs(m.section, {
                className: "mb-10 overflow-hidden rounded-2xl border border-[#00ff66]/35 bg-black shadow-[0_0_44px_rgb(0_255_102/0.18)]",
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .35
                },
                children: [e.jsxs("div", {
                    className: "flex flex-wrap items-center justify-between gap-2 border-b border-[#00ff66]/20 bg-[#00ff66]/8 px-4 py-2.5",
                    children: [e.jsxs("span", {
                        className: "inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#00ff66]",
                        children: [e.jsxs("span", {
                            className: "relative flex size-2",
                            children: [e.jsx("span", {
                                className: "absolute inline-flex size-full animate-ping rounded-full bg-[#00ff66] opacity-70"
                            }), e.jsx("span", {
                                className: "relative size-2 rounded-full bg-[#00ff66]"
                            })]
                        }), "Today's Event"]
                    }), i.badge && e.jsxs("span", {
                        className: "inline-flex items-center gap-1.5 rounded-full bg-[#00ff66] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#04210f]",
                        children: [e.jsx(u, {
                            className: "size-3",
                            "aria-hidden": !0
                        }), i.badge]
                    })]
                }), e.jsx(I, {
                    banner: i
                }), (i.title || i.subtitle) && e.jsxs("div", {
                    className: "border-t border-[#00ff66]/20 p-5",
                    children: [i.title && e.jsx("h2", {
                        className: "text-lg font-black tracking-tight text-white sm:text-xl",
                        children: i.title
                    }), i.subtitle && e.jsx("p", {
                        className: "mt-1 text-sm text-zinc-400",
                        children: i.subtitle
                    })]
                })]
            }), e.jsxs(m.section, {
                className: "mb-10 overflow-hidden rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm",
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .35
                },
                children: [e.jsx("div", {
                    className: "h-[2px] bg-linear-to-r from-transparent via-primary/70 to-transparent"
                }), e.jsxs("div", {
                    className: "p-6 sm:p-8",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [e.jsx("span", {
                            className: "flex size-10 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30",
                            children: e.jsx(N, {
                                className: "size-5 text-primary",
                                "aria-hidden": !0
                            })
                        }), e.jsx("p", {
                            className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
                            children: "TVA x KVA Live"
                        })]
                    }), e.jsxs("h1", {
                        className: "mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl",
                        children: ["Events ", e.jsx("span", {
                            className: "text-white/30",
                            children: "&"
                        }), " ", e.jsx("span", {
                            className: "text-zinc-300",
                            children: "News"
                        })]
                    }), e.jsx("p", {
                        className: "mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base",
                        children: "Gang house reveals, PUBG tournaments, community nights, and the latest Community news — all in one place."
                    }), e.jsxs("div", {
                        className: "mt-5 flex flex-wrap gap-3",
                        children: [e.jsxs("div", {
                            className: "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-300",
                            children: [e.jsx(v, {
                                className: "size-3.5 text-yellow-400",
                                "aria-hidden": !0
                            }), "Tournaments"]
                        }), e.jsxs("div", {
                            className: "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-300",
                            children: [e.jsx(R, {
                                className: "size-3.5 text-[#00ff66]",
                                "aria-hidden": !0
                            }), "Gang Reveals"]
                        }), e.jsxs("div", {
                            className: "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-300",
                            children: [e.jsx(h, {
                                className: "size-3.5 text-sky-400",
                                "aria-hidden": !0
                            }), "Community Nights"]
                        })]
                    })]
                })]
            }), r && e.jsxs("div", {
                className: "flex items-center justify-center py-16 text-muted-foreground",
                children: [e.jsx(B, {
                    className: "mr-2 size-5 animate-spin",
                    "aria-hidden": !0
                }), e.jsx("span", {
                    className: "text-sm",
                    children: "Loading events…"
                })]
            }), !r && b.length > 0 && e.jsxs("section", {
                className: "mb-10",
                children: [e.jsx(x, {
                    icon: h,
                    label: "Live Now",
                    accent: "text-[#ff2d55]"
                }), e.jsx("ul", {
                    className: "grid gap-5 sm:grid-cols-2",
                    children: b.map( (s, a) => e.jsx(p, {
                        event: s,
                        index: a,
                        featured: !0
                    }, s.id))
                })]
            }), !r && j.length > 0 && e.jsxs("section", {
                className: "mb-10",
                children: [e.jsx(x, {
                    icon: v,
                    label: "Upcoming Events"
                }), e.jsx("ul", {
                    className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
                    children: j.map( (s, a) => e.jsx(p, {
                        event: s,
                        index: a
                    }, s.id))
                })]
            }), !r && t.length === 0 && e.jsxs("div", {
                className: "mb-10 rounded-xl border border-border/60 bg-card/40 px-6 py-16 text-center",
                children: [e.jsx(N, {
                    className: "mx-auto mb-4 size-10 text-primary/40",
                    "aria-hidden": !0
                }), e.jsx("p", {
                    className: "font-semibold text-foreground",
                    children: "No events announced yet"
                }), e.jsx("p", {
                    className: "mt-1 text-sm text-muted-foreground",
                    children: "Check back soon — big things are coming."
                })]
            }), !r && y.length > 0 && e.jsxs("section", {
                className: "mb-12",
                children: [e.jsx(x, {
                    icon: f,
                    label: "Past Events",
                    muted: !0
                }), e.jsx("ul", {
                    className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
                    children: y.map( (s, a) => e.jsx(p, {
                        event: s,
                        index: a,
                        muted: !0
                    }, s.id))
                })]
            }), e.jsxs("div", {
                className: "my-8 flex items-center gap-4",
                children: [e.jsx("div", {
                    className: "h-px flex-1 bg-white/8"
                }), e.jsxs("span", {
                    className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-400",
                    children: [e.jsx(k, {
                        className: "size-3.5",
                        "aria-hidden": !0
                    }), "News & Blog"]
                }), e.jsx("div", {
                    className: "h-px flex-1 bg-white/8"
                })]
            }), e.jsxs("section", {
                children: [e.jsxs("div", {
                    className: "mb-5 flex items-center justify-between gap-3",
                    children: [e.jsx(x, {
                        icon: k,
                        label: "Latest from the Blog"
                    }), e.jsxs(w, {
                        to: "/blog",
                        className: "inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300 transition hover:border-primary/40 hover:text-primary",
                        children: ["View all posts", e.jsx(T, {
                            className: "size-3.5",
                            "aria-hidden": !0
                        })]
                    })]
                }), e.jsx("ul", {
                    className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
                    children: z.map( (s, a) => e.jsx($, {
                        post: s,
                        index: a
                    }, s.id))
                })]
            })]
        }), e.jsx(M, {})]
    })
}
function I({banner: t}) {
    const l = t.desktop_image || t.mobile_image || ""
      , r = t.mobile_image || t.desktop_image || ""
      , n = e.jsxs("picture", {
        children: [e.jsx("source", {
            media: "(min-width: 1024px)",
            srcSet: l
        }), e.jsx("img", {
            src: r,
            alt: t.title || "Today's event",
            loading: "eager",
            className: "mx-auto block max-h-[78vh] w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
        })]
    });
    return t.link_url ? e.jsx("a", {
        href: t.link_url,
        className: "group relative block",
        children: n
    }) : e.jsx("div", {
        className: "group relative block",
        children: n
    })
}
function x({icon: t, label: l, muted: r=!1, accent: n}) {
    return e.jsxs("h2", {
        className: o("mb-4 flex items-center gap-2 text-lg font-black uppercase tracking-wide", r ? "text-zinc-500" : "text-white"),
        children: [e.jsx(t, {
            className: o("size-5", n ?? (r ? "text-zinc-600" : "text-primary")),
            "aria-hidden": !0
        }), l]
    })
}
function p({event: t, index: l, muted: r=!1, featured: n=!1}) {
    const i = O[t.category]
      , d = D[t.status];
    return e.jsx(m.li, {
        initial: {
            opacity: 0,
            y: 16
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .3,
            delay: l * .06
        },
        children: e.jsxs("div", {
            className: o("group flex h-full flex-col rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur-sm", "transition-[border-color,box-shadow]", n && "border-[#ff2d55]/30 shadow-[0_0_32px_rgb(255_45_85/0.12)]", !r && !n && "hover:border-primary/30", !r && i.glow, r && "opacity-60"),
            children: [e.jsxs("div", {
                className: "flex items-start justify-between gap-3",
                children: [e.jsx("span", {
                    className: o("inline-flex w-fit rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider", i.badge),
                    children: t.category
                }), e.jsxs("span", {
                    className: o("inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider", d.class),
                    children: [t.status === "live" && e.jsx(h, {
                        className: "size-2.5",
                        "aria-hidden": !0
                    }), d.text]
                })]
            }), e.jsx("h3", {
                className: "mt-3 text-lg font-bold leading-snug text-white sm:text-xl",
                children: t.title
            }), e.jsx("p", {
                className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
                children: t.description
            }), e.jsxs("div", {
                className: "mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground",
                children: [e.jsxs("span", {
                    className: "inline-flex items-center gap-1",
                    children: [e.jsx(f, {
                        className: "size-3.5 shrink-0",
                        "aria-hidden": !0
                    }), t.date]
                }), t.time && e.jsxs("span", {
                    className: "inline-flex items-center gap-1",
                    children: [e.jsx(u, {
                        className: "size-3.5 shrink-0",
                        "aria-hidden": !0
                    }), t.time]
                }), t.platform && e.jsx("span", {
                    className: "capitalize text-zinc-500",
                    children: t.platform === "both" ? "Kick + YouTube" : t.platform
                })]
            }), t.url && t.status !== "past" && e.jsxs("a", {
                href: t.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: o("mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition", t.status === "live" ? "bg-[#ff2d55]/20 text-[#ff2d55] hover:bg-[#ff2d55]/30" : "bg-primary/15 text-primary hover:bg-primary/25"),
                children: [e.jsx(A, {
                    className: "size-4",
                    "aria-hidden": !0
                }), t.status === "live" ? "Watch Live" : "Learn More"]
            })]
        })
    })
}
function $({post: t, index: l}) {
    return e.jsx(m.li, {
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .28,
            delay: l * .05
        },
        children: e.jsxs(w, {
            to: "/blog/$slug",
            params: {
                slug: t.id
            },
            className: o("group flex h-full flex-col rounded-2xl border border-white/10 bg-white/3 p-4", "backdrop-blur-sm transition-[border-color,box-shadow]", "hover:border-primary/35 hover:shadow-[0_0_20px_oklch(0.86_0.22_142/0.1)]"),
            children: [e.jsx("span", {
                className: o("inline-flex w-fit rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider", U[t.category]),
                children: t.category
            }), e.jsx("h3", {
                className: "mt-2 text-sm font-bold leading-snug text-white group-hover:text-primary sm:text-base",
                children: t.title
            }), e.jsx("p", {
                className: "mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3",
                children: t.excerpt
            }), e.jsxs("div", {
                className: "mt-3 flex flex-wrap items-center gap-2 text-[11px] text-zinc-500",
                children: [e.jsxs("span", {
                    className: "inline-flex items-center gap-1",
                    children: [e.jsx(f, {
                        className: "size-3 shrink-0",
                        "aria-hidden": !0
                    }), L(t.publishedAt)]
                }), e.jsxs("span", {
                    className: "inline-flex items-center gap-1",
                    children: [e.jsx(u, {
                        className: "size-3 shrink-0",
                        "aria-hidden": !0
                    }), t.readMinutes, "m"]
                })]
            })]
        })
    })
}
const ie = Y;
export {ie as component};
