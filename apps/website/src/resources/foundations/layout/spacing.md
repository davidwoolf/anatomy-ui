---
title: Spacing
slug: spacing
---

<script>
  import Padding from "@examples/layout/spacing/padding.svelte";
  import Margin from "@examples/layout/spacing/margin.svelte";
  import Gap from "@examples/layout/spacing/gap.svelte";
</script>

When creating interfaces, be careful where and when you apply spacing values like padding and margin as values can quickly compound and cause visual misalignments. Think of spacing as a top down setting, ideally applied to container elements and missing from descendants entirely.

---

## Padding

The `padding` property affects the interior layout of an element. Base components sometimes need to handle padding, especially when visual properties like background colors, borders, and shadows are applied, but avoid adding padding to ones that don't require it.

<Padding />

---

## Margin

The `margin` property affects the exterior spacing around an element. When using margin to control spacing, apply values from one axis direction (usually the top and/or left).

<Margin />

---

## Gap

The `gap` property adds consistent space between elements in a flex or grid container. Additional properties `column-gap` and `row-gap` are available for more customizable spacing on the block and inline axes. The gap property can not be less than `0`, so using margin may be required in those situations.

<Gap />
