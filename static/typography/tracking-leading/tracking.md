Tracking, better known in CSS as letter spacing, uniformly updates the space between letters, either in a positive (more space) or negative (less space) direction. Using `em` units will act as a multiplier on the computed font size, which is highly recommended to avoid issues with sizes changing based on the actor's preferred base size. However, the values can be extremely sensitive.

Tools like Figma Dev Mode only show these values in `px` or `rem` units, which aren't local multiplier units. Fortunately you can quickly compute the `em` value by taking the `letter-spacing` value and dividing it by the `font-size` value:

```css
/* before transformation */
.pixels {
  font-size: 12px;
  letter-spacing: 0.3px;
}

.rems {
  font-size: 0.75rem;
  letter-spacing: 0.01875rem;
}

/* after */
.pixels {
  font-size: 12px;
  letter-spacing: 0.025em; /* .3 / 12 = 0.025 */
}

.rems {
  font-size: 0.75rem;
  letter-spacing: 0.025em; /* .01875 / .75 = 0.025 */
}
```

_Note: this value can be inconsistent when using justified text._
