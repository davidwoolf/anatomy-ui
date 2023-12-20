<script>
  export let areas = "none";
  export let autoFlow = "row";
  export let columns = "1fr";
  export let gap = "0px";
  export let implicitColumnSize = "auto";
  export let implicitRowSize = "auto";
  export let rows = "1fr";
</script>

<div
  class="container"
  style:grid-template-columns={columns}
  style:grid-template-rows={rows}
  style:grid-auto-rows={implicitRowSize}
  style:grid-auto-columns={implicitColumnSize}
  style:grid-auto-flow={autoFlow}
  style:grid-template-areas={areas}
  style:gap>
  <slot />
</div>

<style>
  .container {
    border: 1px solid var(--color-gray-300);
    counter-reset: section;
    display: grid;
    overflow: hidden;
    padding: 0.25rem;
    gap: 0.25rem;
  }
</style>
