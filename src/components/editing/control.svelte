<script>
  /** @type {string} */
  export let label;
</script>

<label>
  <span>{label}</span>
  <slot />
</label>

<style>
  label {
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  span {
    color: #0f172a;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 145%;
    min-width: max-content;
  }
</style>
