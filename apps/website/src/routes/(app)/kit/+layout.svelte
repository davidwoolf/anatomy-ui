<script>
  import Container from "@components/layout/container.svelte";
  import Grid from "@components/grid/grid.svelte";
  import Column from "@components/grid/column.svelte";
  import SectionNav from "./section-nav.svelte";
</script>

<Container>
  <Grid>
    <Column column="1" span="2">
      <aside>
        <span class="anatomykit">AnatomyKit</span>

        <SectionNav />
      </aside>
    </Column>

    <Column column="4" span="9">
      <slot />
    </Column>
  </Grid>
</Container>

<style>
  .anatomykit {
    color: var(--color-red-400);
    font-size: var(--font-size-4xl);
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1.75;
  }
</style>
