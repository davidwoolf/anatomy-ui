In constrast with `rem`, the `em` unit is based on inherited font sizes from ancestor elements, and will continue increasing child sizes based on the parent. Most of the time this will only serve to cause headaches, but it can be really useful when a subset of text needs to be relationally sized as a percentage of the rest of the text (for example: captions):

When using `em` like this, be careful to set a minimum value so text remains readable. This can be accomplished with the `max` css function—which will take the largest value from a comma delimited list:

```css
/* max will always take the biggest value from a list of options */
.property {
  font-size: max(0.625rem, 0.75em);
}
```
