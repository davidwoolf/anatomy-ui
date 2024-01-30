---
title: Box sizing
slug: box-sizing
---

<script>
  import Component from "@examples/layout/box-sizing.svelte";
</script>

The size of elements on the web can be calculated in two ways: using the content box sizing model or the border box sizing model. By default, content box sizing is used to calculate most element’s dimensions, but not all. Table, select, button, and input elements all use border box sizing by default.

---

## Box sizing strategies

Context box sizing adds explicit widths and heights in addition to padding and border width. Therefore, a 100px wide box with 24px of left padding and 24px of right padding will by 148px wide.

Border box sizing on the other hand, calculates padding and border widths within the defined width and height. Therefore, a 100px wide box with 24px of left padding and 24px of right padding will by 100px wide.

<Component />

---

## Recommendation

Turn on border box sizing for all elements if possible. Every element’s dimensions will be calculated the same, and explicit calculations will be easier as padding and border width values won’t unintentionally increase the width and height of elements.
