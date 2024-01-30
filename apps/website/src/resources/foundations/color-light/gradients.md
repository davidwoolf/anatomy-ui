---
title: Gradients
slug: gradients
---

<script>
  import LinearColorStops from "@examples/color-light/gradients/linear-color-stops.svelte";
  import LinearColorHints from "@examples/color-light/gradients/linear-color-hints.svelte";
  import RadialGradientShape from "@examples/color-light/gradients/radial-gradient-shape.svelte";
  import RadialGradientSize from "@examples/color-light/gradients/radial-gradient-size.svelte";
  import RadialGradientPosition from "@examples/color-light/gradients/radial-gradient-position.svelte";
  import ConicGradients from "@examples/color-light/gradients/conic-gradients.svelte";
  import RepeatingFunctions from "@examples/color-light/gradients/repeating-functions.svelte";
  import RepeatingTiling from "@examples/color-light/gradients/repeating-tiling.svelte";
  import ColorSpaces from "@examples/color-light/gradients/color-spaces.svelte";
  import HueInterpolation from "@examples/color-light/gradients/hue-interpolation.svelte";
</script>

CSS gradients are rendered as images, which impacts not only where they can be applied, but how they can be manipulated like other CSS images.

---

## Linear gradients

The `linear-gradient()` CSS function renders a color gradient on a straight line. The first value is the angle direction–starting from the center, going clockwise–which defaults to `0deg`. The angle can be formatted as any valid [angle](https://developer.mozilla.org/en-US/docs/Web/CSS/angle) type. You can also use natural language values, which are translated to an angle during render time:

| natural language value | angle  |
| ---------------------- | ------ |
| to top                 | 0deg   |
| to right               | 90deg  |
| to bottom              | 180deg |
| to left                | 270deg |

```css
/* syntax options for direction */
background: linear-gradient(90deg, /* color stops */);
background: linear-gradient(0.25turn, /* color stops */);
background: linear-gradient(0.5rad, /* color stops */);
background: linear-gradient(100grad, /* color stops */);
background: linear-gradient(to right, /* color stops */);
```

_Note: natural language values include corner values such as `to top right` , but be aware: this isn’t calculated directly as `45deg`._

### Color stops

After the direction comes a series of color stops. At least two stops are required, but you can have as many as you like. Color stops include a color value and an optional percentage `%` or static length denoting how much of the gradient should include just that color.

<LinearColorStops />

### Color hints

Color hints are a percentage or static length and are used to interpolate the progression of the gradient between the previous and next color stop. They are also calculated from the entire gradient progression, so setting `100%` as a hint after a color stop will only show that color for the rest of the gradient.

<LinearColorHints />

---

## Radial gradients

The `radial-gradient()` CSS function includes the same color stop and hint values as `linear-gradient()` but with different starting values. Because all radial gradients originate from a center, there is no angle value. Instead, shape, size, and position values can be provided. Each value includes a default and can be omitted, but when used together, the order should be:

```css
background: radial-gradient(<shape> <size> <position>, /* color stops */);
```

### Shape

A radial gradient’s shape can be denoted as `circle` or `ellipse`, with ellipse being the default.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient#values) An ellipse is based on the container’s dimensions, while a circle always has a `1:1` aspect ratio.

<RadialGradientShape />

### Size

A radial gradient’s size can be defined based on its container’s edges or as an explicit size. Edge values can be `closest-side`, `closest-corner`, `farthest-side`, and `farthest-corner` (the default value). Explicit sizes depend on the shape.\n\nFor circles, percentages are not supported due to the target axis being unknown. For ellipses, static lengths or percentages are allowed, but both the x and y axis values need to be defined. Both shapes value's translates to a radius, not the diameter.

<RadialGradientSize />

### Position

A radial gradient’s position position value conforms to [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value) type and defaults to `center`, but be aware that more complex options like offsetting from a side (e.g. `right -1rem`) are not supported. Also make sure to include the `at` keyword beforehand, even if omitting the shape and size values.

<RadialGradientPosition />

---

## Conic gradients

The `conic-gradient()` CSS function includes similar color stop and hint values as `linear-gradient()` and `radial-gradient()` but with different starting values. Because all conic gradients rotate around a center point, angle and position values can be used as the first parameter in the function.

Just like angles in the `linear-gradient()` function, any valid [angle](https://developer.mozilla.org/en-US/docs/Web/CSS/angle) type can be used. Just make sure to include the `from` keyword beforehand. The position value conforms to [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value) type and defaults to `center`, but be aware that more complex options like offsetting from a side (e.g. `right -1rem`) are not supported. Also make sure to include the `at` keyword beforehand, even if omitting the shape and size values.

```css
/* syntax options for angle and position */
background: conic-gradient(from <angle>, /* color stops */);
background: conic-gradient(at <position>, /* color stops */);
background: conic-gradient(from <angle> at <position>, /* color stops */);
```

### Color stops

Color stops in conic gradients are slightly different than color stops in linear and radial gradients, and are considered angular color stops[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient#angular-color-stop). Because a conic gradient rotates around a center origin point and back to itself, it takes up `360deg`. Each color stop can include any valid angle type _or_ percentage to denote how much of the gradient it takes up.

<ConicGradients />

---

## Repeating gradients

There are a two ways to repeat gradients. The first is to use the `repeating-linear-gradient()`, `repeating-radial-gradient()`, and `repeating-conic-gradient()` functions, which will repeat the gradient until the container bounds are filled. The second option is to use `background-repeat` and tile the gradient as a repeating image.

```css
/* Repeating functions */
background: repeating-linear-gradient(to right, blue, red 25%);

/* Tiling */
background-image: linear-gradient(to right, blue);
background-size: 1rem 1rem;
background-repeat: repeat;
```

### Repeating functions

The power of the `repeating-*` functions is that they doesn’t tile the computed gradient, they extend out until the entire image area is filled. The tricky part is that, if your initial gradient values fill the image area, nothing will repeat.

<RepeatingFunctions />

### Tiling

Gradients are simply computed images that (when applied as a background) can be controlled with all existing CSS background properties. Just like any other time you use `background-repeat`, you’re creating a tiling effect. And since repeating gradients are also computed images, you can combine both functions and tiling together for some interesting affects.

<RepeatingTiling />

---

## Multiple gradients

Multiple gradients can be specified in the `background` property with commas `,` and are stacked with the first gradient on top. And because gradients are simply `<image>` types, you can combine gradients with regular background image imports that use the `url(./path/to/image)` syntax.

---

## Gradients and color spaces

Gradient functions accept different color spaces, which will impact not just the color stop values, but also the way the color stops are interpolated together. To specify a color space, use the `in <colorspace>` syntax:

```css
background: linear-gradient(in oklab, red, blue);
background: radial-gradient(in oklab, red, blue);
background: conic-gradient(in oklab, red, blue);
```

Polar color spaces such as `hsl`, `hwb`, `lch`, and `oklch` also support all the hue interpolation keywords, indicating how to transition between colors:

```css
/* Example of hue interpolation in polar color spaces */
background: linear-gradient(to right in hsl longer hue, red, blue);
```

<ColorSpaces />

### Hue interpolation

Polar color spaces such as `hsl`, `hwb`, `lch`, and `oklch` also support all the hue interpolation keywords, indicating how to transition between colors.

<HueInterpolation />
