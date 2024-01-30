---
title: Responsive queries
slug: responsive-queries
---

Layout values can respond to the overall browser context in multiple ways. In addition to flex and grid layouts, aspect ratios, and minimum and maximum bounds there are tools available to clamp sizes, along with explicity overriding values at specific sizes.

---

## Media queries

Media queries check values from the browser context itself. This means targeting a minimum width and height will apply to the entire browser, not the component these values are being applied to.

When using media queries, build up instead of down. What is laid out on a small device will (usually) work on a large device. While this doesn’t mean a small layout will look great on desktop, it will at least function. This also means that it’s usually easier to work on progressive enhancements for larger and larger screen sizes, rather than spending time fixing visual bugs because a desktop interface doesn’t function on a phone.

Let go of the notion that interfaces will be pixel perfect at every size. Instead, pick a few common, relatively evenly spaced sizes and ensure things look great there.

---

## Container queries

Media query values for properties like width and height come from the overall browser, not isolated sections. This makes media queries less useful when targeting layout details for base components that may be shown in a variety of contexts. Container queries are a newer feature that can be used for this exact purpose.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries)

Other than being based on a container and not the entire viewport, they work in a similar manner to media queries.
