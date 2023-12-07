<script>
  /** @type {string | undefined} */
  export let label = undefined;
</script>

<form>
  <fieldset>
    {#if label}
      <legend>{label}</legend>
    {/if}

    <div class="contents">
      <slot />
    </div>
  </fieldset>
</form>

<style>
  form {
    margin-block-start: 1.5rem;
  }

  legend {
    color: rgb(31 41 55 / 0.6);
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 145%;
  }

  .contents {
    border-block-end: 1px solid #e7e8ea;
    display: grid;
    grid-template-columns: 1fr max-content;
    margin: 0.5rem 0 0;
  }
</style>
