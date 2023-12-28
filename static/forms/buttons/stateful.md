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

## Toggle Buttons

To use buttons as a toggle, make sure to include `aria-pressed`. This attribute won't actually toggle the button (that still requires Javascript), but its necessary to provide an accurate state of the button for all actors. The attribute accepts one of the following values:

| value | description          |
| ----- | -------------------- |
| true  | actively pressed     |
| false | not actively pressed |
| mixed | partially pressed    |
