The `box-shadow` CSS property creates a shadow around a box element. If the box includes a `blur-radius` the shadow is rounded. [citation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

```css
/* Syntax (this order is not necessarily required) */
box-shadow: <inset> <x> <y> <intensity> <spread> <color>;

/* Examples */
box-shadow: 2px 2px blue;
box-shadow: 2px 2px 4px blue;
box-shadow: 2px 2px 4px 1px blue;
box-shadow: 2px 2px 4px 1px blue inset;

/* Alternate inset and color positions */
box-shadow: inset 2px 2px 4px 1px blue;
box-shadow: inset blue 2px 2px 4px 1px;
```

## Length options

When two length values are supplied, they are interpreted as the x and y coordinate offsets. A third length value is interpreted as the blur radius, and a final, fourth length value is interpreted as the spread radius.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow#length)

## Coordinate offsets

The coordinate offsets (`x` and `y`) can be any positive or negative length. A positive x value moves the shadow to the right, while a negative value moves it to the left. A positive y value moves the shadow to the bottom, while a negative value moves it to the top. This means the values don’t exactly map to a cartesian plane, but rather an imaginary global light source in the top left corner of the document.

## Blur and spread radius

The blur radius value can be any positive length, where larger values makes the shadow larger but also more spread out, lightening the overall shadow. The spread radius value can be any positive or negative length and will expand or contract the shadow. Setting the blur radius to `0` and the spread radius to any value greater than `1` will create a sharp edged shadow offset.

## Inset shadows

Using the `inset` keyword converts the outer shadow into an inner shadow. All other values are still allowed, but will create a depressed effect instead of an elevated effect.

## Multiple shadows

Multiple shadows can be specified with commas `,` and are stacked with the first shadow on top. If the number of shadows differ between animation states, a default “shadow” with 0 length values and a transparent color are used, which results in a consistent animation effect that doesn’t flicker shadows.
