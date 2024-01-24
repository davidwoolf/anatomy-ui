The `vh` and `vw` units are the default viewport units for height (`vh`) and width (`vw`). They are calculated as a percentage of the viewport, so `100vh` is 100% of the viewport height. How they differ from percentage units depends on the context:

- percentage units (ie: `50%`) are based on the immediate parent’s dimensions
- applying `height: 100%` does not work unless using grid or flex layouts
- `vh` and `vw` values can be used interchangeably for both width and height
