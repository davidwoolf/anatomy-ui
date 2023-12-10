<script>
  /** @type {string | number} */
  export let value;

  export let min = 0;
  export let max = 100000;
</script>

<input type="number" bind:value {min} {max} />

<style>
  input {
    all: unset;
    border: 1px solid #0f172a;
    border-radius: 0.25rem;
    box-sizing: border-box;
    outline: revert;
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
    line-height: 1;
    min-width: 6rem;
  }
</style>
