---
title: System colors
slug: system-colors
---

<script>
  import CurrentColor from "@examples/color-light/system-colors/currentcolor.svelte";
  import SystemKeywords from "@examples/color-light/system-colors/system-keywords.svelte";
</script>

CSS includes many system colors, which inherit from the operating system and browser, along with reserved keywords, which inherit from colors defined on the current element or its ancestors.

---

## Current color

The `currentcolor` keyword uses the value applied to the CSS `color` property for the current element. This includes inherited color values, and can be used anywhere a valid color type is allowed.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) The `currentcolor` keyword can also be interpolated, meaning animations applied to color values on ancestor elements will happen on descendants as well.

When applying the `color` property to an element:

- all descendant element’s text inherits the same color, unless they specify their own value
- the container’s and descendant’s borders also inherit the color, again unless they specify their own value

However, things like `background-color` do not inherit the `color` property’s value and setting a value like `inherit` only applies when the parent container also has a specified `background-color`. This is where `currentcolor` can be powerful, especially when working with SVG elements.

Applying `currentcolor` to the `fill` and `stroke` attributes of SVG elements like `<path>` will ensure the value matches the closest applied color value, even if that means using the default color applied to the entire document. This can be a very powerful tool when managing an SVG icon library in component systems: use `currentcolor` for fills and strokes, inherit colors everywhere and–when needed–explicitly set the color using a wrapper element.

<CurrentColor />

---

## System keywords

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

<SystemKeywords />

---

## Color scheme preferences

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
