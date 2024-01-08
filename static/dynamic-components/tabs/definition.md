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
