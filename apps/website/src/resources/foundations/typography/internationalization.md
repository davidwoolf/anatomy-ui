---
title: Internationalization
slug: internationalization
---

<script>
  import Direction from "@examples/typography/internationalization/direction.svelte";
</script>

True internationalization requires different content provided in different languages, but there are some easy to follow rules to ensure interfaces look their best everywhere.

---

## Encoding

UTF-8 is the only valid character encoding accepted on HTML5 documents.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#charset) However, the exclusion of this value means a default character encoding other than UTF-8 may be used, which can create encoding issues for special characters. Therefore, ensure your site includes the following at the top of the <head> tag:

```html
<meta charset="utf-8" />
```

---

## Direction

Avoid using the `direction` css property[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/direction) and opt for the `dir` attribute instead. This can be applied to the entire document via the `<html>` element or on individual elements (for example, when displaying part of the text in another language).

Additionally, use a combination of the `text-orientation` and `writing-mode` css properties to control how text is laid out. This is useful for languages that are read vertically and from right to left. The `writing-mode` property can be used to set text in vertical mode, which is required for the `text-orientation` property as it only works on vertical text.[citation](https://drafts.csswg.org/css-writing-modes/#text-orientation)

<Direction />

---

## Multiple language support

To purposefully change the direction of a block of text, use the `<bdo>` tag in combination with the dir attribute.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo) To wrap a block of text whose direction is unknown at run time (e.g. pulling data that includes text in multiple writing modes), use the `<bdi>` tag, with no attributes required.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi)
