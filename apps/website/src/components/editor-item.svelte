<script>
  /** @type {string | undefined} */
  export let label = undefined;
</script>

<label>
  {#if label}
    <span>{label}:</span>
  {/if}
  <slot />
</label>

<style>
  label {
    align-items: baseline;
    display: flex;

    padding-inline-start: 1rem;
  }

  span {
    color: var(--color-green-400);
    margin-inline-end: 0.375rem;
    min-width: max-content;
  }
</style>
