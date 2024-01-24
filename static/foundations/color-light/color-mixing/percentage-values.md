Percentage values are very flexible, as long as they aren’t both `0%`. In addition, when combined values are less than or greater than 100%, they are both recomputed by taking each value and dividing by the sum of both. This ensures two values that always add up to `100%`.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix#p1)

For example, if the first color is `70%` and the second is `50%` , the sum is `120%` and the values will be transformed to `~58.3333%` and `~41.666%` respectively. Or if the values are `30%` and `40%`, the sum is `70%` and the values will be transformed to `42.85%` and `57.14%` respectively.

```css
/**
 * the following two values are equivalent due
 * to values greater than 100% being converted
 * to always add up to 100%
 */
color: color-mix(in srgb, blue 70%, red 50%);
color: color-mix(in srgb, blue 58.3333%, red 41.6666%);

/**
 * the following two values are equivalent due
 * to values less than 100% being converted
 * to always add up to 100%
 */
color: color-mix(in srgb, red 30%, blue 40%);
color: color-mix(in srgb, red 42.85%, blue 57.14%);
```
