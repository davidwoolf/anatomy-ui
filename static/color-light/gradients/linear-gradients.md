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
