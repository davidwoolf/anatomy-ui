<script lang="ts">
  // components
  import SemanticElements from "@components/layout/semantic-elements.svelte";
  import SeparatingConcerns from "@components/layout/separating-concerns.svelte";
  import LayoutShift from "@components/layout/layout-shift.svelte";
  import BlockInlineAxes from "@components/layout/block-inline-axes.svelte";
  import BoxSizing from "@components/layout/box-sizing.svelte";
  import DisplayModes from "@components/layout/display-modes.svelte";
  import Dimensions from "@components/layout/dimensions.svelte";
  import Spacing from "@components/layout/spacing.svelte";
  import Position from "@components/layout/position.svelte";
  import Stacking from "@components/layout/stacking.svelte";
  import AspectRatios from "@components/layout/aspect-ratios.svelte";
  import FlexLayout from "@components/layout/flex-layout.svelte";
  import GridLayout from "@components/layout/grid-layout.svelte";
  import ViewportUnits from "@components/layout/viewport-units.svelte";
  import ResponsiveQueries from "@components/layout/responsive-queries.svelte";
  import LogicalProperties from "@components/layout/logical-properties.svelte";

  // data
  import type { PageData } from "./$types";
  export let data: PageData;

  // layout
  import Title from "@components/title.svelte";
  import Description from "@components/description.svelte";
  import Layout from "@components/layout.svelte";
  import NextSection from "@components/next-section.svelte";

  const components = {
    SemanticElements,
    SeparatingConcerns,
    LayoutShift,
    BlockInlineAxes,
    BoxSizing,
    DisplayModes,
    Dimensions,
    Spacing,
    Position,
    Stacking,
    AspectRatios,
    FlexLayout,
    GridLayout,
    ViewportUnits,
    ResponsiveQueries,
    LogicalProperties,
  };
</script>

<Layout>
  <Title slot="title">{data.title}</Title>

  <Description slot="description">
    {@html data.description}
  </Description>

  <div slot="sidebar">
    {#if data.next}
      <NextSection href={data.next}>Next section</NextSection>
    {/if}
  </div>

  <svelte:fragment slot="contents">
    <svelte:component this={components[data.component]} />
  </svelte:fragment>
</Layout>
