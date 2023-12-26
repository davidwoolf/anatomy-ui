The `<label>` tag should only be used in association with elements such as `<input>`, `<textarea>`, `<select>`, and other valid form elements. Labels are considered a caption[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) for these elements, and come with useful built-in functionality such as:

- focusing the associated element
- announcing the caption when a screen reader focuses the associated element

To get these benefits, you can add a `for` attribute that matches the associated element's `id` attribute value. However, a simpler solution that nixes requiring a bunch of id attributes is to make the associated element a child of the label (this is also a great example of using the `<span>` tag to style the label text separately):