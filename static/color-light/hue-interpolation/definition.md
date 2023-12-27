Hue interpolation indicates how two colors should interpolated around a color wheel. This is supported in the `color-mix()`, `linear-gradient()`, `radial-gradient()` and `conic-gradient()` CSS functions.

```css
/* syntax */
/* in <polar-color-space> <hue-interpolation-method> */

/* examples using the color-mix function */
color-mix(in hsl shorter hue, blue, red);
color-mix(in hwb longer hue, blue, red);
color-mix(in lch decreasing hue, blue, red);
color-mix(in oklch increasing hue, blue, red);

/* examples using the linear-gradient function */
linear-gradient(to right in hsl shorter hue, blue, red);
linear-gradient(to left in hwb longer hue, blue, red);
linear-gradient(90deg in lch decreasing hue, blue, red);
linear-gradient(180deg in oklch increasing hue, blue, red);
```
