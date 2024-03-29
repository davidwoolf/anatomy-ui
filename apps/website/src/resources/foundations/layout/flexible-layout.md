---
title: Flexible layouts
slug: flexible-layout
---

<script>
  import Constraints from "@examples/layout/flex/constraints.svelte";
  import Basis from "@examples/layout/flex/basis.svelte";
  import Grow from "@examples/layout/flex/grow.svelte";
  import Shrink from "@examples/layout/flex/shrink.svelte";
  import Push from "@examples/layout/flex/push.svelte";

</script>

Flexible layouts align elements to one axis and distribute space based on a variety of factors. Learn how to effectively create, augment, and control flex containers in your interfaces below.

---

## Default constraints

By default, a flex container’s direct descendants will flow next to each other, starting from the main axis and aligning to the start and end of the cross axis.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout) The main axis is the same as the inline axis (or x-axis) and the cross axis is the block axis (or y-axis). This means they will fill up the available space, computed from either the container’s explicit dimensions or the largest descendant in the container.

<Constraints />

---

## Calculating element sizing

When adding items into a default flex container, there are various values that will determine the width of items, including the width of the container, elements, any gap spacing, and explicit dimensions on elements via width and height, and various flex properties–which we’ll focus on here.

### Flex basis

The `flex-basis` property can be used to control the base size of an element before applying additional calculations to grow or shrink elements to fit a flex container. By default, the value is `auto`, which uses either an explicit main axis value, or the implicit dimensions of the element. You can also apply a value of `content` to always use implicit dimensions or an explicit length value, including `0`.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)

<Basis />

### Growing elements

The `flex-grow` property determines how any leftover space in the flex container is distributed to each direct descendant. The value of flex-grow is any positive number, including decimals, and defaults to 0.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) The value is a ratio–calculates using other flex-grow values applied to sibling elements.\n\nImportantly, this does not mean that three items with `flex-grow: 1` will all be 1/3rd of the container; instead each element will have an equal amount of the available space applied to their default size. You can use `flex-basis: 0` in addition to equal `flex-grow` values to achieve this[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#combining_flex-grow_and_flex-basis), but if equally spaced values is your goal, use a grid layout.

<Grow />

### Shrinking elements

The `flex-shrink` property is used when a flex container becomes too small to fit all of its descendant elements (due to other properites include explicit dimensions). It works in a similar way to `flex-grow` but with some slight differences to avoid shrinking elements too much by default.\n\nEssentially, elements have a minimum size of `min-content` so as containers become smaller, elements with more generous room will decrease faster to keep everything nice and contained without hiding items.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#combining_flex-shrink_and_flex-basis)

<Shrink />

---

## Pushing elements

When flex containers aren’t set to have their descendants fill the entire container, you can push elements away from each other using either the `margin` property or by including an empty element with `flex: 1 1 auto`. Adding empty elements for styling decisions like this should be avoided when possible.",

<Push />
