Use the `prefers-color-scheme` media query to change colors based on the preferred color scheme of the actor’s computer.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) The accepted values are `light` or `dark`:

```css
/* dark mode */
@media (prefers-color-scheme: dark) {
  element {
    /* ...properties */
  }
}

/* light mode */
@media (prefers-color-scheme: light) {
  element {
    /* ...properties */
  }
}
```
