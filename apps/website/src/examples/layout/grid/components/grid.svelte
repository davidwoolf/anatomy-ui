<script>
  export let areas = "none";
  export let autoFlow = "row";
  export let columns = "1fr";
  export let gap = "0px";
  export let implicitColumnSize = "auto";
  export let implicitRowSize = "auto";
  export let rows = "initial";
</script>

<div class="preview">
  <span class="label columns">columns</span>
  <span class="label rows">rows</span>
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
</div>

<style>
  .preview {
    position: relative;
  }

  .container {
    border-block-start: 1px solid var(--color-purple-400);
    border-inline-start: 1px solid var(--color-purple-400);
    background-color: var(--color-purple-400);
    display: grid;
    width: 100%;
  }

  .label {
    color: var(--color-purple-400);
    font-family: var(--font-mono);
    font-size: var(--font-size-xxs);
    font-weight: 500;
    text-align: center;
  }

  .label.columns {
    position: absolute;
    inset-block-end: calc(100% + 1rem);
    inset-inline-start: 50%;
    transform: translateX(-50%);
  }

  .label.rows {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: calc(100% + 1rem);
    transform: translateY(-50%) rotate(-90deg);
  }
</style>
