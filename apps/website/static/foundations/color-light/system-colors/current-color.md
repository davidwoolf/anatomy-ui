The `currentcolor` keyword uses the value applied to the CSS `color` property for the current element. This includes inherited color values, and can be used anywhere a valid color type is allowed.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) The `currentcolor` keyword can also be interpolated, meaning animations applied to color values on ancestor elements will happen on descendants as well.

When applying the `color` property to an element:

- all descendant element’s text inherits the same color, unless they specify their own value
- the container’s and descendant’s borders also inherit the color, again unless they specify their own value

However, things like `background-color` do not inherit the `color` property’s value and setting a value like `inherit` only applies when the parent container also has a specified `background-color`. This is where `currentcolor` can be powerful, especially when working with SVG elements.

Applying `currentcolor` to the `fill` and `stroke` attributes of SVG elements like `<path>` will ensure the value matches the closest applied color value, even if that means using the default color applied to the entire document. This can be a very powerful tool when managing an SVG icon library in component systems: use `currentcolor` for fills and strokes, inherit colors everywhere and–when needed–explicitly set the color using a wrapper element.
