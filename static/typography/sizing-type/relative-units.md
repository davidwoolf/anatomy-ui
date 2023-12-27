When using `rem` units, all sizes are calculated from the base font size of the body element. This defaults to `16px` (which is not 16 actual, physical pixels), so setting your type to `2rem` is equal to `32px` and so on. Applying rem sizes to parent elements and then additionally to children elements will not reset the scale, it will always be multiplied from the body element’s value.