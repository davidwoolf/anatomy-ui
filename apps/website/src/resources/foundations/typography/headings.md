---
title: Headings
slug: headings
---

Headings provide structure and natural segmentation to your content and are an important semantic device for understanding the structure of a page.

---

## Usage

HTML includes `<h1>` through `<h6>`, each creating a block element. When using headings, avoid multiple `<h1>` elements. It's also important to not skip heading levels in distinctive sections of content; skipping from `<h1>` to `<h3>` without including an `<h2>` is considered bad practice.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#usage_notes)

Because headings are an important semantic device for understanding the structure of a page view, consider how you want to compose app content holistically and give yourself the tools to control this structure within reusable components.

---

## Composability

In most interfaces, components are abstracted and reused in different contexts and orders. Therefore, including hard coded headings such as `<h2>` and `<h3>` won't work as they may get out of order. There are a couple ways to handle problems like this:

- create composable components where base componetns are passed as children
- add prop arguments for headings and other text elements

In general, use composable architectures–especially if the main goal of the component is to abstract styling rather than stateful functionality. This mirrors static HTML element structure and encourages more atomic component systems. At a certain low level however, you may need to go the prop argument route.
