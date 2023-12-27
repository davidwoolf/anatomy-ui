The `rgb()` function accepts values for red, green, blue, and an alpha value and can display any color in the sRGB color gamut.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb) Red, green, and blue can be represented as values from `none`, a number between `0-255` or a percentage between `0%-100%`. The alpha channel can be represented as a number between `0-1` or a percentage between `0%-100%`. Color channel values cannot be mixed between numbers and percentages, but `none` and either alpha syntax is valid in both contexts.

In the past, values were comma separated, and (if an alpha value was included), the `rgba()` function was used instead. Now, things are much more simple. Values are separated by spaces, alpha is added as `/ [alpha]` and `rgba()` function has been essentially deprecated.

```css
/* syntax options */
color: rgb(100% 0% 0% / 1);
color: rgb(100% 0% 0% / 100%);
color: rgb(100% 0% none / 1);
color: rgb(255 0 0 / 0.1);
color: rgb(255 0 0 / 100%);
color: rgb(255 0 none / 1);

/* older syntax */
color: rgb(255, 0, 0);

/* deprecated */
color: rgba(255, 0, 0, 0.5);

/* invalid, can't mix percentages and numbers for color channels */
color: rgb(255 100% 50);
```
