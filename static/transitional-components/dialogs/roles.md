The `dialog` role can be applied to a regular `<div>` to signal to the DOM that the current element should behave like a regular dialog:

```html
<!-- semantically the same as using <dialog> -->
<div role="dialog"></div>
```

However, this role will not provide any of the features the built-in `<dialog>` includes, like a backdrop, focus trapping, or special z-index stacking.
