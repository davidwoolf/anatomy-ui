A button can be of type `submit`, `reset`, or `button`.[citation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) The `submit` type is the default state when the button is associated with a form or `type` is empty, missing or invalid. Here are some examples:

```html
<!-- examples of valid button types -->
<button type="button">click me</button>
<button type="submit">submit</button>
<button type="reset">reset</button>

<!-- an excluded `type` attribute defaults to "submit" -->
<button>submit</button>

<!-- an example of an invalid type, which will default to "submit" -->
<button type="custom-type">submit</button>
```
