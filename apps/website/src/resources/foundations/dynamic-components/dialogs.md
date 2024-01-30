---
title: Dialogs
slug: dialogs
---

<script>
  import Backdrop from "@examples/dynamic-components/dialogs/backdrop.svelte";
</script>

Dialogs are an overarching concept that can be narrowed to modals and popovers. Additionally, a dialog element exists to abstract common patterns usually implemented with a combination of HTML, CSS, and Javascript.

---

## Element definition

The `<dialog>` element is a recent introduction in HTML, intended to abstract complex but yet common patterns, mainly around positioning, visibility, and focus.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#browser_compatibility) In the past, use of the element was discouraged due to incomplete features, browser support, and mismatched expectations around accessibility, but the tide [seems](https://www.scottohara.me/blog/2023/01/26/use-the-dialog-element.html) to be turning in favor of using `<dialog>` over more custom implementations.

At its most basic, using `<dialog>` in HTML isn’t much different than custom implementations:

```html
<button type="button">open dialog</button>

<!-- semantically the same as <div role="dialog"> -->
<dialog>
  <h2>Title</h2>
  <p>Description</p>

  <!-- autofocus should be placed on a focusable element or the dialog itself  -->
  <button type="button" autofocus>close dialog</button>
</dialog>
```

_Note: Do not include the `tabindex` attribute on `<dialog>` elements as they already handle focus trapping._

---

## Modal vs modeless

The `<dialog>` element can act as both a modal or modeless–or non-modal–element. Using the `showModal()` Javascript function to open a dialog sets it as a modal, while using the `show()` Javascript function sets it as modeless, placing it inline within the document (with a default `position` style of `absolute`). The differences between the two are nuanced:

| feature                                                   | modal | modeless |
| --------------------------------------------------------- | ----- | -------- |
| default position                                          | fixed | absolute |
| includes default styles                                   | yes   | yes      |
| supports the close() function                             | yes   | yes      |
| supports the ::backdrop selector                          | yes   | no       |
| disables non-dialog elements                              | yes   | no       |
| dismisses on esc                                          | yes   | no       |
| sits in the top layer (unaffected by Z stacking contexts) | yes   | no       |

---

## Backdrop

When setting a dialog as a modal, the backdrop between the dialog and background elements can be styled via the `::backdrop` pseudo selector.

<Backdrop />

---

## Animations

Dialogs don’t animate by default, but they can configured via the `animate` CSS property. Transitions won’t work as the dialog isn’t visible to start, but due to the way they are opened and closed, an `animation` will re-run on every appearance. Both the dialog and `::backdrop` selector can be animated, but be aware that this only works when opening the dialog.

For more control over animations, descendant elements can be used alongside more Javascript. Or you can disregard the `<dialog>` element altogether in favor of `<div role=\"dialog\">`

---

## Roles

The `dialog` role can be applied to a regular `<div>` to signal to the DOM that the current element should behave like a regular dialog:

```html
<!-- semantically the same as using <dialog> -->
<div role="dialog"></div>
```

However, this role will not provide any of the features the built-in `<dialog>` includes, like a backdrop, focus trapping, or special z-index stacking.

---

## Alerts

For dialogs that show important messages and require a confirmation or cancel action, use the `alertdialog` role:

```html
<div role="alertdialog">
  <button>cancel</button>
  <button>confirm</button>
</div>
```

Alert dialogs are useful for situations such as confirming a destructive action or when an error requires user input to address it, and they are always considered modals since a blocking action is required.[citation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role#description)
