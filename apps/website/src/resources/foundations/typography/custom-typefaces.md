---
title: Custom typefaces
slug: custom-typefaces
---

It’s common for interfaces to use custom typefaces for branding and conveying a certain mood but they come at a cost. Avoid long load times and text shifting with these strategies.

---

## Loading typefaces

When loading custom typefaces via `@font-face`, the `font-display` css property can be used to control how text displays while your typefaces load.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) It can be tempting to use `font-display: block` to give typefaces time to load before displaying text but this is incredibly hostile to actors on low-powered devices and long-latency networks.

By default `font-display: auto` is used, which generally acts the same as the swap value, however it's recommended to explicitly declare `font-display: swap`. This will let super fast networks load font files without flashing unstyled text but will otherwise show all text in a fallback typeface during site load.

---

## Provide fallbacks

When using custom fonts, ensure `font-family` declarations fallback to the correct generic system value to limit the affects of the change (this includes `serif`, `sans-serif`, `monospace`, `cursive` and [more](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#values)).
