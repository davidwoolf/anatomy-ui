<script lang="ts">
  // components
  import SemanticElements from "@components/layout/semantic-elements.svelte";
  import SeparatingConcerns from "@components/layout/separating-concerns.svelte";
  import LayoutShift from "@components/layout/layout-shift.svelte";
  import BlockInlineAxes from "@components/layout/block-inline-axes.svelte";

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
