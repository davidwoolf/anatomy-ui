Gradient functions accept different color spaces, which will impact not just the color stop values, but also the way the color stops are interpolated together. To specify a color space, use the `in <colorspace>` syntax:

```css
background: linear-gradient(in oklab, red, blue);
background: radial-gradient(in oklab, red, blue);
background: conic-gradient(in oklab, red, blue);
```

Polar color spaces such as `hsl`, `hwb`, `lch`, and `oklch` also support all the hue interpolation keywords, indicating how to transition between colors:

```css
/* Example of hue interpolation in polar color spaces */
background: linear-gradient(to right in hsl longer hue, red, blue);
```
