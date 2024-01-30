---
title: Hue interpolation
slug: hue-interpolation
---

Polar color spaces like HSL, HWL, LCH, and OKLCHcan define hue interpolation values of shorter hue, decreasing hue, longer hue, and increasing hue when mixing colors and creating gradients.

---

## Definition

Hue interpolation indicates how two colors should interpolated around a color wheel. This is supported in the `color-mix()`, `linear-gradient()`, `radial-gradient()` and `conic-gradient()` CSS functions.

```css
/* syntax */
/* in <polar-color-space> <hue-interpolation-method> */

/* examples using the color-mix function */
background-color: color-mix(in hsl shorter hue, blue, red);
background-color: color-mix(in hwb longer hue, blue, red);
background-color: color-mix(in lch decreasing hue, blue, red);
background-color: color-mix(in oklch increasing hue, blue, red);

/* examples using the linear-gradient function */
background: linear-gradient(to right in hsl shorter hue, blue, red);
background: linear-gradient(to left in hwb longer hue, blue, red);
background: linear-gradient(90deg in lch decreasing hue, blue, red);
background: linear-gradient(180deg in oklch increasing hue, blue, red);
```

---

## Short and long hues

Short and long hue calculations take the polar space color value’s angle on the color wheel and finds the shortest or longest route, either in a clockwise or counter-clockwise direction.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/hue-interpolation-method#shorter)

---

## Increasing and decreasing hues

Increasing hue calculations always go in a clockwise direction, while decreasing hue calculations always go in a counter-clockwise direction. This means both can mix colors using more or less of the color wheel, depending on the first and second color’s angle values.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/hue-interpolation-method#increasing)
