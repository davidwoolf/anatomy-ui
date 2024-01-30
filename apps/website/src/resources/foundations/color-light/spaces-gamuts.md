---
title: Spaces and gamuts
slug: spaces-gamuts
---

Browsers today support many different color spaces and gamuts including Display P3, ProPhoto, XYZ, OKLAB, and OKLCH.

---

## Hexadecimal

Hexadecimal (hex) colors are an alternative way to represent sRGB (standard red, green, and blue) colors using base-16 (0-9A-F) channels for red, green, and blue.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color) One of the better known color formats, channels can include one or two values, with the value being duplicated when only 1 is present. Values are also case insensitive:

```css
/* syntax options */
color: #f0a;
color: #f0a;
color: #f0a;
color: #ff00aa;
color: #ff00aa;
color: #ff00aa;
```

The first channel is represents red, the second channel green, and the third channel blue. Alpha (opacity) values can also be added to the end as a fourth channel, with the 0-255 being converted as a 0%-100% alpha value:

```css
color: #000000ff; /* black 100% */
```

---

## RGB

The `rgb()` function accepts values for red, green, blue, and an alpha value and can display any color in the sRGB color gamut.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb) Red, green, and blue can be represented as values from `none`, a number between `0-255` or a percentage between `0%-100%`. The alpha channel can be represented as a number between `0-1` or a percentage between `0%-100%`. Color channel values cannot be mixed between numbers and percentages, but `none` and either alpha syntax is valid in both contexts.

In the past, values were comma separated, and (if an alpha value was included), the `rgba()` function was used instead. Now, things are much more simple. Values are separated by spaces, alpha is added as `/ [alpha]` and `rgba()` function has been essentially deprecated.

```css
/* syntax options */
color: rgb(100% 0% 0% / 1);
color: rgb(100% 0% 0% / 100%);
color: rgb(100% 0% none / 1);
color: rgb(255 0 0 / 0.1);
color: rgb(255 0 0 / 100%);
color: rgb(255 0 none / 1);

/* older syntax */
color: rgb(255, 0, 0);

/* deprecated */
color: rgba(255, 0, 0, 0.5);

/* invalid, can't mix percentages and numbers for color channels */
color: rgb(255 100% 50);
```

---

## HSL

The `hsl()` function accepts values for hue, saturation, light, and an alpha value and can display any color in the sRGB color gamut.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) Hue is represented as a number, angle, or `none` (a number value represents an angle value in degrees). Angles in CSS can be represented as `deg`, `grad`, `rad`, and `turn`.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/angle) Saturation and light are represented as percentages `0%-100%` or `none`, which is equal to `0%`. Finally, the alpha channel can be represented as a number between `0-1` or a percentage between `0%-100%`, just like RGB.

Like `rgb()`, values were comma separated in the past–with alpha changed by using the `hsla()` function. And just like `rgb()`, this syntax has been replaced with space delimited values and an optional `/ [alpha]`.

```css
/* syntax options */
color: hsl(120deg 100% 50%);
color: hsl(120deg 100% 50% / 1);
color: hsl(120deg 100% 50% / 100%);
color: hsl(0.3turn 100% 50%);
color: hsl(2.1rad 100% 50%);
color: hsl(133grad 100% 50%);

/* older syntax */
color: hsl(120deg, 100%, 50%);

/* deprecated */
color: hsla(120deg, 100%, 50%, 1);
```

While HSL is displayed in in the sRGB color gamut, defining values with `hsl()` is much more human friendly than `rgb()`. Each color is represented as `0-360°` degrees on the color wheel, and light and saturation can then be used to darken and desaturate values. This means you can find complementary colors by changing just the hue color channel.

---

## HWB

The `hwb()` function accepts values for hue, whiteness, blackness, and an alpha value and can display any color in the sRGB color gamut.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb) Like HSL, hue is represented as a number, angle or `none`. In addition, the alpha channel can be represented as a number between `0-1` or a percentage between `0%-100%`, just like RGB and HSL.

With HWB, the second and third channel can affect each other. If you set both the white and black channels to `0%` for a color, you will get bright, vibrant colors. Change them to anything that adds up to 100% however, and you’ll get straight grey. An easy way to get a sense for HWB is to increase the white and black channels independently of each other. Increase white and colors will get lighter and more pastel. Increase black and they will get darker and more muted. Set either to 100% and you’ll get raw white or black respectively.

Where HSL is great for finding complementary colors at the same lightness and saturation, HWB is great for creating darker and lighter versions of the same color.

```css
/* syntax options */
color: hwb(120deg 10% 0%);
color: hwb(120deg 10% 0% / 1);
color: hwb(120deg 10% 0% / 100%);
color: hwb(0.3turn 100% 50%);
color: hwb(2.1rad 100% 50%);
color: hwb(133grad 100% 50%);
```

---

## LAB

