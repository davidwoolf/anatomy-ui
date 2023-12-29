A popover is a type of contextual UI that can be described as _modeless_–the reason being that other interface elements in the document are still interactive while the popover is visible. Popovers can be opened and closed via an actor’s keyboard or device pointer, but also automatically like with toast notifications.

```html
<button
  type="button"
  aria-haspopup="dialog"
  aria-expanded="false"
  aria-controls="popover-id">
  open popup
</button>

<div id="popover-id">
  <!-- popover contents -->
</div>
```
