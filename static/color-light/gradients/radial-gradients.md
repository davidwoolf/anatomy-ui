The `radial-gradient()` CSS function includes the same color stop and hint values as `linear-gradient()` but with different starting values. Because all radial gradients originate from a center, there is no angle value. Instead, shape, size, and position values can be provided. Each value includes a default and can be omitted, but when used together, the order should be:

```css
background: radial-gradient(<shape> <size> <position>, /* color stops */);
```
