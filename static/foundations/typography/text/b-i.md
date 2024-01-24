While the `<strong>` and `<em>` tags are sometimes considered replacements for `<b>` and `<i>` (as their default styling matches those tags), both are still valid and acceptable. Generally, the `<b>` tag can be avoided as its use cases match either `<strong>` or a styled `<span>`, but its usage is to visually note some text without signifying that it’s important.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)

The `<i>` tag is primarily for calling out a block of text as separate[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i) and has become popular for displaying icons—as semantically meaningful icons can be composed using [font ligatures](https://alistapart.com/article/the-era-of-symbol-fonts/) and a screen readable label. There are a few caveats:

- Ensure a visible text label isn't also present with the same value as screen readers will read the word twice.
- Avoid single character icons as that is not semantically meaningful.