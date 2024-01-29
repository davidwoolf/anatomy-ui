---
title: Separating concerns
slug: separating-concerns
---

<script>
  import SeparatingConcerns from "@examples/layout/separating-concerns.svelte";
</script>

An important concept for successful layouts is to separate implementation details internally and remove all external layout values from individual components. Another way to think about this is “abstracting layout considerations up the DOM tree

---

## Abstracting layout considerations up the DOM tree

Take a reusable card component, which in a static design may have a width, height, margins, padding, and borders. Which parts of this design are actually relevant to the card itself? Looking at elements inside of the card, do the descendants handle their positioning and spacing, or is this the responsibility of the card?

The card itself should generally handle layout details including borders and padding, along with the layout of its descendants, while the card’s container manages details including spacing between elements and max-dimensions. Avoid adding ancillary details like dimension constraints and outward spacing to base components to ensure consistent alignment and sizing on every device.

<SeparatingConcerns />
