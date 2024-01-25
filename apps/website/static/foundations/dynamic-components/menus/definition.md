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
