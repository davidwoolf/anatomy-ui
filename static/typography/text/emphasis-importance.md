The `<em>` element is for stress emphasis in a sentence structure while the `<strong>` element is for text that is of significant importance. Because of this, it's probably rare that you would want to use `<em>` in interfaces for non-literary text. A good example of using `<strong>` is with banner notifications:

<!-- ```html
<p>
  <strong>Warning!</strong> This action will delete all of your content.
</p>
``` -->

## A note about `<i>` and `<b>`

In general, avoid `<b>`, as it doesn't provide useful semantics around importance or emphasis. 

However, the `<i>` element can be a useful way to handle icons. Because `<i>` is primarily for calling out a block of text as separate[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i), semantically meaningful icons can be generated with this element and [font ligatures](https://alistapart.com/article/the-era-of-symbol-fonts/). There are a few caveats:

- Ensure a visible text label isn't also present with the same value as screen readers will read the word twice.
- Avoid single character icons as that is not semantically meaningful.