---
title: Shadows
slug: shadows
---

<script>
  import Coordinates from "@examples/color-light/shadows/coordinates.svelte";
  import BlurSpread from "@examples/color-light/shadows/blur-spread.svelte";
  import Inset from "@examples/color-light/shadows/inset.svelte";
  import TextShadows from "@examples/color-light/shadows/text-shadows.svelte";
</script>

Shadows can be applied flexibly to any box or run of text, indicating depth and–when done consistently–a global lighting source. They can also be applied as inset to create cut-in effects.

---

## Box shadows

The `box-shadow` CSS property creates a shadow around a box element. When two length values are supplied, they are interpreted as the x and y coordinate offsets. A third length value is interpreted as the blur radius, and a final, fourth length value is interpreted as the spread radius.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow#length). If the box includes a `blur-radius` the shadow is rounded. [citation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

```css
/* Syntax (this order is not necessarily required) */
box-shadow: <inset> <x> <y> <intensity> <spread> <color>;

/* Examples */
box-shadow: 2px 2px blue;
box-shadow: 2px 2px 4px blue;
box-shadow: 2px 2px 4px 1px blue;
box-shadow: 2px 2px 4px 1px blue inset;

/* Alternate inset and color positions */
box-shadow: inset 2px 2px 4px 1px blue;
box-shadow: inset blue 2px 2px 4px 1px;
```

### Coordinate offsets

The coordinate offsets (`x` and `y`) can be any positive or negative length. A positive x value moves the shadow to the right, while a negative value moves it to the left. A positive y value moves the shadow to the bottom, while a negative value moves it to the top. This means the values don’t exactly map to a cartesian plane, but rather an imaginary global light source in the top left corner of the document.

<Coordinates />

### Blur and spread radius

The blur radius value can be any positive length, where larger values makes the shadow larger but also more spread out, lightening the overall shadow. The spread radius value can be any positive or negative length and will expand or contract the shadow. Setting the blur radius to `0` and the spread radius to any value greater than `1` will create a sharp edged shadow offset.

<BlurSpread />

### Inset shadows

Using the `inset` keyword converts the outer shadow into an inner shadow. All other values are still allowed, but will create a depressed effect instead of an elevated effect.

<Inset />

---

## Text shadows

Unlike the `box-shadow` property, `text-shadow` creates shadows around text characters.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow) While the syntax is similar to `box-shadow`, inset and spread radius values are not supported (multiple shadows are supported however).

```css
/* Syntax (this order is not necessarily required) */
text-shadow: <x> <y> <intensity> <color>;

/* Examples */
text-shadow: 2px 2px blue;
text-shadow: 2px 2px 4px blue;
text-shadow: blue 2px 2px 4px;
```

<TextShadows />

---

## Multiple shadows

Multiple shadows can be specified with commas `,` and are stacked with the first shadow on top. If the number of shadows differ between animation states, a default “shadow” with 0 length values and a transparent color are used, which results in a consistent animation effect that doesn’t flicker shadows.

---

## Global lighting source and depth

When creating depth using shadows, its important to keep lighting sources consistent and to use intensity differences to denote layers. All shadows should use either positive or negative coordinate values to denote the global light source (positive values being in the top left, negative values being the top or bottom right), while playing with the values of the x, y, blur, and spread radiuses. Smaller radiuses with lighter values indicate elements close the surface, while larger and darker values indicate elements farther away from the surface.

Shadows can also be paired with gradients to reinforce light sources. This combination can be used to create more skeuomorphic UI elements.
