Tooltips are distinct from dialogs and are reserved for non-interactive information. They are also not driven by interface actors and will appear or disappear when a pointer (a mouse, keyboard, etc) is entering or leaving an element.[citation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role#description)

```html
<button type="button" aria-describedby="tooltip-content">control</button>

<div id="tooltip-content" role="tooltip">
  <p>this text describes the button control</p>
</div>
```
