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
