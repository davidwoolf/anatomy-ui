Disclosure widgets can be created via a combination of `<detail>` and `<summary>` elements.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#see_also) Content toggling is included without any need for JavaScript, however each disclosure item is independent from others (versus an accordion where only one item is visible at a time).

```html
<!-- syntax for detail and summary disclosures -->
<detail>
  <summary>This text is always visible</summary>

  <p>this text is visible when the disclosure widget is open</p>
</detail>
```
