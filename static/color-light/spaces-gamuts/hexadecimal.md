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
