---
title: Menus
slug: menus
---

Menus are a specific type of popover used for lists of actionable buttons. Conceptually, they are the same as popovers but differ based on UI and accessibility requirements.

---

## Definition

A contextual menu has similar interaction settings as a popover, but is distinctive for accessibility purposes.[citation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role)

```html
<body>
  <button
    id="menu-button"
    type="button"
    aria-haspopup="menu"
    aria-expanded="false"
    aria-controls="menu-id">
    Share
  </button>

  <ul id="menu-id" role="menu" aria-labelledby="menu-button" aria-orientation="vertical">
    <li role="menuitem">
      <button type="button" tabindex="-1">Website 1</button>
    </li>
    <li role="menuitem">
      <button type="button" tabindex="-1">Website 2</button>
    </li>
    <li role="menuitem">
      <button type="button" tabindex="-1">Website 3</button>
    </li>
    <li role="menuitem">
      <button type="button" tabindex="-1">Website 4</button>
    </li>
  </ul>
</body>
```

---

## Trigger attributes

For contextual menus, the trigger that controls opening the menu should include the `aria-haspopup="menu"` and `aria-controls="menu-id"` attributes (where “menu-id” matches the `id` attribute on the menu itself). In addition, the `aria-expanded` attribute should be set to `true` or `false` depending on if the menu is open or not.

---

## Menu attributes

For the menu itself, include the `role="menu"` attribute, along with the `aria-labelledby` attribute, whose value should point to the `id` of the button that opens the menu. Finally, the `aria-orientation` should be `vertical` or `horizontal` depending on the primary layout of the menu items.

---

## Menu item attributes

Items in the menu list itself should include either `role="menuitem"`, `role="menuitemcheckbox"`, or `role="menuitemradio"` depending on what the item does. For a binary state (checked or unchecked) use the `menuitemcheckbox` value. For a list of options where one is valid and required, use the `menuitemradio` value.

---

## Interactivity

The example above includes `tabindex="-1"` on menu button items, which is intentional. When creating menus, vertically oriented menus should use the up and down arrow keys for non-pointer based item selection (ie: mouse and touch). Horizontal menus should use the left and right arrow keys. Additionally, selection by typing 1 or more characters in their name is required for full implementation.

These interactivity features align a menu with native ui including non-browser menus and in-browser `<select>` elements.
