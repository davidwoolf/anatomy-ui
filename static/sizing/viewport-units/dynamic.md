One problem with `vh` and `vw` is when a browser has contextual UI that goes away under certain circumstances (ex: Mobile Safari’s bottom toolbar minifies on scroll). Enter dynamic viewport units: `dvh` and `dvw`, which can be used to ensure items are sized accurately based on the current browser viewport size. Dynamic units can solve long standing problems with dimensions being calculated either too small or too large due to dynamic browser UI.

Just be aware that item dimensions will recalculate when the browser UI changes in a way that changes the viewport height.
