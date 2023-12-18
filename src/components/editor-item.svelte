<script>
  /** @type {string} */
  export let label;
</script>

<label>
  <span>{label}:</span>
  <slot />
</label>

<style>
  label {
    align-items: center;
    display: flex;
    padding-inline-start: 1rem;
  }

  span {
    color: var(--color-green-400);
    margin-inline-end: 0.375rem;
  }
</style>
