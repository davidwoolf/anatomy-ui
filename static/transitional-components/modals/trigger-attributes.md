The trigger element that controls opening the modal (in this case, a button) should include the `aria-haspopup="dialog"` and `aria-controls="modal-id"` attributes (where “modal-id” matches the `id` attribute on the modal itself). In addition, the `aria-expanded` attribute should be set to `true` or `false` depending on if the modal is open or not.