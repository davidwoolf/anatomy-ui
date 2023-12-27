The `radial-gradient()` CSS function includes the same color stop and hint values as `linear-gradient()` but with different starting values. Because all radial gradients originate from a center, there is no angle value. Instead, shape, size, and position values can be provided. Each value includes a default and can be omitted, but when used together, the order should be:

```css
background: radial-gradient(<shape> <size> <position>, /* color stops */);
```

## Shape

A radial gradient’s shape can be denoted as a circle or an ellipse, which is the default.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient#values) An ellipse is based on the container’s dimensions, while a circle has a 1:1 aspect ratio.

```css
/* syntax options for shape */
background: radial-gradient(ellipse, /* color stops */);
background: radial-gradient(circle, /* color stops */);
```

## Size

A radial gradient’s size can be defined based on its container’s edges or as an explicit size. Valid edge values are `closest-side`, `closest-corner`, `farthest-side`, and `farthest-corner` (the default value). Valid explicit size values depend on the shape. For circle shapes, percentages are not allowed as it’s unknown which axis should control the percentage. For ellipse shapes, static lengths or percentages are allowed, but both the x and y axis values need to be defined. Both shape’s size value translates to a radius, not the full size end to end:

```css
/* syntax options for size and ellipse shape */
background: radial-gradient(ellipse closest-side, /* color stops */);
background: radial-gradient(ellipse closest-corner, /* color stops */);
background: radial-gradient(ellipse farthest-side, /* color stops */);
background: radial-gradient(ellipse farthest-corner, /* color stops */);
background: radial-gradient(ellipse 100% 50%, /* color stops */);
background: radial-gradient(ellipse 100px 50px, /* color stops */);

/* syntax options for size and circle shape */
background: radial-gradient(circle closest-side, /* color stops */);
background: radial-gradient(circle closest-corner, /* color stops */);
background: radial-gradient(circle farthest-side, /* color stops */);
background: radial-gradient(circle farthest-corner, /* color stops */);
background: radial-gradient(circle 30px, /* color stops */);
```

## Position

A radial gradient’s position position value conforms to [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value) type and defaults to `center`, but be aware that more complex options like offsetting from a side (e.g. `right -1rem`) are not supported. Also make sure to include the `at` keyword beforehand, even if omitting the shape and size values:

```css
/* syntax options for position */
background: radial-gradient(at center, /* color stops */);
background: radial-gradient(at 50%, /* color stops */);
background: radial-gradient(at 50% 50%, /* color stops */);
background: radial-gradient(at right center, /* color stops */);
background: radial-gradient(at 100% 50%, /* color stops */);
background: radial-gradient(at bottom right, /* color stops */);
background: radial-gradient(at 100% 100%, /* color stops */);
```

Putting these all together, you can control the exact shape, size, and position of any radial gradient:

```css
/* example of all three values */
background: radial-gradient(ellipse closest-side at right center, /* color stops */);
```
