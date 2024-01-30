---
title: Block and inline axes
slug: block-inline-axes
---

<script>
  import Component from "@examples/layout/block-inline-axes.svelte";
</script>

When learning about layout on the web and how elements flow, you will come across the terms **block axis** and **inline axis**. Since the web can be viewed in different writing modes and orientations, these names are meant to avoid relating to physical edges such as “top”, “left”, etc.

---

## How writing modes affect axes

In English, text flows from left to right, and top to bottom. The **block axis** is the vertical axis starting from the top, while the **inline axis** is the horizontal axis starting from the left.

Changing the writing direction will augment these values, but they are relationally tied together. Both the start and end point of axes (along with the axes themselves) can be flipped, but they will always be opposite of each other.

<Component />
