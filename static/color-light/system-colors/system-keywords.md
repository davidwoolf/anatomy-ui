System colors include various keywords to apply colors based on default document colors such as backgrounds, text, active colors, etc. As with `currentcolor`, system color values can be used anywhere a valid color type is allowed.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color#accentcolor) Importantly, these keywords are not using values you applied to the `<html>` or `<body>` elements, but rather static values based on the browser, operating system, and user agent overrides.

Some examples of system colors include the static document background color `Canvas` and the static document text color `CanvasText`. What makes these values really interesting, is that you can utilize them to auto apply dark or light mode values that match your system and browser.

In order to do so, you’ll need to add a `color-scheme` value to the root of your document, noting that both light and dark schemes are supported.[citation](https://blog.jim-nielsen.com/2021/css-system-colors/)

```css
:root {
  color-scheme: light dark;
}
```

You can also assign `color-scheme` to just `light` or `dark` to force a specific mode and still use system colors with the correct value. What’s more, you can apply the value to any element, not just `:root`! If you’re trying to force a specific color scheme, it’s recommended that you add the `only` keyword in front to strongly suggest to browsers that the document can only support one color scheme.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme#only)

```css
/* use the "only" keyword to strongly assign the color scheme */
color-scheme: only light;
color-scheme: only dark;
```
