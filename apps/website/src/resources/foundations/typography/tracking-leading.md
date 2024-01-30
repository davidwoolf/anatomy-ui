---
title: Tracking and leading
slug: tracking-leading
---

<script>
  import NonTextElements from "@examples/typography/tracking-leading/non-text-elements.svelte";
</script>

Also known as letter spacing and line height—tracking and leading values are the kinds of details that (when applied correctly) take interface typography to the next level.

---

## Tracking

Tracking, better known in CSS as letter spacing, uniformly updates the space between letters, either in a positive (more space) or negative (less space) direction. Using `em` units will act as a multiplier on the computed font size, which is highly recommended to avoid issues with sizes changing based on the actor's preferred base size. However, the values can be extremely sensitive.

Tools like Figma Dev Mode only show these values in `px` or `rem` units, which aren't local multiplier units. Fortunately you can quickly compute the `em` value by taking the `letter-spacing` value and dividing it by the `font-size` value:

```css
/* before transformation */
.pixels {
  font-size: 12px;
  letter-spacing: 0.3px;
}

.rems {
  font-size: 0.75rem;
  letter-spacing: 0.01875rem;
}

/* after */
.pixels {
  font-size: 12px;
  letter-spacing: 0.025em; /* .3 / 12 = 0.025 */
}

.rems {
  font-size: 0.75rem;
  letter-spacing: 0.025em; /* .01875 / .75 = 0.025 */
}
```

_Note: this value can be inconsistent when using justified text._

---

## Leading

Leading, or line height, controls the space between lines of text. When setting the `line-height` of a block of text, the default `normal` value equates to about 120% of the text size. That means 12pt text will have a line height of about 14.4pt (we're using `pt` here to avoid unit confusion).

While you can use static units like `px` or `rem` as value for `line-height`, a much more flexible solution is to use no units at all! When setting the value to unitless number, it acts a multiplier for the computed font size of the text it's applied to. Importantly, this is not the same for other units like `em` or `%`.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#prefer_unitless_numbers_for_line-height_values)

```css
/* unitless value */
p {
  line-height: 1.35;
}

/* percentage value */
p {
  line-height: 135%;
}
```

---

## Non-text based element spacing

Be careful when setting `line-height`, `letter-spacing`, or `word-spacing` on elements that contain styled inline or inline-block elements as their spacing will be affected as well.[citation](https://css-tricks.com/almanac/properties/w/word-spacing/)

<NonTextElements />
