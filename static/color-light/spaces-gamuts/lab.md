The `lab()` function accepts values for lightness, a red-green axis (A), a blue-yellow axis (B), and an alpha value, and can display any color in the CIE color gamut.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab). Lightness is represented as a number between `0-100`, a percentage between `0%-100%` or `none`. The red-green axis is a number between `-125-125` or a percentage between `-100%-100%`, where negative values are more green, and positive values are more red. The blue-yellow axis (B) is a number between `-125-125` or a percentage between `-100%-100%` where negative values are more yellow, and positive values are more blue.[citation](https://developer.chrome.com/articles/high-definition-css-color-guide/#lab) Finally, the alpha channel can be represented as a number between `0-1` or a percentage between `0%-100%`.

```css
/* syntax options */
color: lab(100, -125, 125);
color: lab(100, -125, 125 / 1);
color: lab(100, -125, 125 / 100%);
```
