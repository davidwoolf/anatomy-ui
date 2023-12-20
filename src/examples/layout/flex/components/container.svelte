<script>
  export let alignItems = "stretch";
  export let justifyContents = "stretch";
  export let direction = "row";
  export let gap = "0";
  export let width = "auto";
  export let wrap = "nowrap";
</script>

<div
  class="container"
  style:align-items={alignItems}
  style:justify-content={justifyContents}
  style:flex-direction={direction}
  style:flex-wrap={wrap}
  style:width
  style:gap>
  <slot />
</div>

<style>
  .container {
    border: 1px solid var(--color-purple-400);
    display: flex;
    margin: 4rem 0;
    padding: 0.5rem;
    max-width: 100%;
  }
</style>
