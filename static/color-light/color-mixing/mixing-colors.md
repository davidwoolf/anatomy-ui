By default, each color is mixed equally, producing a color mixed with `50%` of the first color and `50%` of second color.

```css
/* Syntax formatting for the color-mix() function */
color: color-mix(in <color-space>, <color> <percentage>, <color> <percentage>);
```

The `in <color-space>` value refers to the interpolation method mixing will use, as spaces like `lch` and `srgb` will mix colors differently. Importantly, the passed in color values can be any valid `<color>` and do not need to be formatted in the matching color space:

```css
/**
 * Syntax for available color spaces. Passed in
 * colors do not need to match the color space.
 * Because percentages have been omitted, each color
 * is mixed equally, with 50% of both blue and red.
 */
color: color-mix(in srgb, blue, red);
color: color-mix(in srgb-linear, blue, red);
color: color-mix(in lab, blue, red);
color: color-mix(in oklab, blue, red);
color: color-mix(in xyz, blue, red);
color: color-mix(in xyz-d50, blue, red);
color: color-mix(in xyz-d65, blue, red);
color: color-mix(in hsl, blue, red);
color: color-mix(in hwb, blue, red);
color: color-mix(in lch, blue, red);
color: color-mix(in oklch, blue, red);
```

Polar color spaces such as `hsl`, `hwb`, `lch`, and `oklch` also support all the hue interpolation keywords, indicating how to mix both colors:

```css
/* Example of hue interpolation in polar color spaces */
color: color-mix(in hsl longer hue, blue, red);
```
