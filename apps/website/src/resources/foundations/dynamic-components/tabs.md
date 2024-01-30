---
title: Tabs
slug: tabs
---

---

## Definition

Tabs include their own patterns and keywords.[citation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role) Successfully implementing tabs requires proper role assignment, keyboard focus, and aria attributes.

```html
<div role="tablist" aria-orientation="horizontal" aria-label="Manage your account">
  <button id="tab-1" type="button" role="tab" tabindex="0">Tab 1</button>

  <button id="tab-2" type="button" role="tab" tabindex="-1">Tab 2</button>

  <div role="tabpanel" aria-labelledby="tab-1" tabindex="0">tab 1’s content</div>

  <div role="tabpanel" aria-labelledby="tab-2" tabindex="-1" hidden="true">
    tab 2’s content
  </div>
</div>
```

---

## List attributes

The container of tabs should include the `role="tablist"` attribute, along with an `aria-orientation` attribute containing either `vertical` or `horizontal`, depending on the layout of tabs (see the interactivity section for why this matters). An additional `aria-label` describing the overall purpose of the set of tabs is recommended.

---

## List item attributes

Each button that controls the visibility of a tab should include the `role="tab"` attribute, a unique `id`, and a `tabindex` of `0` if the tab is active or `-1` if the tab is inactive.

---

## Panel attributes

Each panel containing the tab’s contents should include the `role="tabpanel"` attribute, an `aria-labelledby` value pointing to the id of the related tab navigation button, and a `tabindex` of `0` if the tab is active or `-1` if the tab is inactive. Additionally, the `hidden` attribute should be set to `true` or `false` based on the same parameters as `tabindex`

---

## Interactivity

When creating tabs, horizontally oriented tab navigation should use the left and right arrow keys for non-pointer based item selection (ie: mouse and touch). Vertical tab navigation should use the up and down arrow keys.
