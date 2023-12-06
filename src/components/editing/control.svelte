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
    border-block-start: 1px solid #e7e8ea;
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
    padding: 0.875rem 0;
  }

  span {
    color: #0f172a;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 145%;
  }
</style>
