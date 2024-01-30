---
title: Grid layouts
slug: grid-layout
---

<script>
  import ExplicitTracks from "@examples/layout/grid/explicit-tracks.svelte";
  import ImplicitTracks from "@examples/layout/grid/implicit-tracks.svelte";
  import FlexibleUnits from "@examples/layout/grid/flexible-units.svelte";
  import Keywords from "@examples/layout/grid/keywords.svelte";
  import Repeat from "@examples/layout/grid/repeat.svelte";
  import SpanTracks from "@examples/layout/grid/span.svelte";
  import Area from "@examples/layout/grid/area.svelte";
  import ExcludedArea from "@examples/layout/grid/excluded-area.svelte";
  import SpanAreas from "@examples/layout/grid/span-areas.svelte";
</script>

Grid layouts create two dimensional layouts on the block and inline axes. Grid layouts come with many of their own specialty properties and values, including fractional units, CSS functions, auto flow hints, and more.

---

## Explicit tracks

When creating an explicit grid layout, use the `grid-template-rows` and `grid-template-columns` properties in CSS, which create tracks between the lines of a grid. If we drew three vertical lines and three horizontal lines, intersecting to create a box, we would have two column tracks and two row tracks.

Track values are separated by spaces and can include any length or perecentage[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/grid), along with some specialty functions—which are covered throughout this section.

<ExplicitTracks />

---

## Implicit tracks

While explicit tracks are straightforward, if there are too many items to fit into the bounds of a grid, implicit tracks are created. By default grid content flows on the block axis into “rows”.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) This can be changed by using `grid-auto-flow: column` to flow items into implicit columns on the inline axis instead.

There are also properties for defining implicit track dimensions more concretely, while avoiding the need to predict how many rows or columns will be needed for variable content. The `grid-auto-rows` and `grid-auto-columns` properties accept one or multiple track values, which can be an explicit size or a responsive unit (more on that below).

<ImplicitTracks />

---

## Sizing tracks

Grid layouts setup with tracks that use inflexible units won’t work well in responsive layouts. Yet, the point of a grid is to organize and align layouts on the block and inline axes. Fortunately, there are special units, keywords, and functions to help solve this.

### Flexible units

The `fr` unit is a special, grid only unit for calculating track sizes relative to each other as well as inflexible units.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value) While percentage units are calculated as a percent of the container’s size, flexible units are divvied up from the remaing space after all explicit size and `gap` values are calculated.

<FlexibleUnits />

### Keywords and functions

Along with fractional units, tracks can be defined as intrinsic sizing keywords including `min-content`, and `max-content`. In addition, a special, grid only function called `minmax()` can be used in combination with these keywords and fractional units to create ultra responsive grid tracks.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax)

<Keywords />

---

## Repeating tracks

For quickly repeating tracks, use the `repeat()` function.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat) This function acts as a track value itself, with the output value replacing its position in the list. The function takes a number indicating the number of repeats, and the value(s).

<Repeat />

---

## Spanning tracks

Elements can be configured to span multiple tracks, using a combination of track start and end properties, along with the `span` keyword. This helps create more interesting layouts.

<SpanTracks />

---

## Grid areas

Layouts should be abstracted up the tree as much as possible, with parent containers dictating dimensions and flow for their descendants. While grids can require a little more finessing than other layout decisions, named grid areas is a great way to avoid applying too many details on descendant elements.

### Creating grid areas

To create grid areas, use the `grid-template-areas` property. Areas are defined with unique names in a string, based on the defined columns and rows in a grid container. Defined areas must create a rectangle—no `L` shapes allowed.[citation](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)

<Area />

### Excluding tracks

To create empty spaces within defined grid areas, use the placeholder period `.` character. Unique names can also be created and simply not applied to any descendants, but if the intention is for it not to be used at all, the standard is using `.`

<ExcludedArea />

### Combining areas

Grid area names generate `-start` and `-end` values implicitly, unless the same value is explicitly added. This means an element can be set to span multiple areas. In addition, the `grid-row-start`, `grid-row-end`, `grid-column-start`, and `grid-column-end` properties will apply these implicit values automatically.

<SpanAreas />
