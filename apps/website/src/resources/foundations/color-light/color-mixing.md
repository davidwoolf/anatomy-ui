---
title: Color mixing
slug: color-mixing
---

<script>
  import MixingColors from "@examples/color-light/color-mixing/mixing-colors.svelte";
  import HueInterpolation from "@examples/color-light/color-mixing/hue-interpolation.svelte";
  import PercentageValues from "@examples/color-light/color-mixing/percentage-values.svelte";
  import AlphaChannels from "@examples/color-light/color-mixing/alpha-channels.svelte";
</script>

Color mixing combines two colors and mixes them based on the preferred amount of each color, in addition to the color space and hue interpolation.

---

## Mixing colors

By default, each color is mixed equally, producing a color mixed with `50%` of the first color and `50%` of second color.

```css
/* Syntax formatting for the color-mix() function */
color: color-mix(in <color-space>, <color> <percentage>, <color> <percentage>);
```

The `in <color-space>` value refers to the interpolation method mixing will use, as spaces like `lch` and `srgb` will mix colors differently. Importantly, the passed in color values can be any valid `<color>` and do not need to be formatted in the matching color space:

```css
/**
 * Syntax for available color spaces. Passed in
 * colors do not need to match the color space.
 * Because percentages have been omitted, each color
 * is mixed equally, with 50% of both blue and red.
 */
color: color-mix(in srgb, blue, red);
color: color-mix(in srgb-linear, blue, red);
color: color-mix(in lab, blue, red);
color: color-mix(in oklab, blue, red);
color: color-mix(in xyz, blue, red);
color: color-mix(in xyz-d50, blue, red);
color: color-mix(in xyz-d65, blue, red);
color: color-mix(in hsl, blue, red);
color: color-mix(in hwb, blue, red);
color: color-mix(in lch, blue, red);
color: color-mix(in oklch, blue, red);
```

<MixingColors />

### Hue interpolation

Polar color spaces such as `hsl`, `hwb`, `lch`, and `oklch` also support all the hue interpolation keywords, indicating how to mix both colors.

<HueInterpolation />

---

## Percentage values

Percentage values are very flexible, as long as they aren’t both `0%`. In addition, when combined values are less than or greater than 100%, they are both recomputed by taking each value and dividing by the sum of both. This ensures two values that always add up to `100%`.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix#p1)

For example, if the first color is `70%` and the second is `50%` , the sum is `120%` and the values will be transformed to `~58.3333%` and `~41.666%` respectively. Or if the values are `30%` and `40%`, the sum is `70%` and the values will be transformed to `42.85%` and `57.14%` respectively.

```css
/**
 * the following two values are equivalent due
 * to values greater than 100% being converted
 * to always add up to 100%
 */
color: color-mix(in srgb, blue 70%, red 50%);
color: color-mix(in srgb, blue 58.3333%, red 41.6666%);

/**
 * the following two values are equivalent due
 * to values less than 100% being converted
 * to always add up to 100%
 */
color: color-mix(in srgb, red 30%, blue 40%);
color: color-mix(in srgb, red 42.85%, blue 57.14%);
```

<PercentageValues />

---

## Alpha channels

Since any valid `<color>` type can be passed into the `color-mix()` function, that includes colors with an alpha value less than `100%`. Mixing colors with an alpha channel will produce a color that also has an alpha channel, computed from the two colors (however, it’s not a direct average):

```css
color: color-mix(in srgb, rgb(0 0 255 / 0.5), rgb(255 0 0 / 0.5));
```

In addition, you can mix a color with the keyword `transparent` to produce the same color with an alpha channel value computed from the mix percentages. Use the percentage value in the first color to create the alpha value (ie: `red 50%` will create a color with 50% opacity).

_Note: the `transparent` keyword does not accept a percentage value._

<AlphaChannels />
