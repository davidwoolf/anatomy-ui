---
title: Tooltips
slug: tooltips
---

Reserved for non-interactive information, tooltips are the most ephemeral and temporary dynamic component.

---

## Definition

Tooltips are distinct from dialogs and are reserved for non-interactive information. They are also not driven by interface actors and will appear or disappear when a pointer (a mouse, keyboard, etc) is entering or leaving an element.[citation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role#description)

```html
<button type="button" aria-describedby="tooltip-content">control</button>

<div id="tooltip-content" role="tooltip">
  <p>this text describes the button control</p>
</div>
```

---

## Trigger attributes

The trigger element which the tooltip is attached to should include an `aria-describedby` attribute, pointing to the unique id of the tooltip itself.

---

## Tooltip attributes

The tooltip content should include an `id` matching the control’s `aria-describedby` value, along with `role="tooltip"`.

---

## Interactivity

Tooltips should only be displayed when the relevant control has keyboard focus or is being hovered over by a mouse pointer. All content inside of the tooltip should not be interactive.
