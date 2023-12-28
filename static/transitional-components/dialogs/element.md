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

_Note: Do not include the `tabindex` attribute to `<dialog>` elements, they already handle focus trapping._
