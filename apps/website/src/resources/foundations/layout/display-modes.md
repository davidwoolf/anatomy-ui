---
title: Display modes
slug: display-modes
---

<script>
  import Component from "@examples/layout/display-modes.svelte";
</script>

Elements can set both their external and internal layout modes via the CSS `display` property. External layout values indicate how an element will render alongside sibling elements in a container while internal layout values indicate how descendants of the element will render.

---

## External layout

In non flex or grid layouts, an external layout value of `block` will force an element onto its own line.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/display#outside) In contrast, a value of `inline` will slot an element onto the same line as another inline element. Finally, a value of `none` will hide an element completely and remove its dimension sizing from the document–including elements inside of flex and grid containers.

An internal layout of `block` allows descendant elements to control their own, external layout value. However, an internal layout of `flex` or `grid` will force descendant elements into a flex or grid layout respectively–regardless of their own, external layout value.

<Component />
