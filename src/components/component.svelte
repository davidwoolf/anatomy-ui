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
      internationalization: {
        direction: import("@examples/typography/internationalization/direction.svelte"),
      },
      text: {
        "emphasis-importance": import(
          "@examples/typography/text/emphasis-importance.svelte"
        ),
        lists: import("@examples/typography/text/lists.svelte"),
        labels: import("@examples/typography/text/labels.svelte"),
        "address-time": import("@examples/typography/text/address-time.svelte"),
      },
      "sizing-type": {
        "relative-units": import(
          "@examples/typography/sizing-type/relative-units.svelte"
        ),
        "absolute-units": import(
          "@examples/typography/sizing-type/absolute-units.svelte"
        ),
        "typographic-units": import(
          "@examples/typography/sizing-type/typographic-units.svelte"
        ),
      },
      "text-overflow": {
        "single-line": import("@examples/typography/text-overflow/single-line.svelte"),
        "multiple-lines": import(
          "@examples/typography/text-overflow/multiple-lines.svelte"
        ),
      },
      "tracking-leading": {
        "non-text-elements": import(
          "@examples/typography/tracking-leading/non-text-elements.svelte"
        ),
      },
    },
    forms: {
      buttons: {
        strategies: import("@examples/forms/buttons/strategies.svelte"),
        "focus-state": import("@examples/forms/buttons/focus-state.svelte"),
        affordances: import("@examples/forms/buttons/affordances.svelte"),
        "mixed-button-use": import("@examples/forms/buttons/mixed-button-use.svelte"),
        "reset-button": import("@examples/forms/buttons/reset-button.svelte"),
        "form-validation": import("@examples/forms/buttons/form-validation.svelte"),
        "omitting-labels": import("@examples/forms/buttons/omitting-labels.svelte"),
        popups: import("@examples/forms/buttons/popups.svelte"),
        toggles: import("@examples/forms/buttons/toggles.svelte"),
        "custom-elements": import("@examples/forms/buttons/custom-elements.svelte"),
      },
    },
    "color-light": {
      "system-colors": {
        currentcolor: import("@examples/color-light/system-colors/currentcolor.svelte"),
        "system-keywords": import(
          "@examples/color-light/system-colors/system-keywords.svelte"
        ),
      },
      gradients: {
        "linear-color-stops": import(
          "@examples/color-light/gradients/linear-color-stops.svelte"
        ),
        "linear-color-hints": import(
          "@examples/color-light/gradients/linear-color-hints.svelte"
        ),
        "radial-gradient-shape": import(
          "@examples/color-light/gradients/radial-gradient-shape.svelte"
        ),
        "radial-gradient-size": import(
          "@examples/color-light/gradients/radial-gradient-size.svelte"
        ),
        "radial-gradient-position": import(
          "@examples/color-light/gradients/radial-gradient-position.svelte"
        ),
        "conic-gradients": import(
          "@examples/color-light/gradients/conic-gradients.svelte"
        ),
        "repeating-functions": import(
          "@examples/color-light/gradients/repeating-functions.svelte"
        ),
        "repeating-tiling": import(
          "@examples/color-light/gradients/repeating-tiling.svelte"
        ),
        "color-spaces": import("@examples/color-light/gradients/color-spaces.svelte"),
        "hue-interpolation": import(
          "@examples/color-light/gradients/hue-interpolation.svelte"
        ),
      },
      "color-mixing": {
        "mixing-colors": import(
          "@examples/color-light/color-mixing/mixing-colors.svelte"
        ),
        "hue-interpolation": import(
          "@examples/color-light/color-mixing/hue-interpolation.svelte"
        ),
        "percentage-values": import(
          "@examples/color-light/color-mixing/percentage-values.svelte"
        ),
        "alpha-channels": import(
          "@examples/color-light/color-mixing/alpha-channels.svelte"
        ),
      },
      shadows: {
        coordinates: import("@examples/color-light/shadows/coordinates.svelte"),
        "blur-spread": import("@examples/color-light/shadows/blur-spread.svelte"),
        inset: import("@examples/color-light/shadows/inset.svelte"),
        "text-shadows": import("@examples/color-light/shadows/text-shadows.svelte"),
      },
      "filters-blend-modes": {
        blur: import("@examples/color-light/filters-blend-modes/blur.svelte"),
        brightness: import("@examples/color-light/filters-blend-modes/brightness.svelte"),
        contrast: import("@examples/color-light/filters-blend-modes/contrast.svelte"),
        "drop-shadows": import(
          "@examples/color-light/filters-blend-modes/drop-shadows.svelte"
        ),
        grayscale: import("@examples/color-light/filters-blend-modes/grayscale.svelte"),
        "hue-rotate": import(
          "@examples/color-light/filters-blend-modes/hue-rotate.svelte"
        ),
        invert: import("@examples/color-light/filters-blend-modes/invert.svelte"),
        opacity: import("@examples/color-light/filters-blend-modes/opacity.svelte"),
        saturate: import("@examples/color-light/filters-blend-modes/saturate.svelte"),
        sepia: import("@examples/color-light/filters-blend-modes/sepia.svelte"),
        backdrop: import("@examples/color-light/filters-blend-modes/backdrop.svelte"),
      },
    },
    "dynamic-components": {
      dialogs: {
        definition: import("@examples/dynamic-components/dialogs/definition.svelte"),
        backdrop: import("@examples/dynamic-components/dialogs/backdrop.svelte"),
      },
      modals: {
        panels: import("@examples/dynamic-components/modals/panels.svelte"),
      },
    },
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
