Many other color spaces can be rendered using the `color()` function, which can display colors in any color space that supports specifing values in red, green, and blue channels.[citation](https://developer.chrome.com/articles/high-definition-css-color-guide/#the-color-function) First, a color space value like `display-p3` is specified, followed by red, green, and blue channel values represented as a number between `0–1` or a percentage between `0%–100%`, and finally an optional alpha channel represented as a number between `0-1` or a percentage between `0%-100%`. Unlike other color functions, numbers and percentage values for red, green, and blue can be mixed and matched.

```css
/* available color spaces and syntax */
color: color(srgb 1 0 0 / 1);
color: color(srgb-linear 1 0 0 / 1);
color: color(display-p3 1 0 0 / 1);
color: color(a98-rgb 1 0 0 / 1);
color: color(prophoto-rgb 1 0 0 / 1);
color: color(rec2020 1 0 0 / 1);
color: color(xyz 1 0 0 / 1);
color: color(xyz-d50 1 0 0 / 1);
color: color(xyz-d65 1 0 0 / 1);
```

The `color()` function supports the list of spaces listed above, but importantly does not support HSL, HWB, LAB, LCH, OKLAB, or OKLCH.
