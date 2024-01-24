The `oklab()` function accepts similar values to the `lab()` function and can display any color in the corrective CIE color gamut.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklab). The major difference between the `oklab()` and `lab()` function’s syntax is the A and B channel’s numerical values are between `-0.4–0.4`.

```css
/* syntax options */
color: oklab(0, -0.4, -0.4);
color: oklab(1, 0.4, 0.4);
color: oklab(0%, -100%, -100%);
color: oklab(100%, 100%, 100%);
color: oklab(100%, 100%, 100% / 1);
```
