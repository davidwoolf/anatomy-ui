Leading, or line height, controls the space between lines of text. When setting the `line-height` of a block of text, the default `normal` value equates to about 120% of the text size. That means 12pt text will have a line height of about 14.4pt (we're using `pt` here to avoid unit confusion).

While you can use static units like `px` or `rem` as value for `line-height`, a much more flexible solution is to use no units at all! When setting the value to unitless number, it acts a multiplier for the computed font size of the text it's applied to. Importantly, this is not the same for other units like `em` or `%`.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#prefer_unitless_numbers_for_line-height_values)

```css
/* unitless value */
p {
  line-height: 1.35;
}

/* percentage value */
p {
  line-height: 135%;
}
```
