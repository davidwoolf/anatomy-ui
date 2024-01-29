---
title: Aspect ratios
slug: aspect-ratios
---

<script>
  import Formatting from "@examples/layout/aspect-ratio/formatting.svelte";
  import WidthHeight from "@examples/layout/aspect-ratio/width-height.svelte";
  import MinMax from "@examples/layout/aspect-ratio/min-max.svelte";
  import Flex from "@examples/layout/aspect-ratio/flex.svelte";
</script>

In the past, a mix of percentage based padding, absolute positioning, and nested divs were required to constrain sizing based on a ratio. With the `aspect-ratio` property, element sizing can be constrained to a ratio, making explicit dimension rules more flexible in responsive browsers.

---

## Formatting ratios

Ratios are formatted as `[width] / [height]`, where the height can be inferred as `1` if the `/ [height]` part is omitted. The `aspect-ratio` property can also include an `auto` value, which is useful when you want to start with a placeholder ratio for an item with unknown size–like an image. The explicit ratio size–let's say `16 / 9` in this case–will be used until the item is loaded and after that happens, the item’s calculated dimensions will be used.

<Formatting />

---

## Constraints

The `aspect-ratio` property may be ignored when used in combination with other layout constraints (or lack thereof). Height, width, upper and lower bounds, and flex constraints all affect how aspect ratios will be applied.

### Width and height

If both an explicit `width` and `height` are defined, any defined aspect ratio value will not be applied. However, if either an explicit width or height (both not both) are defined, the aspect ratio will be calculated from that value.

<WidthHeight />

### Maximum and minimum bounds

Just like `width` and `height`, applying `max-width`, `max-height`, `min-width`, and `min-height` to an element with a defined aspect ratio will override the ratio once it hits the maximum or minimum constraint. This can be very useful when sizing elements whose dimensions are based on a percentage or viewport units.

<MinMax />

### Flex container

Elements inside of a a flex container can also have their `aspect-ratio` values omitted if alignment values aren’t explicitly defined. By default, flex containers align items to the top and bottom of the container, overriding aspect ratio values.

<Flex />
