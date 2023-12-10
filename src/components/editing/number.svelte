<script>
  /** @type {string | number} */
  export let value;
</script>

<input type="number" bind:value />

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
    width: 100%;
  }
</style>
