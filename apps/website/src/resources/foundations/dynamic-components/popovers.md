---
title: Popovers
slug: popovers
---

A popover is a type of contextual UI that can be described as modeless–the reason being that other interface elements in the document are still interactive while the popover is visible.

---

## Definition

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

---

## Trigger attributes

The trigger element that controls opening the popover (in this case, a button) should include the `aria-haspopup="dialog"` and `aria-controls="popover-id"` attributes (where “popover-id” matches the `id` attribute on the dialog itself). In addition, the `aria-expanded` attribute should be set to `true` or `false` depending on if the popover is open or not.

---

## Popover attributes

No additional aria attributes are required for popovers, other than the `id` value which should match the `aria-controls` value in the triggering element.

---

## Interactivity

Popovers generally should not trap keyboard focus, as they are modeless and don’t require action to continue using the rest of the interface (if they do, consider using a modal pattern). Additionally, popovers should generally be easily dismissible via a pointer click outside, hitting the `Escape` key, activating an outside element via the keyboard, and ideally an explicit close button within the popover itself.

---

## Native popover support

Historically, popovers needed to be implemented manually via aria attributes, JavaScript, and careful z-index management. However, a new `popover` set of attributes makes this easier (note: browser support is not complete for this feature):

```html
<!-- popovertarget should match the popover’s id -->
<button type="button" popovertarget="popover-id">open popover</button>

<div id="popover-id" popover></div>
```

The above will open a popover when the button is triggered via a pointer event (click or touchdown) or via the keyboard. The popover `<div>` itself will be positioned outside of the document’s z-index stacking context (along with any ancestor element’s `overflow` value) and auto centered on the page. While it can be moved around, the `popover` attribute doesn’t handle auto positioning relative to the trigger element and still (currently) requires JavaScript for that purpose.

In order to prevent z-index and overflow issues, elements using the `popover` attribute are added to the top layer of the document.[citation](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer) This is the same for the `<dialog>` element when shown in a modal context.

### Differences between the dialog element and popover attribute

A `<dialog>` is a semantic element that can be used to create modals or generic popovers. The popover attribute, on the other hand, is a concept describing how a piece of UI should appear and affect other elements.[citation](https://html.spec.whatwg.org/dev/popover.html#the-popover-attribute) The popover attribute can be used with any temporary, contextual UI including sub menus and toast notifications.
