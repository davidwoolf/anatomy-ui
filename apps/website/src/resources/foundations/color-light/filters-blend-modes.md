---
title: Filters and blend modes
slug: filters-blend-modes
---

<script>
  import Blur from  "@examples/color-light/filters-blend-modes/blur.svelte";
  import Brightness from  "@examples/color-light/filters-blend-modes/brightness.svelte";
  import Contrast from  "@examples/color-light/filters-blend-modes/contrast.svelte";
  import DropShadows from  "@examples/color-light/filters-blend-modes/drop-shadows.svelte";
  import Grayscale from  "@examples/color-light/filters-blend-modes/grayscale.svelte";
  import HueRotate from  "@examples/color-light/filters-blend-modes/hue-rotate.svelte";
  import Invert from  "@examples/color-light/filters-blend-modes/invert.svelte";
  import Opacity from  "@examples/color-light/filters-blend-modes/opacity.svelte";
  import Saturate from  "@examples/color-light/filters-blend-modes/saturate.svelte";
  import Sepia from  "@examples/color-light/filters-blend-modes/sepia.svelte";
  import Backdrop from  "@examples/color-light/filters-blend-modes/backdrop.svelte";
</script>

Filters and blend modes go beyond static colors, gradients, and shadows, dynamically interacting with interface elements and media items.

---

## Filters

The `filter` property applies composite rendering effects to any element or group of elements–via specialized functions.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) Unlike static affects applied to imported images, they can react to the environment via DOM updates, scrolling, and animations:

```css
/* supported functions syntax */
filter: blur(<number>);
filter: brightness(<decimal>);
filter: contrast(<percentage>);
filter: drop-shadow(<number> <number> <number> <color>);
filter: grayscale(<percentage>);
filter: hue-rotate(<angle>);
filter: invert(<percentage>);
filter: opacity(<percentage>);
filter: saturate(<percentage>);
filter: sepia(<percentage>);
filter: url(<image>);
```

Effects are computed using the local coordinates of the target element without affecting surrounding elements and functions can be stacked and combined, meaning just a change to the function order can create a different effect.

### Blur

The `blur()` function applies a gaussian blur to the applied element and its descendants.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur) Any positive `<length>` value is accepted, except for percentages and larger values increase the blur radius. The default value and interpolation value (more on that below) is `0`.

<Blur />

### Brightness

The `brightness()` function lightens or darkens the element and its descendants.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness) Any positive number or percentage is accepted, and defaults to 1 (the same as 100%) for both the value and interpolation value. A 100% brightness means no change has occurred. Anything less than 100% (or 1) will darken the element, while anything above 100% will brighten it.

<Brightness />

### Contrast

The `contrast()` function increases or decreases contrast for the element and its descendants [citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast) Any positive number or percentage is accepted, and defaults to 1 (the same as 100%) for both the value and interpolation value. A 100% contrast means no change has occurred. Anything less than 100% (or 1) will lower contrast on the element, while anything above 100% will increase it.

<Contrast />

### Drop shadows

The `drop-shadow()` function applies a drop shadow to the rendered content of the element.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow) This works differently from `box-shadow`, which is applied to the bounding box of the element. In addition, inset and spread parameters are not allowed and, while multiple `drop-shadow()` functions can be applied to one `filter` property, multiple shadows are not allowed within one function call.\n\nThe syntax for the function is the x offset, y offset, size, and color (the color value can be excluded and will inherit the current color value for the element).

<DropShadows />

### Grayscale

The `grayscale()` function applies a percentage level of gray to the element and its descendants [citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale) Any value between `0-1` or percentage between `0-100%` is accepted, and defaults to 1 (fully grayscale). However, the interpolation value defaults to 0.

<Grayscale />

### Hue rotate

The `hue-rotate()` function moves all colors in the element and its descendants around a color wheel.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate) Any angle value is accepted, with positive values going clockwise and negative values going counter-clockwise around the color wheel. The default is `0deg` for both the value and interpolation value. Values can be above `360deg`, which will keep rotating around the wheel.

<HueRotate />

### Invert

The `invert()` function inverts all colors in the element and its descendants.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert). Any value between `0-1` or percentage between `0-100%` is accepted, and defaults to 1 (fully inverted). However, the interpolation value defaults to 0.

<Invert />

### Opacity

The `opacity()` function applies a transparency value to the element and its descendants.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity) Like the `opacity` property, any value between `0-1` or percentage between `0-100%` is accepted, and defaults to 1 (fully opaque) for both the value and interpolation value. Unlike the `opacity` property, the function equivalent can be stacked multiple times in one filter.

<Opacity />

### Saturate

The `saturate()` function adds or removes saturation to the element and its descendants.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate) Any positive number or percentage is accepted, and defaults to 1 (the same as 100%) for both the value and interpolation value. A 100% saturation means no change has occurred. Anything less than 100% (or 1) will desaturate the element, while anything above 100% will increase it.

<Saturate />

### Sepia

The `sepia()` function increases color sepia in the element and its descendants.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia). Any value between `0-1` or percentage between `0-100%` is accepted, and defaults to 1 (fully sepia). However, the interpolation value defaults to 0.

<Sepia />

---

## Animation and interpolation

When animating the `filter` property, be aware that some functions change their starting value if left empty. For example, the `grayscale()`, `sepia()` and `invert()` functions can be called without a value to apply their affect fully (ie: omitting a value defaults them to 1). However, if animated, their starting value reverts to `0`, so when animating filters you are most likely better off settings values for all functions.

---

## Backdrop filters

The `backdrop-filter` includes all of the same function options as `filter`, but applies it to anything behind the current element. This means the current element must also include some transparency in order to see the effect.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) Currently, safari requires the `-webkit-` prefix for this property.

Background blur affects are a popular use of this property, blurring content passing underneath the element the `backdrop-filter` property has been applied to.

<Backdrop />

---

## Blend modes

The `mix-blend-mode` property enables stylistic blending of elements with their background or other elements.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode):

```css
/* available syntax options */
mix-blend-mode: normal;
mix-blend-mode: color;
mix-blend-mode: color-dodge;
mix-blend-mode: color-burn;
mix-blend-mode: darken;
mix-blend-mode: difference;
mix-blend-mode: exclusion;
mix-blend-mode: hue;
mix-blend-mode: hard-light;
mix-blend-mode: lighten;
mix-blend-mode: luminosity;
mix-blend-mode: multiply;
mix-blend-mode: overlay;
mix-blend-mode: saturation;
mix-blend-mode: screen;
mix-blend-mode: soft-light;
```

By default, elements will interact with both each other and the background. Use the `isolation` property with a value of `isolate` on the element you applied `mix-blend-mode` to, to create a new local stacking context and remove the effect interaction with an ancestor’s background (if you apply a background to the element itself, the blend mode effect will still occur).

There is also a `background-blend-mode` property that applies blend modes to just the background image and color values on an element.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode)
