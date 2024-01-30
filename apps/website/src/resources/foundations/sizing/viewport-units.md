---
title: Viewport units
slug: viewport-units
---

Viewport units are a powerful way to control the size of elements based on the size the browser–which varies on desktop devices and is usually full screen on mobile devices.

---

## Default units

The `vh` and `vw` units are the default viewport units for height (`vh`) and width (`vw`). They are calculated as a percentage of the viewport, so `100vh` is 100% of the viewport height. How they differ from percentage units depends on the context:

- percentage units (ie: `50%`) are based on the immediate parent’s dimensions
- applying `height: 100%` does not work unless using grid or flex layouts
- `vh` and `vw` values can be used interchangeably for both width and height

---

## Dynamic units

One problem with `vh` and `vw` is when a browser has contextual UI that goes away under certain circumstances (ex: Mobile Safari’s bottom toolbar minifies on scroll). Enter dynamic viewport units: `dvh` and `dvw`, which can be used to ensure items are sized accurately based on the current browser viewport size. Dynamic units can solve long standing problems with dimensions being calculated either too small or too large due to dynamic browser UI.

Just be aware that item dimensions will recalculate when the browser UI changes in a way that changes the viewport height.

---

## Small and large units

For more explicit control with dynamic browser UI, use `svh`, `svw`, `lvh`, and `lvw` units (where `s` means small, and `l` means large).

As an example, a design outlines a hero image which is always 70% of the viewport height. This is to ensure a nice magazine layout, while also showing the start of some text to indicate there’s more content on scroll. And, since this hero image sits at the top of the page, any dynamic browser UI should be largest (based on current device samplings).

Using `vh` units might have unintended side effects with dynamic browser UI and appear too large, hiding the start of the text that should always be visible. In addition, `dvh` won't necessarily work because scrolling may increase the image size, which is distracting and unnecessary.

Instead, this seems like a perfect use case for `svh` units. Because it’s based on the smallest viewport, dynamic browser UI or not, the image will be 70% of the screen height.