The `lab()` function accepts values for lightness, a red-green axis (A), a blue-yellow axis (B), and an alpha value, and can display any color in the CIE color gamut.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab). Lightness is represented as a number between `0-100`, a percentage between `0%-100%` or `none`. The red-green axis is a number between `-125-125` or a percentage between `-100%-100%`, where negative values are more green, and positive values are more red. The blue-yellow axis (B) is a number between `-125-125` or a percentage between `-100%-100%` where negative values are more yellow, and positive values are more blue.[citation](https://developer.chrome.com/articles/high-definition-css-color-guide/#lab) Finally, the alpha channel can be represented as a number between `0-1` or a percentage between `0%-100%`.

```css
/* syntax options */
color: lab(100, -125, 125);
color: lab(100, -125, 125 / 1);
color: lab(100, -125, 125 / 100%);
```

---

## OKLAB

The `oklab()` function accepts similar values to the `lab()` function and can display any color in the corrective CIE color gamut.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklab). The major difference between the `oklab()` and `lab()` function’s syntax is the A and B channel’s numerical values are between `-0.4–0.4`.

```css
/* syntax options */
color: oklab(0, -0.4, -0.4);
color: oklab(1, 0.4, 0.4);
color: oklab(0%, -100%, -100%);
color: oklab(100%, 100%, 100%);
color: oklab(100%, 100%, 100% / 1);
```

---

## LCH

The `lch()` function accepts values for lightness, chroma, hue, and an alpha value and can display any color in the CIE color gamut.[citation](<[https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch)>). Lightness is represented as a number between `0-100`, a percentage between `0%-100%` or `none`. Chroma can be an unbounded positive number `0-n`, a percentage between `0%-100%`, or `none`. In this case, `100%` equals the number `150`. Like HSL and HWB, hue is represented as a number, angle or `none`. Finally, the alpha channel can be represented as a number between `0-1` or a percentage between `0%-100%`, just like LAB.

```css
/* syntax options */
color: lch(100, 150, 120deg);
color: lch(100, 100%, 120deg / 1);
color: lch(100, 100%, 120deg / 100%);
color: lch(100, 100%, 0.3turn);
color: lch(100, 100%, 2.1rad);
color: lch(100, 100%, 133grad);
```

---

## OKLCH

The `oklch()` function accepts similar values to the `lch()` function and can display any color in the corrective CIE gamut.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) The major difference between the `oklch()` and `lch()` function’s syntax is the Chroma channel’s numerical upper perceivable value is `0.5`.

```css
/* syntax options */
color: lch(100, 0.5, 120deg);
color: lch(100, 100%, 120deg / 1);
color: lch(100, 100%, 120deg / 100%);
color: lch(100, 100%, 0.3turn);
color: lch(100, 100%, 2.1rad);
color: lch(100, 100%, 133grad);
```

---

## Other color spaces

Many other color spaces can be rendered using the `color()` function, which can display colors in any color space that supports specifing values in red, green, and blue channels.[citation](https://developer.chrome.com/articles/high-definition-css-color-guide/#the-color-function) First, a color space value like `display-p3` is specified, followed by red, green, and blue channel values represented as a number between `0–1` or a percentage between `0%–100%`, and finally an optional alpha channel represented as a number between `0-1` or a percentage between `0%-100%`. Unlike other color functions, numbers and percentage values for red, green, and blue can be mixed and matched.

```css
/* available color spaces and syntax */
color: color(srgb 1 0 0 / 1);
color: color(srgb-linear 1 0 0 / 1);
color: color(display-p3 1 0 0 / 1);
color: color(a98-rgb 1 0 0 / 1);
color: color(prophoto-rgb 1 0 0 / 1);
color: color(rec2020 1 0 0 / 1);
color: color(xyz 1 0 0 / 1);
color: color(xyz-d50 1 0 0 / 1);
color: color(xyz-d65 1 0 0 / 1);
```

The `color()` function supports the list of spaces listed above, but importantly does not support HSL, HWB, LAB, LCH, OKLAB, or OKLCH.

### sRGB

The `srgb` color space renders colors in the same way as the `rgb()` function and is limited to the same range of colors in the `sRGB` color gamut.

### sRGB linear

The `srgb-linear` color space is limited to the same range of colors in the `sRGB` color gamut, but colors are not gamma corrected in their output. This is a nuanced issue most developers won’t need to worry about, but basically `sRGB` applies gamma correction to colors to keep them consistent between viewing devices. This is preferred when rendering colors directly as backgrounds, text, etc. but a pain when applying light shading to a 3D object.[citation](https://docs.unity3d.com/Manual/LinearRendering-LinearOrGammaWorkflow.html)

### Wider gamut spaces

The `display-p3` color space renders all colors available in the Display P3 color gamut, which supports about 50% more supports colors than sRGB.[citation](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)\n\nThe `rec2020` color space renders all colors available in the Rec2020 color gamut and supports about 37% more colors than Display P3.[citation](https://www.displaymate.com/Display_Color_Gamuts_1.htm) However, display support is much smaller for Rec2020 versus Display P3 at the time of this writing.\n\nBoth of these spaces (along with `srgb`) can be safely utilized with fallbacks, by checking the `color-gamut` media query[citation](https://developer.chrome.com/articles/high-definition-css-color-guide/#checking-for-gamut-and-color-space-support)
