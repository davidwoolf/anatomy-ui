Historically, popovers needed to be implemented manually via aria attributes, JavaScript, and careful z-index management. However, a new `popover` set of attributes makes this easier (note: browser support is not complete for this feature):

```html
<!-- popovertarget should match the popover’s id -->
<button type="button" popovertarget="popover-id">open popover</button>

<div id="popover-id" popover></div>
```

The above will open a popover when the button is triggered via a pointer event (click or touchdown) or via the keyboard. The popover `<div>` itself will be positioned outside of the document’s z-index stacking context (along with any ancestor element’s `overflow` value) and auto centered on the page. While it can be moved around, the `popover` attribute doesn’t handle auto positioning relative to the trigger element and still (currently) requires JavaScript for that purpose.

In order to prevent z-index and overflow issues, elements using the `popover` attribute are added to the top layer of the document.[citation](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer) This is the same for the `<dialog>` element when shown in a modal context.

## Differences between the dialog element and popover attribute

A `<dialog>` is a semantic element that can be used to create modals or generic popovers. The popover attribute, on the other hand, is a concept describing how a piece of UI should appear and affect other elements.[citation](https://html.spec.whatwg.org/dev/popover.html#the-popover-attribute) The popover attribute can be used with any temporary, contextual UI including sub menus and toast notifications.
