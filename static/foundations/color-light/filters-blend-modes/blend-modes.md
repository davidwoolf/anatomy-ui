The `mix-blend-mode` property enables stylistic blending of elements with their background or other elements.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode):

```css
/* available syntax options */
mix-blend-mode: normal;
mix-blend-mode: color;
mix-blend-mode: color-dodge;
mix-blend-mode: color-burn;
mix-blend-mode: darken;
mix-blend-mode: difference;
mix-blend-mode: exclusion;
mix-blend-mode: hue;
mix-blend-mode: hard-light;
mix-blend-mode: lighten;
mix-blend-mode: luminosity;
mix-blend-mode: multiply;
mix-blend-mode: overlay;
mix-blend-mode: saturation;
mix-blend-mode: screen;
mix-blend-mode: soft-light;
```

By default, elements will interact with both each other and the background. Use the `isolation` property with a value of `isolate` on the element you applied `mix-blend-mode` to, to create a new local stacking context and remove the effect interaction with an ancestor’s background (if you apply a background to the element itself, the blend mode effect will still occur).

There is also a `background-blend-mode` property that applies blend modes to just the background image and color values on an element.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode)
