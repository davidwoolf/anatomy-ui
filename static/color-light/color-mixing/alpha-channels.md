Since any valid `<color>` type can be passed into the `color-mix()` function, that includes colors with an alpha value less than `100%`. Mixing colors with an alpha channel will produce a color that also has an alpha channel, computed from the two colors (however, it’s not a direct average):

```css
color: color-mix(in srgb, rgb(0 0 255 / 0.5), rgb(255 0 0 / 0.5));
```

In addition, you can mix a color with the keyword `transparent` to produce the same color with an alpha channel value computed from the mix percentages:

```css
/**
 * The following comparisons render the same results, 
 * but are not necessarily what the browser will
 * directly output in the document.
 */

/* Transparent, without a percentage value */
color: color-mix(in srgb, red, transparent);
color: rgb(255 0 0 / 0.5);

/* Transparent, with a percentage value */
color: color-mix(in srgb, red 70%, transparent);
color: rgb(255 0 0 / 0.7);
```

_Note: the `transparent` keyword does not accept a percentage value._
