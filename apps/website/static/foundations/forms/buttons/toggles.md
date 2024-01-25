To use buttons as a toggle, make sure to include `aria-pressed`. This attribute won't actually toggle the button (that still requires Javascript), but its necessary to provide an accurate state of the button for all actors. The attribute accepts one of the following values:

| value | description          |
| ----- | -------------------- |
| true  | actively pressed     |
| false | not actively pressed |
| mixed | partially pressed    |
