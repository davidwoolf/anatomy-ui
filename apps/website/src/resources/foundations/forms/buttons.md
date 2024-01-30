---
title: Buttons
slug: buttons
---

<script>
  import Strategies from "@examples/forms/buttons/strategies.svelte";
  import FocusState from "@examples/forms/buttons/focus-state.svelte";
  import Affordances from "@examples/forms/buttons/affordances.svelte";
  import MixedButtonUse from "@examples/forms/buttons/mixed-button-use.svelte";
  import ResetButton from "@examples/forms/buttons/reset-button.svelte";
  import FormValidation from "@examples/forms/buttons/form-validation.svelte";
  import OmittingLabels from "@examples/forms/buttons/omitting-labels.svelte";
  import Popups from "@examples/forms/buttons/popups.svelte";
  import Toggles from "@examples/forms/buttons/toggles.svelte";
  import CustomElements from "@examples/forms/buttons/custom-elements.svelte";
</script>

Buttons may seem straightforward, but proper functionality, styling, and accessibility concerns all contribute to unseen complexity. Learn the nuances of buttons and the issues that can arise when creating buttons in different contexts.

---

## Types of buttons

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

---

## Form submissions

For buttons that post data to a server, use `type=submit`. Submit buttons can include many form details normally applied to the `<form>` element via attributes. Providing these values to the submit button will override the value set on the form itself:

| attribute     | description                                  |
| ------------- | -------------------------------------------- |
| `formaction`  | maps to the form element's action attribute  |
| `formmethod`  | maps to the form element's method attribute  |
| `formtarget`  | maps to the form element's target attribute  |
| `formenctype` | maps to the form element's enctype attribute |

### Mixed button use in forms

Since buttons default to a `type=\"submit\"`, adding buttons inside a form that should not submit the form must explicitly include `type=\"button\"` or `type=\"reset\"`.

<MixedButtonUse />

### Resetting values

"text": "When using `type=\"reset\"` in a form, you can clear form values without any Javascript. It's generally not recommended to do this, but is a built-in button type nonetheless.",

<ResetButton />

---

## Form validation

Only submit buttons can trigger a form's validation process. This is referred to as "constraint validation" in the [W3C working draft](https://www.w3.org/TR/2011/WD-html5-20110525/association-of-controls-and-forms.html#barred-from-constraint-validation). This means other buttons within a form will not inadvertently trigger form validation for child fields.

Additionally, the `formnovalidate` boolean attribute can be added to control whether form validation happens or not. However, if the button's parent `<form>` tag includes a `novalidate` attribute and the button includes `formnovalidate="false"`, validation will still be skipped. This can be confusing since other `form*` attributes on the submit button *will* override the parent `<form>` value of the same type.

<FormValidation />

---

## Content restrictions

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

---

## Styling and interactivity

Buttons are configured with default styles based on the browser and operating system. This usually includes properties like `background-color`, `box-shadow`, and `padding`. There are multiple ways to reset these styles, but they all come with drawbacks resolved below.

### Resetting styles

The `all` property can remove or re-apply an element’s implicitly, explicitly, and/or inherited styles from the operating system and browser (this includes focus states).

Additionally, the `appearance: none` property's value will remove core operating system button styling, but generally keep padding, backgrounds, borders, and focus states.

<Strategies />

### Focus state

Buttons should include an outline when focused via a keyboard. When using `all: unset`, default focus states can be re-added by including `outline: revert` _after_ `all: unset`.

Additionally, custom outlines can be added using the `:focus-visible` pseudo selector to prevent them from being shown when a button is clicked by a mouse.

<FocusState />

### Affordances

By default, buttons do not use `cursor: pointer` on mouse over as links do. The reasoning is that links generally have weak affordance when compared to buttons. However, for buttons that have weak affordance (where the design cannot be changed), adding `cursor: pointer` is recommended.

<Affordances />

---

## Omitting labels

For buttons without text labels, use the `aria-label` attribute to create a readable label. The label should match what would normally be visible to everyone, so avoid extraneous values like the phrase "Click to". Also avoid using the `title` attribute as it is frequently inaccessible to screen readers and actors not using a mouse pointer.

<OmittingLabels />

---

## Disabled states

It is a common pattern to disable buttons until some other step is completed, but this should be avoided, especially in forms. Disabled buttons are confusing to all actors, and can be especially frustrating for those using screen reader devices. Here are some common uses of disabled buttons and their alternatives.

### When forms contain invalid fields

Let actors keep submitting! Whether the form values are validated on the server or client, submission attempts should generally never be disabled, only the storing of values themselves should be blocked.

### Updates to items with no changes

While it may seem obvious to prevent updates when nothing has changed, this isn't always obvious to the person making updates. Instead, let them know there haven't been any updates since the last save.

### Unauthorized access to interface sections

If an interface section is unauthorized for the current actor, it should be removed entirely, not shown in a disabled state.

---

## Popups

If a button controls the visibility of other content, it should include the `aria-expanded` attribute with a `true` or `false` value. In addition, if a button opens up content considered to be a popup, there are two additional attributes that need to be added: `aria-controls` and `aria-haspopup`. The `aria-controls` value should be the `id` of the popup's top level element.

The `aria-haspopup` attribute accepts one of the following values:

| value   | use case                                                                       |
| ------- | ------------------------------------------------------------------------------ |
| dialog  | Popups that take over the screen. Examples include alerts, confirmations, etc. |
| menu    | Menu bars with dropdowns                                                       |
| listbox | Comboboxes design pattern with a list of items (one axis)                      |
| grid    | Comboboxes design pattern with a grid of items (multi axis)                    |
| tree    | Popup that shows a folder tree like structure                                  |
| true    | Exists for ARIA 1.0 backwards compatibility and is the same as using menu      |

<Popups />

---

## Toggles

To use buttons as a toggle, make sure to include `aria-pressed`. This attribute won't actually toggle the button (that still requires Javascript), but its necessary to provide an accurate state of the button for all actors. The attribute accepts one of the following values:

| value | description          |
| ----- | -------------------- |
| true  | actively pressed     |
| false | not actively pressed |
| mixed | partially pressed    |

<Toggles />

---

## Custom elements

If a non `<button>` element has to be used to act as a button (ie: it looks and acts like a regular button), it's important to add additional markup to communicate that quirk to actors and devices.

<CustomElements />
