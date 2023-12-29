For more explicit control with dynamic browser UI, use `svh`, `svw`, `lvh`, and `lvw` units (where `s` means small, and `l` means large).

As an example, a design outlines a hero image which is always 70% of the viewport height. This is to ensure a nice magazine layout, while also showing the start of some text to indicate there’s more content on scroll. And, since this hero image sits at the top of the page, any dynamic browser UI should be largest (based on current device samplings).

Using `vh` units might have unintended side effects with dynamic browser UI and appear too large, hiding the start of the text that should always be visible. In addition, `dvh` won't necessarily work because scrolling may increase the image size, which is distracting and unnecessary.

Instead, this seems like a perfect use case for `svh` units. Because it’s based on the smallest viewport, dynamic browser UI or not, the image will be 70% of the screen height.
