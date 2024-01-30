---
title: Text
slug: text
---

<script>
  import EmphasisImportance from "@examples/typography/text/emphasis-importance.svelte"
  import Lists from "@examples/typography/text/lists.svelte"
  import Labels from "@examples/typography/text/labels.svelte"
  import AddressTime from "@examples/typography/text/address-time.svelte"
</script>

In virtually every interface, displaying information via text is the core feature–and doing this semantically can require many different elements.

---

## Paragraphs

The `<p>` tag is a block level element that encompasses a run of any length of text and can include links, images, break lines, and more.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) Avoid using blank `<p>` elements for spacing as screen readers will announce the element.

---

## Lists

Lists of items can be grouped using the `<li>` tag for each items, along with a required parent element for either undorered `<ul>` lists or ordered `<ol>` lists.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) In addition, the `<menu>` tag can be used to wrap list items and is considered the same as a `<ul>`, except it’s semantically meant for interactive groups of items.

The main difference between `<menu>` and `<nav>` is that `<menu>` is **not** for site navigation. As a rule of thumb, use `<menu>` when grouping a list of buttons and `<nav>` when grouping a list of links.

<Lists />

---

## Labels

The `<label>` tag should only be used in association with elements such as `<input>`, `<textarea>`, `<select>`, and other valid form elements. Labels are considered a caption[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) for these elements, and come with useful built-in functionality such as:

- focusing the associated element
- announcing the caption when a screen reader focuses the associated element

To get these benefits, you can add a `for` attribute that matches the associated element's `id` attribute value. However, a simpler solution that nixes requiring a bunch of id attributes is to make the associated element a child of the label (this is also a great example of using the `<span>` tag to style the label text separately):

<Labels />

---

## Addresses and dates

Use the `<address>` element for any content related to physical or digital addresses. Address details can be grouped together and include informative labeling inside of the element directly.

The `<time>` element should only be used for dates, either as a datetime or duration. Use the `datetime` attribute for machine readable values, which can help browsers present actions like "save to calendar".

<AddressTime />

---

## Empaphsis and importance

The `<em>` tag is for stress emphasis in a sentence structure while the `<strong>` tag is for text that is of significant importance. Because of this, it's probably rare that you would want to use `<em>` in interfaces for non-literary text. A good example of using `<strong>` is with alert style content.

<EmphasisImportance />

---

## Bold and italic

While the `<strong>` and `<em>` tags are sometimes considered replacements for `<b>` and `<i>` (as their default styling matches those tags), both are still valid and acceptable. Generally, the `<b>` tag can be avoided as its use cases match either `<strong>` or a styled `<span>`, but its usage is to visually note some text without signifying that it’s important.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)

The `<i>` tag is primarily for calling out a block of text as separate[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i) and has become popular for displaying icons—as semantically meaningful icons can be composed using [font ligatures](https://alistapart.com/article/the-era-of-symbol-fonts/) and a screen readable label. There are a few caveats:

- Ensure a visible text label isn't also present with the same value as screen readers will read the word twice.
- Avoid single character icons as that is not semantically meaningful.

---

## Spans

The `<span>` element is an inline version of the generic `<div>` block element and while it is a useful text wrapping element, it should be used as a last resort if a more semantic text element isn't appropriate.

The `<span>` element is however, perfect for when you need to style a block of text within a paragraph but it has no other semantic meaning that would warrant using `<em>`, `<strong>`, etc.
