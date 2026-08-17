import {u as G, r as n, j as r, k as V, b as T, T as Y, s as $, d as z, A as U, m as P, X as B, K as J} from "./index-n3ykPomq.js";
import {S as Q} from "./tva-streamer-dashboard-C1fSiCd7.js";
import {n as R, i as W, f as q, K as X} from "./youtube-channel-image-DSWVRi7S.js";
import {b as Z, L as ee, f as te, d as re, e as ae, h as se, t as oe} from "./live-section-header-CeyQggLU.js";
import {P as ne} from "./profiles-faction-card-Bwq8p_gA.js";
import {c as ie, P as le, f as ce} from "./profiles-roster-stats-DBzJgE4x.js";
import "./profile-theme-Cb8zLgmu.js";
import {S as ue} from "./site-footer-B3msC5PA.js";
import "./search-COieBnn3.js";
import "./tva-brand-logo-BgLoBUDb.js";
import "./refresh-cw-Bsze8eOY.js";
import "./streamer-share-Dv2OuV-N.js";
import "./trending-up-DvwrYh2G.js";
import "./eye-CAXkqK0e.js";
import "./external-link-BlRFC6ja.js";
import "./clock-DtvdPvJF.js";
import "./arrow-right-DJuyCAft.js";
function de(e) {
    return {
        ...e,
        profileSlug: V(e.displayName)
    }
}
function me({streamers: e}) {
    const t = G()
      , s = n.useMemo( () => e.map(de), [e])
      , o = n.useMemo( () => ie(s), [s])
      , i = l => {
        const d = ce(l).gangPath;
        t({
            to: d ?? "/profiles"
        })
    }
    ;
    return r.jsxs("div", {
        className: "home-offline-roster mt-10 w-full border-t border-white/10 pt-10 text-left",

