import {j as e, m as c, c as s, U as x} from "./index-n3ykPomq.js";
import {A as p} from "./arrow-right-DJuyCAft.js";
function b({faction: a, stats: t, active: i, compact: r=!1, onSelect: n, index: o}) {
    return e.jsxs(c.button, {
        type: "button",
        layout: !0,
        onClick: n,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .4,
            delay: o * .08,
            layout: {
                duration: .35
            }
        },
        whileHover: r ? {
            scale: 1.01
        } : {
            y: -6,
            scale: 1.02
        },
        whileTap: {
            scale: .98
        },
        className: s("profile-faction-card group relative w-full overflow-hidden rounded-2xl border text-left", r ? "min-h-[120px] sm:min-h-[132px]" : "min-h-[220px] sm:min-h-[260px]", i ? "profile-faction-card--active" : "border-white/10 hover:border-white/25", r && !i && "opacity-75 hover:opacity-100"),
        style: {
            "--faction-accent": a.accent,
            "--faction-rgb": a.accentRgb
        },
        "aria-pressed": i,
        children: [e.jsx("div", {
            className: "absolute inset-0 bg-cover bg-center opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60",
            style: {
                backgroundImage: `url(${a.banner})`
            },
            "aria-hidden": !0
        }), e.jsx("div", {
            className: "absolute inset-0 opacity-90",
            style: {
                background: a.gradient
            },
            "aria-hidden": !0
        }), e.jsx("div", {
            className: "profile-faction-card__scanline absolute inset-0 opacity-30",
            "aria-hidden": !0
        }), e.jsxs("div", {
            className: s("relative z-1 flex h-full flex-col justify-between", r ? "p-3 sm:p-3.5" : "p-5 sm:p-6"),
            children: [e.jsxs("div", {
                className: "flex items-start justify-between gap-3",
                children: [e.jsx("img", {
                    src: a.logo,
                    alt: "",
                    className: s("w-auto object-contain drop-shadow-[0_0_12px_rgb(var(--faction-rgb)/0.5)]", r ? "h-7 max-w-14 sm:h-8" : "h-10 max-w-20 sm:h-12"),
                    loading: "lazy",
                    decoding: "async"
                }), t.live > 0 && e.jsxs("span", {
                    className: "flex items-center gap-1 rounded-full border border-[#ff2d55]/50 bg-[#ff2d55]/20 px-2 py-0.5 text-[10px] font-bold uppercase text-white",
                    children: [e.jsx("span", {
                        className: "size-1.5 animate-pulse rounded-full bg-white"
                    }), t.live, " Live"]
