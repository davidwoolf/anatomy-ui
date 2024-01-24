The `box-shadow` CSS property creates a shadow around a box element. When two length values are supplied, they are interpreted as the x and y coordinate offsets. A third length value is interpreted as the blur radius, and a final, fourth length value is interpreted as the spread radius.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow#length). If the box includes a `blur-radius` the shadow is rounded. [citation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

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
