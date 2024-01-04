The `filter` property applies composite rendering effects to any element or group of elements–via specialized functions.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) Unlike static affects applied to imported images, they can react to the environment via DOM updates, scrolling, and animations:

```css
/* supported functions syntax */
filter: blur(<number>);
filter: brightness(<decimal>);
filter: contrast(<percentage>);
filter: drop-shadow(<number> <number> <number> <color>);
filter: grayscale(<percentage>);
filter: hue-rotate(<angle>);
filter: invert(<percentage>);
filter: opacity(<percentage>);
filter: saturate(<percentage>);
filter: sepia(<percentage>);
filter: url(<image>);
```

Effects are computed using the local coordinates of the target element without affecting surrounding elements and functions can be stacked and combined, meaning just a change to the function order can create a different effect.
