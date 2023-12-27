There are a two ways to repeat gradients, both offering different strengths. The first is to use the `repeating-*` function variant of each gradient style we went over: `repeating-linear-gradient()`, `repeating-radial-gradient()`, and `repeating-conic-gradient()`. These functions will repeat the gradient syntax until the image area is filled. For example, let’s say you added background with a blue to red linear gradient with a color stop:

```css
background: linear-gradient(to right, blue, red 25%);
```

This will fill 75% of the background area with red. However, if you used:

```css
background: repeating-linear-gradient(to right, blue, red 25%);
```

You would see a blue to red gradient repeated 4 times (`25% * 4 = 100%`). You can do this with radial and conic gradients as well. The tricky part is that, if your initial gradient values fill the image area, nothing will repeat.

For gradient backgrounds that can be repeated if placed next to and below each other, an easier option might be to use `background-size`, `background-position`, and `background-repeat`. Gradients are simply computed images that (when applied as a background) can be controlled with all existing CSS background properties:

```css
background-image: linear-gradient(to right, blue);
background-size: 1rem 1rem;
background-repeat: repeat;
```

The key thing to note here is that, just like any other time you use `background-repeat`, you’re creating a tiling effect. The power of `repeating-*` gradients is that it doesn’t tile the computed gradient, it extends it out until the entire image area is filled:

Repeating gradients are computed images just like non-repeating ones, so you can actually combine both repeating strategies together for some interesting affects:
