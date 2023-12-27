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

## Blur

The `blur()` function applies a gaussian blur to the applied element and its descendants.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur) Any positive `<length>` value is accepted, except for percentages and larger values increase the blur radius. The default value and interpolation value (more on that below) is `0`.

## Brightness

The `brightness()` function lightens or darkens the element and its descendants.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness) Any positive number or percentage is accepted, and defaults to 1 (the same as 100%) for both the value and interpolation value. A 100% brightness means no change has occurred. Anything less than 100% (or 1) will darken the element, while anything above 100% will brighten it.

## Contrast

The `contrast()` function increases or decreases contrast for the element and its descendants [citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast) Any positive number or percentage is accepted, and defaults to 1 (the same as 100%) for both the value and interpolation value. A 100% contrast means no change has occurred. Anything less than 100% (or 1) will lower contrast on the element, while anything above 100% will increase it.

## Drop shadows

The `drop-shadow()` function applies a drop shadow to the rendered content of the element.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow) This works differently from `box-shadow`, which is applied to the bounding box of the element. In addition, inset and spread parameters are not allowed and, while multiple `drop-shadow()` functions can be applied to one `filter` property, multiple shadows are not allowed within one function call.

The syntax for the function is the x offset, y offset, size, and color (the color value can be excluded and will inherit the current color value for the element):

```css
filter: drop-shadow(0 0 1rem red);
```

## Grayscale

The `grayscale()` function applies a percentage level of gray to the element and its descendants [citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale) Any value between `0-1` or percentage between `0-100%` is accepted, and defaults to 1 (fully grayscale). However, the interpolation value defaults to 0.

## Hue rotate

The `hue-rotate()` function moves all colors in the element and its descendants around a color wheel.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate) Any angle value is accepted, with positive values going clockwise and negative values going counter-clockwise around the color wheel. The default is `0deg` for both the value and interpolation value. Values can be above `360deg`, which will keep rotating around the wheel.

## Invert

The `invert()` function inverts all colors in the element and its descendants.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert). Any value between `0-1` or percentage between `0-100%` is accepted, and defaults to 1 (fully inverted). However, the interpolation value defaults to 0.

## Opacity

The `opacity()` function applies a transparency value to the element and its descendants.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity) Like the `opacity` property, any value between `0-1` or percentage between `0-100%` is accepted, and defaults to 1 (fully opaque) for both the value and interpolation value. Unlike the `opacity` property, the function equivalent can be stacked multiple times in one filter.

## Saturate

The `saturate()` function adds or removes saturation to the element and its descendants.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate) Any positive number or percentage is accepted, and defaults to 1 (the same as 100%) for both the value and interpolation value. A 100% saturation means no change has occurred. Anything less than 100% (or 1) will desaturate the element, while anything above 100% will increase it.

## Sepia

The `sepia()` function increases color sepia in the element and its descendants.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia). Any value between `0-1` or percentage between `0-100%` is accepted, and defaults to 1 (fully sepia). However, the interpolation value defaults to 0.

## Url

The `url()` function can be used to apply filter values from an SVG element. The value must point to an existing SVG image and a valid filter property within it. Covering SVG filters is outside the scope of this article and more information can be found [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter).
