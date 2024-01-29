---
title: Semantic elements
slug: semantic-elements
---

Layout helps define the hierarchy and flow of content in interfaces. While styling does this visually, section level elements including divs, headers, and footers help semantically describe your interface.

---

## body

All flow content can be added to the `<body>` element[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content), which can only be declared once in an HTML file. Flow content includes presentational elements and things like scripts.

---

## main

The `<main>` element should wrap the core functionality of a page. Similar to the `<body>` element, `<main>` has some restrictions on its usage. Only one `<main>` element should be present and marked as visible. When including a “skip to main content” feature for keyboard navigation, it’s recommended to target the `<main>` element.

Avoid including app-level UI such as global headers, navigation, and footers inside of the `<main>` element[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main#usage_notes) unless they are the primary function of the specific page.

For older browsers, you can add the `role="main"` to a `<div>` element instead to get similar semantic meaning. However, defer to using available elements rather than roles when possible.

---

## section

The `<section>` element sits one level above `<div>` semantically, but is considered a catch all element when a more descriptive element like `<header>`, `<nav>`, or `<article>` doesn’t make sense. What differentiates `<section>` from `<div>` is that it semantically describes a standalone area of a document.

Because of this, it is highly recommended to include a heading level text element within every `<section>`.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) If this feels heavy handed, then you most likely want to use a `<div>`.

---

## header

The `<header>` element can be used both globally and within sections.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header#usage_notes) When used outside of other sectioning elements, it acts as the [banner](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role) landmark role. This means a top-level `<header>` element used between pages and including site information and links is different from a `<header>` element used inside of an element like `<article>`.

---

## footer

Similar to `<header>`, the `<footer>` element can be used both globally or within sections. When used globally, it has the [contentinfo](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role) role.

---

## navigation

For a group of navigation links, use the `<nav>` element. Ensure you use this element sparingly for core navigation relevant to a page. Ancillary links in elements such as `<footer>` don’t need to be wrapped in `<nav>` unless they include a set of related links for the page.

When adding multiple `<nav>` elements to a page, use the `aria-labelledby` attribute[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#labeling_section_content), in combination with a text level element and matching `id` attribute to distinguish between them.

```html
<header>
  <nav aria-labelledby="site-navigation">
    <h2 id="site-navigation">Site links</h2>
    <!-- links -->
  </nav>
</header>

<article>
  <aside>
    <nav aria-labelledby="resource-navigation">
      <h2 id="resource-navigation">Additional resources</h2>
      <!-- links -->
    </nav>
  </aside>
</article>
```

---

## article

While the name might suggest a very specific usage, `<article>` should be used as the container element for any self contained piece of information that can be inserted elsewhere in a document, app, or on third party sites.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) This includes:

- Blog posts (probably the most well known example)
- Product information
- Individual comments
- Widgets (ex: weather conditions)
- Social media posts

Just make sure to add a text heading for each article (the level is up to you). You can also nest `<article>` elements within another, as long as it relates to the parent (a great example is comments on a blog post). When doing this, avoid using a child `<article>` element for ancillary details that don’t make sense on their own.

If you are using `<article>` for a list of items, consider grouping them in a `<section>` that has the `role="feed"` attribute.[citation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role)

```html
<section role="feed">
  <article />
  <article />
  <article />
  <article />
  <article />
  <article />
  <!-- n number of items continues... -->
</section>
```

---

## aside

The `<aside>` element in an app interface would most likely be used as a sidebar.[citation](https://html.spec.whatwg.org/multipage/sections.html#the-aside-element). The most important takeaway is that content in the `<aside>` element should be considered mostly separate from the content around it.

---

## div

Use `<div>` elements when a semantic elements isn’t appropriate. This is usually desired when grouping child elements to control layout and styling.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#usage_notes) The `<div>` element is, semantically, the block-level version of `<span>` so treat it similarly but with block level content.
