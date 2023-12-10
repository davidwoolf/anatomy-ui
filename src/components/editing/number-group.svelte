<script>
  /** @type {string[] | number[]} */
  export let value;
  /**
   * @param {string[] | number[]} _value
   */
  export let onChange = (_value) => undefined;

  export let min = 0;
  export let max = 100000;

  $: onChange(value);
</script>

<div>
  {#each value as item}
    <input type="number" bind:value={item} {min} {max} />
  {/each}
</div>

<style>
  div {
    all: unset;
    border: 1px solid #0f172a;
    border-radius: 0.25rem;
    box-sizing: border-box;
    outline: revert;
    font-size: 0.75rem;
    line-height: 1;
    padding: 0.25rem 0;
    overflow: hidden;
  }

  div input {
    border-inline-start: 1px solid color-mix(in srgb, #0f172a, #fff 80%);
    padding: 0.25rem 0.75rem;
    width: 3.5rem;
  }

  div input:first-child {
    border-inline-start: none;
  }
</style>
