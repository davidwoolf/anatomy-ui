Buttons can contain any content considered [phrasing](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content) content, as long as it's also not [interactive](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#interactive_content) content.

However, any tags such as headings and paragraphs placed inside of button will implicitly include the `role=presentation` attribute in accessibility contexts, which turns off their semantic meaning. Here's an example:

```html
<button>
  <!-- the role="presentation" attribute is added by the browser in accessibility contexts -->
  <p role="presentation">I am a paragraph</p>
</button>

<!-- this is the same as the above button -->
<button>
  <div>I am a paragraph</div>
</button>
```

The interactive content list is a lot shorter than the phrasing list, so avoid placing these elements inside of your buttons.

| element      | avoid                             |
| ------------ | --------------------------------- |
| `<button>`   | always                            |
| `<details>`  | always                            |
| `<embed>`    | always                            |
| `<iframe>`   | always                            |
| `<label>`    | always                            |
| `<select>`   | always                            |
| `<textarea>` | always                            |
| `<a>`        | when using the href attribute     |
| `<audio>`    | when using the controls attribute |
| `<img>`      | when using the usemap attribute   |
| `<input>`    | if type is not set to hidden      |
| `<object>`   | when using the usemap attribute   |
| `<video>`    | when using the controls attribute |
