The `oklch()` function accepts similar values to the `lch()` function and can display any color in the corrective CIE gamut.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) The major difference between the `oklch()` and `lch()` function’s syntax is the Chroma channel’s numerical upper perceivable value is `0.5`.

```css
/* syntax options */
color: lch(100, 0.5, 120deg);
color: lch(100, 100%, 120deg / 1);
color: lch(100, 100%, 120deg / 100%);
color: lch(100, 100%, 0.3turn);
color: lch(100, 100%, 2.1rad);
color: lch(100, 100%, 133grad);
```
