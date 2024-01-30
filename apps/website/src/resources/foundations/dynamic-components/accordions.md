---
title: Accordions
slug: accordions
---

---

## Definition

```html
<div>
  <h2>
    <button
      id="accordion-button-1"
      type="button"
      aria-controls="accordion-content-1"
      aria-expanded="false">
      Open accordion item
    </button>
  </h2>

  <div id="accordion-content-1" role="region" aria-labelledby="accordion-button-1">
    <!-- accordion item contents -->
  </div>
</div>
```

---

## Trigger attributes

The trigger element that controls opening the accordion item (in this case, a button) should include the `aria-controls="accordion-content-id"` attributes (where “accordion-content-1” matches the `id` attribute on the dialog itself) along with the `aria-expanded` attribute, which should be set to `true` or `false` depending on if the accordion item is open or not.

The trigger should conform to the button role by using a standard `<button>` or an element with `role="button"`.[citation](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) Additionally, the button should be wrapped in an appropriate heading element.

---

## Item attributes

The accordion item itself should include an `id` matching the `aria-controls` attribute value of the trigger element. In addition, a `aria-labelledby` attribute should match the `id` attribute value of the trigger element, tying the trigger and item to each other. Finally, the `role="region"` attribute should be applied for accordions that support multiple items being open and with less than six items.

---

## Interactivity

When the accordion is focused, triggers should be navigable by tabbing or using the `Up` and `Down` arrow keys. Additionally, the `Home` and `End` keys can be used to jump the first or last trigger respectively.
