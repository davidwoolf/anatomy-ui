---
title: Modals
slug: modals
---

<script>
  import Panels from "@examples/dynamic-components/modals/panels.svelte";
</script>

Modals are a type of blocking UI which requires action to be dismissed and are one of the most common dialog patterns implemented in software.

---

## Definition

A modal is a type of contextual UI that prevents interaction with outside elements.[citation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal#description) It is generally presented in an isolated manner, with a background layer separating it from the rest of the UI. In interface design, there is a concept of “mode based interfaces” in which the UI changes based on the selected mode (think of editing vs viewing modes). Modals do exactly this, creating a contextual interface mode that requires action to be dismissed.

In order to create fully accessible modals, the `<dialog>` element can be used, along with some aria attributes:

```html
<button
  type="button"
  aria-haspopup="dialog"
  aria-expanded="false"
  aria-controls="modal-id">
  open modal
</button>

<dialog id="modal-id" aria-labelledby="modal-title" aria-describedby="modal-description">
  <h2 id="modal-title">Title</h2>
  <p id="modal-description">Description</p>

  <button type="button" autofocus>close modal</button>
</dialog>
```

---

## Trigger attributes

The trigger element that controls opening the modal (in this case, a button) should include the `aria-haspopup="dialog"` and `aria-controls="modal-id"` attributes (where “modal-id” matches the `id` attribute on the modal itself). In addition, the `aria-expanded` attribute should be set to `true` or `false` depending on if the modal is open or not.

---

## Modal attributes

The modal itself should include the `aria-labelledby` and `aria-describedby` attributes, both matching title and description element’s `id` attribute values within the modal itself. This applies when using the `<dialog>` element as the modal container, but also other elements that have the role of `dialog` or `alertdialog`.

---

## Interactivity

Modals should trap keyboard focus, cycling through only the focusable elements within the modal itself. Elements outside of the modal should also be non-interactive for pointer devices (ie: mouse and touch) when the modal is active. When the modal conforms to an `alertdialog`, ensure that both “cancel” and “confirm” buttons are provided in addition to a regular X close button.

---

## Panels

As a UI pattern, panels are generally considered an extension of modals because of keyboard focus trapping, explicit dismissal requirements, and the use of a backdrop to separate the panel from other elements in the document. When treating panels this way, use all of the attributes required for regular modals as well.

<Panels />
