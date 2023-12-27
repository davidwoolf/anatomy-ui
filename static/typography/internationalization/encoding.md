UTF-8 is the only valid character encoding accepted on HTML5 documents.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#charset) However, the exclusion of this value means a default character encoding other than UTF-8 may be used, which can create encoding issues for special characters. Therefore, ensure your site includes the following at the top of the <head> tag:

```html
<meta charset="utf-8" />
```
