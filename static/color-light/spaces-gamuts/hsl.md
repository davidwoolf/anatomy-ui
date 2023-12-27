The `hsl()` function accepts values for hue, saturation, light, and an alpha value and can display any color in the sRGB color gamut.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) Hue is represented as a number, angle, or `none` (a number value represents an angle value in degrees). Angles in CSS can be represented as `deg`, `grad`, `rad`, and `turn`.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/angle) Saturation and light are represented as percentages `0%-100%` or `none`, which is equal to `0%`. Finally, the alpha channel can be represented as a number between `0-1` or a percentage between `0%-100%`, just like RGB.

Like `rgb()`, values were comma separated in the past–with alpha changed by using the `hsla()` function. And just like `rgb()`, this syntax has been replaced with space delimited values and an optional `/ [alpha]`.

```css
/* syntax options */
color: hsl(120deg 100% 50%);
color: hsl(120deg 100% 50% / 1);
color: hsl(120deg 100% 50% / 100%);
color: hsl(0.3turn 100% 50%);
color: hsl(2.1rad 100% 50%);
color: hsl(133grad 100% 50%);

/* older syntax */
color: hsl(120deg, 100%, 50%);

/* deprecated */
color: hsla(120deg, 100%, 50%, 1);
```

While HSL is displayed in in the sRGB color gamut, defining values with `hsl()` is much more human friendly than `rgb()`. Each color is represented as `0-360°` degrees on the color wheel, and light and saturation can then be used to darken and desaturate values. This means you can find complementary colors by changing just the hue color channel.
