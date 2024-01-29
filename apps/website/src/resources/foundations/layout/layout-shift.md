---
title: Layout shift
slug: layout-shift
---

<script>
  import MediaEmbeds from "@examples/layout/layout-shift/media-embeds.svelte";
  import Animation from "@examples/layout/layout-shift/animation.svelte";
</script>

If you’ve done any site profiling in the past, you will probably know the term <a href='https://web.dev/articles/cls' target='_blank'>Cumulative Layout Shift</a>, which measures how much a web page’s layout shifts after initial load and during use. Due to the nature of how web pages are loaded, layout shift isn’t completely avoidable. But it can be minimized.

---

## Media and embedded content

Use the `aspect-ratio` property in CSS to give media such as images, videos, and embedded content like `<iframe>` a concrete size before rendering. While height and width attributes directly on media elements have historically been used, the aspect-ratio property can inform overall dimensions without explicitly providing width and height values that might not translate well in responsive designs.\n\nIt can also be applied to multiple elements in one declaration, since attribute values will need to be defined on each element.

<MediaEmbeds />

---

## Font sizing and fallbacks

If your interface uses custom fonts, it’s recommended to use a `font-display` value that ensures text is displayed immediately while the custom font loads (if not already cached). This improves metrics like FCP (first contentful paint) and LCP (largest contentful paint). However, it can also create layout shifting since different font values don’t take up the same physical space, even with the same type properties.

To solve this, try to provide built-in fallbacks that are optically similar in size to your custom fonts. This will decrease layout shift and also prevent jarring text swapping experiences.

```css
/* avoid font shifting due to fallbacks that don't match your font styles */
font-family: "Some cursive font", sans-serif;

/* use serif, sans-serif, monospace, or cursive fallbacks that match your font’s style */
font-family: "Some cursive font", cursive;
```

---

## Animation

Layout shift doesn’t just happen on page and asset load, it can also happen when animating elements using CSS properties that contribute to the overall DOM layout flow.

Avoid animating properties like height and width, top and left and margin and padding when possible. Instead, use transform for animations as it doesn’t cause layout re-computations.

<Animation />
