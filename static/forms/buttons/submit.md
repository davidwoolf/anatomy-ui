For buttons that post data to a server, use `type=submit`. Submit buttons can include many form details normally applied to the `<form>` element via attributes. Providing these values to the submit button will override the value set on the form itself:

| attribute     | description                                  |
| ------------- | -------------------------------------------- |
| `formaction`  | maps to the form element's action attribute  |
| `formmethod`  | maps to the form element's method attribute  |
| `formtarget`  | maps to the form element's target attribute  |
| `formenctype` | maps to the form element's enctype attribute |

## Mixed button use in forms

Since buttons default to a `type="submit"`, adding buttons inside a form that should not submit the form must explicitly include `type="button"` or `type="reset"`.

## Resetting values

When using `type="reset"` in a form, you can clear form values without any Javascript. It's generally not recommended to do this, but is a built-in button type nonetheless.
