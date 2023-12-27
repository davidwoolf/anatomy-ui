The `lch()` function accepts values for lightness, chroma, hue, and an alpha value and can display any color in the CIE color gamut.[citation](<[https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch)>). Lightness is represented as a number between `0-100`, a percentage between `0%-100%` or `none`. Chroma can be an unbounded positive number `0-n`, a percentage between `0%-100%`, or `none`. In this case, `100%` equals the number `150`. Like HSL and HWB, hue is represented as a number, angle or `none`. Finally, the alpha channel can be represented as a number between `0-1` or a percentage between `0%-100%`, just like LAB.

```css
/* syntax options */
color: lch(100, 150, 120deg);
color: lch(100, 100%, 120deg / 1);
color: lch(100, 100%, 120deg / 100%);
color: lch(100, 100%, 0.3turn);
color: lch(100, 100%, 2.1rad);
color: lch(100, 100%, 133grad);
```
