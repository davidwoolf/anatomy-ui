---
title: Positioning
slug: position
---

<script>
  import StaticRelativeAbsolute from "@examples/layout/position/static-relative-absolute.svelte";
  import FixedSticky from "@examples/layout/position/fixed-sticky.svelte";
  import Stacking from "@examples/layout/position/stacking-rules.svelte";
</script>

In addition to spacing properties, elements can augment their place in the DOM by using the `position` property alongside modifier properties such as top, bottom, left, and right. These properties move elements without affecting the placement of siblings or ancestors in the DOM.

---

## Static, relative, and absolute positions

The default value of the position property is `static`, which ignores inset properties such as top and left, along with stacking values for the z-index property.

The value `relative` will move the element relative to its current position, but without affecting other items around it. In contrast, the value `absolute` will move the element relative to the nearest ancestor that has position: relative. If no ancestor has this value, the element will be placed relative to the entire window.

<StaticRelativeAbsolute />

---

## Fixed and sticky positions

Applying `fixed` as the position property’s value will place the element relative to the window, regardless of any parent’s `position: relative` value. It also ignores scroll positioning.

Applying `sticky` as the position property’s value will make an element act like it’s fixed once it hits the top of the viewport. The element’s dimensions are also calculated as part of the normal DOM, eliminating the need to calculate offset padding for other items. One thing to note is that sticky elements are scoped to the closest element with the overflow property applied.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/position#values)

<FixedSticky />

---

## Stacking elements

Elements can be stacked on top of each other in a third, virtual "z axis", using the `z-index` property, which accepts any positive or negative number. While there isn’t a true z axis in the DOM, the rendered values using the z-index property convey a third dimension.

### Rules

In order for `z-index` to have any affect, an element must have a `position` value other than `static`, or the element must be a direct descendant of a flex or grid container.

Stack values are scoped to the nearest ancestor that includes a valid `position` property, meaning that they can’t be positioned higher or lower than that ancestor’s position. Confusingly, this doesn't apply to flex or grid layout descendants don't conform to this rule, so be careful applying `z-index` in those containers.

<Stacking />
