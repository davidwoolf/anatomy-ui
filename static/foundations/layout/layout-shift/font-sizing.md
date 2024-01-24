If your interface uses custom fonts, it’s recommended to use a `font-display` value that ensures text is displayed immediately while the custom font loads (if not already cached). This improves metrics like FCP (first contentful paint) and LCP (largest contentful paint). However, it can also create layout shifting since different font values don’t take up the same physical space, even with the same type properties.

To solve this, try to provide built-in fallbacks that are optically similar in size to your custom fonts. This will decrease layout shift and also prevent jarring text swapping experiences.

```css
/* avoid font shifting due to fallbacks that don't match your font styles */
font-family: "Some cursive font", sans-serif;

/* use serif, sans-serif, monospace, or cursive fallbacks that match your font’s style */
font-family: "Some cursive font", cursive;
```