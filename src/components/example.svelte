<script>
  export let reversed = false;
  export let overflow = "scroll";
</script>

<div class="example">
  <div
    class="example-container"
    style:--overflow={overflow}
    style:--layout={reversed ? "5 / -1" : "1 / 9"}>
    <slot name="preview" />
  </div>

  <div class="example-text" style:--layout={reversed ? "1 / span 4" : "9 / -1"}>
    <slot name="description" />
  </div>
</div>

<style>
  .example {
    align-items: center;
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
  }

  :global(.example + .example) {
    margin-top: 4rem;
  }

  .example-container {
    align-items: center;
    background-color: var(--color-purple-100);
    border-radius: 1rem;
    box-shadow: 0px 0px 4px 0px rgba(151, 71, 255, 0.12) inset;
    display: flex;
    flex-direction: column;
    grid-column: var(--layout, 1 / span 7);
    inline-size: 100%;
    justify-content: center;
    overflow: var(--overflow, scroll);
    padding: 1rem;
    position: relative;
  }

  @media (min-width: 1024px) {
    .example-container {
      aspect-ratio: 16 / 9;
      padding: 2rem;
    }
  }

  .example-text {
    grid-column: 8 / -1;
    grid-column: var(--layout, 8 / -1);
    grid-row: 1;
  }

  :global(.example-text h2) {
    color: var(--color-gray-800);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 145%;
  }

  :global(.example-text p) {
    margin: 0.875rem 0 0;
  }
</style>
