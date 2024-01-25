<script>
  export let paddingLeading = "0";
  export let paddingTrailing = "0";
  export let paddingStart = "0";
  export let paddingEnd = "0";
</script>

<div
  style:--paddingLeading={paddingLeading}
  style:--paddingTrailing={paddingTrailing}
  style:--paddingStart={paddingStart}
  style:--paddingEnd={paddingEnd}>
  <slot />
</div>

<style>
  @media (min-width: 1280px) {
    div {
      padding-inline-start: var(--paddingLeading);
      padding-inline-end: var(--paddingTrailing);
      padding-block-start: var(--paddingStart);
      padding-block-end: var(--paddingEnd);
    }
  }
</style>
