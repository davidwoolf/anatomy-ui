<script lang="ts">
  // components
  // import SemanticElements from "@components/layout/semantic-elements.svelte";

  import SpacingPadding from "@examples/layout/spacing/padding.svelte";
  import SpacingMargin from "@examples/layout/spacing/margin.svelte";
  import SpacingGap from "@examples/layout/spacing/gap.svelte";
  import DimensionsBounds from "@examples/layout/dimensions/bounds.svelte";
  import MaxContentSizing from "@examples/layout/dimensions/max-content.svelte";
  import MinContentSizing from "@examples/layout/dimensions/min-content.svelte";
  import FitContentSizing from "@examples/layout/dimensions/fit-content.svelte";
  import DisplayModes from "@examples/layout/display-modes.svelte";
  import BlockInlineAxes from "@examples/layout/block-inline-axes.svelte";
  import AnimationJank from "@examples/layout/layout-shift/animation.svelte";
  import FontFallbacks from "@examples/layout/layout-shift/font-fallbacks.svelte";
  import MediaEmbeds from "@examples/layout/layout-shift/media-embeds.svelte";
  import SeparatingConcerns from "@examples/layout/separating-concerns.svelte";
  import StaticRelativeAbsolute from "@examples/layout/position/static-relative-absolute.svelte";
  import FixedSticky from "@examples/layout/position/fixed-sticky.svelte";
  import StackingStrategies from "@examples/layout/position/stacking-strategies.svelte";
  import StackingRules from "@examples/layout/position/stacking-rules.svelte";

  // data
  import type { PageData } from "./$types";
  export let data: PageData;

  // layout
  import Title from "@components/title.svelte";
  import Description from "@components/description.svelte";
  import Layout from "@components/layout.svelte";
  import NextSection from "@components/next-section.svelte";
  import Grid from "@components/grid/grid.svelte";
  import Column from "@components/grid/column.svelte";
  import Heading from "@components/text/heading.svelte";
  import Text from "@components/text/text.svelte";
  import Separator from "@components/grid/separator.svelte";
  import Row from "@components/grid/row.svelte";
  import Box from "@components/box.svelte";
  import Spacer from "@components/grid/spacer.svelte";

  const components = {
    AnimationJank,
    BlockInlineAxes,
    FontFallbacks,
    MediaEmbeds,
    SeparatingConcerns,
    StaticRelativeAbsolute,
    FixedSticky,
    StackingRules,
    StackingStrategies,
    DimensionsBounds,
    MaxContentSizing,
    MinContentSizing,
    FitContentSizing,
    DisplayModes,
    SpacingPadding,
    SpacingMargin,
    SpacingGap,
  };
</script>

<Layout>
  <svelte:fragment slot="head">
    <Title>{data.title}</Title>

    <Description>
      {@html data.description}
    </Description>
  </svelte:fragment>

  <svelte:fragment slot="contents">
    <Grid>
      {#each data.content as row, index (index)}
        {#if index !== 0}
          <Separator />
        {/if}

        <Column column="1" span="3">
          <Heading>{row.title}</Heading>
        </Column>

        <Column column="5" span="9">
          <Text size="large">
            {@html row.text}
          </Text>

          {#if row.component}
            <Spacer />
            <svelte:component this={components[row.component]} />
          {/if}
        </Column>

        {#if row.sections}
          {#each row.sections as section, index}
            <Spacer />

            <Row>
              <Column column={index % 2 === 0 ? "9" : "1"} span="4">
                <Box
                  paddingLeading={index % 2 === 0 ? "3rem" : "0"}
                  paddingTrailing={index % 2 === 0 ? "0" : "3rem"}>
                  <Text>
                    <h2>{section.title}</h2>

                    {@html section.text}
                  </Text>
                </Box>
              </Column>

              <Column column={index % 2 === 0 ? "1" : "5"} span="8">
                {#if section.component}
                  <svelte:component this={components[section.component]} />
                {/if}
              </Column>
            </Row>
          {/each}
        {/if}
      {/each}
    </Grid>
  </svelte:fragment>
</Layout>
