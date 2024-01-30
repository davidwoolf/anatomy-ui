---
title: Sizing type
slug: sizing-type
---

<script>
  import RelativeUnits from "@examples/typography/sizing-type/relative-units.svelte";
  import AbsoluteUnits from "@examples/typography/sizing-type/absolute-units.svelte";
  import TypographicUnits from "@examples/typography/sizing-type/typographic-units.svelte";
</script>

There are many different units that can be used to size and constrain type–from static pixels to typographic units based on characters in the typeface.

---

## Pixel units

Using pixel based `px` units for sizing is discouraged as they are considered inflexible compared to other units. They are also a lie. Considering that most computers and mobile devices now use 2x or 3x resolutions that up-sample values, setting your type to `14px` is never really 14 physical pixels.

At the same time, interfaces don't exist in the abstract, meaning the more popular `rem` unit is calculated from a base pixel size on the body element (`1rem` defaults to 16 virtual pixels). Still, avoid pixel values and opt for more flexible `rem` and `em` units for font size values as global text resizing can be applied by simple changing the body element’s pixel font size.

---

## Relative units

When using `rem` units, all sizes are calculated from the base font size of the body element. This defaults to `16px` (which is not 16 actual, physical pixels), so setting your type to `2rem` is equal to `32px` and so on. Applying rem sizes to parent elements and then additionally to children elements will not reset the scale, it will always be multiplied from the body element’s value.

<RelativeUnits />

---

## Absolute units

In constrast with `rem`, the `em` unit is based on inherited font sizes from ancestor elements, and will continue increasing child sizes based on the parent. Most of the time this will only serve to cause headaches, but it can be really useful when a subset of text needs to be relationally sized as a percentage of the rest of the text (for example: captions):

When using `em` like this, be careful to set a minimum value so text remains readable. This can be accomplished with the `max` css function—which will take the largest value from a comma delimited list:

```css
/* max will always take the biggest value from a list of options */
.property {
  font-size: max(0.625rem, 0.75em);
}
```

<AbsoluteUnits />

---

## Typographic units

For line length, use `ch` units! These units directly tie the optical size of the text to the max length before breaking to a new line. Multi-line text is usually recommended to break between 45-75 characters.[citation](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/#the-ideal-measure-45-to-75-characters)

<TypographicUnits />
