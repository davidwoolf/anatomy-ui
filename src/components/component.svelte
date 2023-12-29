<script>
  /** @type {string} */
  export let name;
  /** @type {string} */
  export let path;
  /** @type {string} */
  export let id;

  const items = {
    layout: {
      "aspect-ratios": {
        formatting: import("@examples/layout/aspect-ratio/formatting.svelte"),
        "width-height": import("@examples/layout/aspect-ratio/width-height.svelte"),
        "min-max": import("@examples/layout/aspect-ratio/min-max.svelte"),
        flex: import("@examples/layout/aspect-ratio/flex.svelte"),
      },
      "separating-concerns": {
        "separating-concerns": import("@examples/layout/separating-concerns.svelte"),
      },
      "layout-shift": {
        "media-embeds": import("@examples/layout/layout-shift/media-embeds.svelte"),
        animation: import("@examples/layout/layout-shift/animation.svelte"),
      },
      "block-inline-axes": {
        "block-inline-axes": import("@examples/layout/block-inline-axes.svelte"),
      },
      "box-sizing": {
        "box-sizing": import("@examples/layout/box-sizing.svelte"),
      },
      "display-modes": {
        "display-modes": import("@examples/layout/display-modes.svelte"),
      },
      dimensions: {
        bounds: import("@examples/layout/dimensions/bounds.svelte"),
        "max-content": import("@examples/layout/dimensions/max-content.svelte"),
        "min-content": import("@examples/layout/dimensions/min-content.svelte"),
        "fit-content": import("@examples/layout/dimensions/fit-content.svelte"),
      },
      spacing: {
        padding: import("@examples/layout/spacing/padding.svelte"),
        margin: import("@examples/layout/spacing/margin.svelte"),
        gap: import("@examples/layout/spacing/gap.svelte"),
      },
      position: {
        "static-relative-absolute": import(
          "@examples/layout/position/static-relative-absolute.svelte"
        ),
        "fixed-sticky": import("@examples/layout/position/fixed-sticky.svelte"),
        "stacking-rules": import("@examples/layout/position/stacking-rules.svelte"),
      },
      "flexible-layout": {
        constraints: import("@examples/layout/flex/constraints.svelte"),
        basis: import("@examples/layout/flex/basis.svelte"),
        grow: import("@examples/layout/flex/grow.svelte"),
        shrink: import("@examples/layout/flex/shrink.svelte"),
        push: import("@examples/layout/flex/push.svelte"),
      },
      "grid-layout": {
        "explicit-tracks": import("@examples/layout/grid/explicit-tracks.svelte"),
        "implicit-tracks": import("@examples/layout/grid/implicit-tracks.svelte"),
        "flexible-units": import("@examples/layout/grid/flexible-units.svelte"),
        keywords: import("@examples/layout/grid/keywords.svelte"),
        repeat: import("@examples/layout/grid/repeat.svelte"),
        span: import("@examples/layout/grid/span.svelte"),
        area: import("@examples/layout/grid/area.svelte"),
        "excluded-area": import("@examples/layout/grid/excluded-area.svelte"),
        "span-areas": import("@examples/layout/grid/span-areas.svelte"),
      },
    },
    typography: {
      text: {
        "emphasis-importance": import(
          "@examples/typography/text/emphasis-importance.svelte"
        ),
        lists: import("@examples/typography/text/lists.svelte"),
        labels: import("@examples/typography/text/labels.svelte"),
        "address-time": import("@examples/typography/text/address-time.svelte"),
      },
    },
    forms: {
      buttons: {
        strategies: import("@examples/forms/buttons/strategies.svelte"),
        "focus-state": import("@examples/forms/buttons/focus-state.svelte"),
        affordances: import("@examples/forms/buttons/affordances.svelte"),
      },
    },
    "color-light": {
      gradients: {
        "repeating-functions": import(
          "@examples/color-light/gradients/repeating-functions.svelte"
        ),
        "repeating-tiling": import(
          "@examples/color-light/gradients/repeating-tiling.svelte"
        ),
      },
    },
    "transitional-components": {},
    sizing: {},
  };
</script>

{#await items[path][id][name] then module}
  {#if module}
    <svelte:component this={module.default} />
  {:else}
    <p style="color: red">Cannot find example</p>
  {/if}
{:catch}
  <p style="color: red">Cannot find example</p>
{/await}
