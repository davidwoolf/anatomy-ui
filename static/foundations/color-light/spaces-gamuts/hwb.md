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
