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

## sRGB

The `srgb` color space renders colors in the same way as the `rgb()` function and is limited to the same range of colors in the `sRGB` color gamut.

## sRGB linear

The `srgb-linear` color space is limited to the same range of colors in the `sRGB` color gamut, but colors are not gamma corrected in their output. This is a nuanced issue most developers won’t need to worry about, but basically `sRGB` applies gamma correction to colors to keep them consistent between viewing devices. This is preferred when rendering colors directly as backgrounds, text, etc. but a pain when applying light shading to a 3D object.[citation](https://docs.unity3d.com/Manual/LinearRendering-LinearOrGammaWorkflow.html)

## Wider gamut spaces

The `display-p3` color space renders all colors available in the Display P3 color gamut, which supports about 50% more supports colors than sRGB.[citation](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)\n\nThe `rec2020` color space renders all colors available in the Rec2020 color gamut and supports about 37% more colors than Display P3.[citation](https://www.displaymate.com/Display_Color_Gamuts_1.htm) However, display support is much smaller for Rec2020 versus Display P3 at the time of this writing.\n\nBoth of these spaces (along with `srgb`) can be safely utilized with fallbacks, by checking the `color-gamut` media query[citation](https://developer.chrome.com/articles/high-definition-css-color-guide/#checking-for-gamut-and-color-space-support)
