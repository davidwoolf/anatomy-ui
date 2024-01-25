To clip multiple lines of text, use the `-webkit-line-clamp` property, which is supported in all major browsers. However, this property comes with a few caveats:

- `display: -webkit-box` and `webkit-box-orient: vertical` are also both required
- `text-overflow` does nothing here and ellipses are always used
- applying padding to the text with the line clamp value can create artifacts on clipped lines
- text clipping is not based on any parent container dimensions, only the text's number of lines
- the parent container must have `overflow: hidden` applied OR a defined `height`.
