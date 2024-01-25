The `conic-gradient()` CSS function includes similar color stop and hint values as `linear-gradient()` and `radial-gradient()` but with different starting values. Because all conic gradients rotate around a center point, angle and position values can be used as the first parameter in the function.

Just like angles in the `linear-gradient()` function, any valid [angle](https://developer.mozilla.org/en-US/docs/Web/CSS/angle) type can be used. Just make sure to include the `from` keyword beforehand. The position value conforms to [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value) type and defaults to `center`, but be aware that more complex options like offsetting from a side (e.g. `right -1rem`) are not supported. Also make sure to include the `at` keyword beforehand, even if omitting the shape and size values.

```css
/* syntax options for angle and position */
background: conic-gradient(from <angle>, /* color stops */);
background: conic-gradient(at <position>, /* color stops */);
background: conic-gradient(from <angle> at <position>, /* color stops */);
```
