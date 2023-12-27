The `linear-gradient()` CSS function renders a color gradient on a straight line. The first value is the angle direction–starting from the center, going clockwise–which defaults to `0deg`. The angle can be formatted as any valid [angle](https://developer.mozilla.org/en-US/docs/Web/CSS/angle) type. You can also use natural language values, which are translated to an angle during render time:

| natural language value | angle  |
| ---------------------- | ------ |
| to top                 | 0deg   |
| to right               | 90deg  |
| to bottom              | 180deg |
| to left                | 270deg |

```css
/* syntax options for direction */
background: linear-gradient(90deg, /* color stops */);
background: linear-gradient(0.25turn, /* color stops */);
background: linear-gradient(0.5rad, /* color stops */);
background: linear-gradient(100grad, /* color stops */);
background: linear-gradient(to right, /* color stops */);
```

_Note: natural language values include corner values such as `to top right` , but be aware: this isn’t calculated directly as `45deg`._

### Color stops and hints

After the direction comes a series of color stops and hints. At least two stops are required, but you can have as many as you like. Color stops include a color value and an optional percentage or static length denoting how much of the gradient should include just that color:

```css
/* syntax options for color stops */
background: linear-gradient(/* gradient direction */, red, blue);
background: linear-gradient(/* gradient direction */, red 0%, blue 100%);
background: linear-gradient(/* gradient direction */, red, green, blue);
background: linear-gradient(/* gradient direction */, red 0%, green 50%, blue 100%);
```

Color hints are a percentage or static length and are used to interpolate the progression of the gradient between the previous and next color stop. They are also calculated from the entire gradient progression, so setting `100%` as a hint after a color stop will only show that color for the rest of the gradient.

```css
/* syntax options for color hints */
background: linear-gradient(/* gradient direction */, red, 25%, green, 75%, blue);
background: linear-gradient(
  /* gradient direction */,
  red 0%,
  25%,
  green 50%,
  75%,
  blue 100%
);
```
