<script>
  /** @type {string[] | number[] | null[]} */
  export let value;
  export let min = 0;
  export let max = 100000;
</script>

<div class="group">
  {#each value as item, index (index)}
    <div class="control">
      <input type="number" bind:value={item} {min} {max} placeholder="0" />
    </div>
  {/each}
</div>

<style>
  .group {
    all: unset;
    border: 1px solid #0f172a;
    border-radius: 0.25rem;
    box-sizing: border-box;
    display: flex;
    outline: revert;
    block-size: 1.875rem;
    font-size: 0.75rem;
    line-height: 1;
  }

  .control {
    padding: 0.25rem 0;
    position: relative;
  }

  .control input {
    border-inline-start: 1px solid color-mix(in srgb, #0f172a, #fff 80%);
    height: 100%;
    padding: 0.25rem 0.75rem;
    width: 3.5rem;
  }

  .control:first-child input {
    border-inline-start: none;
  }
</style>
