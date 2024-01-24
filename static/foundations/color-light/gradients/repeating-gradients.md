There are a two ways to repeat gradients. The first is to use the `repeating-linear-gradient()`, `repeating-radial-gradient()`, and `repeating-conic-gradient()` functions, which will repeat the gradient until the container bounds are filled. The second option is to use `background-repeat` and tile the gradient as a repeating image.

```css
/* Repeating functions */
background: repeating-linear-gradient(to right, blue, red 25%);

/* Tiling */
background-image: linear-gradient(to right, blue);
background-size: 1rem 1rem;
background-repeat: repeat;
```
