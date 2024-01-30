---
title: Text overflow
slug: text-overflow
---

<script>
  import SingleLine from "@examples/typography/text-overflow/single-line.svelte";
  import MultiLine from "@examples/typography/text-overflow/multiple-lines.svelte"
</script>

Real content almost always breaks typographic layouts in static designs. Setting guards using text overflow properties helps keep things looking consistent.

---

## Trimming single line text

Trimming text is usually applied to single lines and requires coordinating CSS’s `text-overflow`, `overflow`, and `white-space` properties. The `text-overflow` property does not handle clipping text, it only controls what should display when text has already been clipped. By default, this value is `clip`, but all modern browsers also support `ellipsis`.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)

In order to actually clip text that is too long, use `overflow: hidden`, which must be applied to the text element itself. Additionally, the text cannot span multiple lines, and the css property `white-space: nowrap` must also be included.

<SingleLine />

---

### Trimming multiple lines of text

To clip multiple lines of text, use the `-webkit-line-clamp` property, which is supported in all major browsers. However, this property comes with a few caveats:

- `display: -webkit-box` and `webkit-box-orient: vertical` are also both required
- `text-overflow` does nothing here and ellipses are always used
- applying padding to the text with the line clamp value can create artifacts on clipped lines
- text clipping is not based on any parent container dimensions, only the text's number of lines
- the parent container must have `overflow: hidden` applied OR a defined `height`.

<MultiLine />
