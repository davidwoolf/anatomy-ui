<script>
  /** @type {string | number | null} */
  export let value;

  export let min = 0;
  export let max = 100000;
  /** @type {string | undefined} */
  export let placeholder = undefined;
</script>

<input type="number" bind:value {min} {max} {placeholder} />

<style>
  input {
    all: unset;
    background-color: white;
    box-shadow: 0px 1px 2px 0px rgba(151, 71, 255, 0.11);
    border: 1px solid rgba(42, 0, 97, 0.12);
    border-radius: 0.375rem;
    box-sizing: border-box;
    outline: revert;
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
    line-height: 1;
    min-width: 3rem;
  }
</style>
