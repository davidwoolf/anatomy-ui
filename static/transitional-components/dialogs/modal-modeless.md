The `<dialog>` element can act as both a modal or modeless–or non-modal–element. Using the `showModal()` Javascript function to open a dialog sets it as a modal, while using the `show()` Javascript function sets it as modeless, placing it inline within the document (with a default `position` style of `absolute`). The differences between the two are nuanced:

| feature                                                   | modal | modeless |
| --------------------------------------------------------- | ----- | -------- |
| default position                                          | fixed | absolute |
| includes default styles                                   | yes   | yes      |
| supports the close() function                             | yes   | yes      |
| supports the ::backdrop selector                          | yes   | no       |
| disables non-dialog elements                              | yes   | no       |
| dismisses on esc                                          | yes   | no       |
| sits in the top layer (unaffected by Z stacking contexts) | yes   | no       |
