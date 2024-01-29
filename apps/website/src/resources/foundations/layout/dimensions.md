---
title: Explicit vs implicit dimensions
slug: dimensions
---

<script>
  import Bounds from "@examples/layout/dimensions/bounds.svelte";
  import MaxContent from "@examples/layout/dimensions/max-content.svelte";
  import MinContent from "@examples/layout/dimensions/min-content.svelte";
  import FitContent from "@examples/layout/dimensions/fit-content.svelte";
</script>

Most components should not have an opinion about their width or height–including maximum and minimum values. Dimensional constraints should be applied top down–either via the device, container layouts, or a combination of both. There are exceptions such as icons, which generally have standard sizes.

---

## Setting upper and lower bounds

Use properties such as `max-width` and `min-height` to set upper and lower constraints on an element’s dimensions. When using both constraints, the minimum value will be used over the maximum value if it’s larger.

<Bounds />

---

## Intrinsic keywords

CSS includes enumerated sizing values, otherwise known as **intrinsic keywords**. They are `max-content`, `min-content`, and `fit-content`. The values can be used with width and height (including their min/max counterparts) and (excluding fit-content) `grid-template-columns` and `grid-template-rows`.

### Maximum content

The `max-content` value represents the maximum theoretical size based on the property and content.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/max-content) Think of a line a text: the maximum theoretical width is the width when the text doesn’t have to wrap to a new line. Be careful with max-content as it will cause elements to break out of their containing box.

<MaxContent />

### Minimum content

The `min-content` value represents the minimum theoretical size without distorting the content.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/min-content) For a line of text, this would be the largest width of a single word. Note that this doesn’t mean one word per line; if two subsequent words are smaller in width than the largest word, they will sit on the same line.

<MinContent />

### Fit content

The `fit-content` value uses a combination of `min-content` and `max-content`, filling up to the container if necessary, but stopping beforehand if the content is smaller than the container.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content)

<FitContent />
