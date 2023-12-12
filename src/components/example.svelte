<script>
  export let reversed = false;
  export let overflow = "scroll";
</script>

<div class="example">
  <div
    class="example-container"
    style:--overflow={overflow}
    style:--layout={reversed ? "5 / -1" : "1 / 9"}>
    <div class="example-preview">
      <slot name="preview" />
    </div>

    <div class="example-controls">
      <slot name="preview-controls" />
    </div>
  </div>

  <div class="example-text" style:--layout={reversed ? "1 / span 4" : "9 / -1"}>
    <slot name="description" />
  </div>
</div>

<style>
  .example {
    align-items: center;
    border-block-end: 1px solid var(--color-gray-200);
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
    margin-block-start: 2.5rem;
    margin-inline-end: -1.5rem;
    padding: 0 1.5rem 3rem 0;
  }

  .example-container {
    align-items: center;
    background-color: var(--color-purple-100);
    border-radius: 1rem;
    box-shadow: 0px 0px 4px 0px rgba(151, 71, 255, 0.12) inset;
    display: grid;
    gap: 0.75rem;
    grid-template-rows: max-content 1fr;
    grid-template-columns: 1fr;
    grid-column: var(--layout, 1 / span 7);
    inline-size: 100%;
    justify-content: center;
    margin-block-start: 1.5rem;
    padding: 0.75rem;
    position: relative;
  }

  .example-preview {
    align-items: center;
    block-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: 2;
  }

  .example-controls {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    overflow: scroll;
    max-width: 100%;
  }

  .example-text {
    grid-column: 8 / -1;
    grid-column: var(--layout, 8 / -1);
    grid-row: 1;
  }

  :global(.example-text h2) {
    color: var(--color-gray-800);
    font-size: var(--font-size-lg);
    font-weight: 600;
    line-height: 145%;
  }

  :global(.example-text p:first-of-type) {
    margin: 0.25rem 0 0;
  }

  :global(.example-text p:not(:first-of-type)) {
    margin: 0.875rem 0 0;
  }

  @media (min-width: 640px) {
    .example-controls {
      gap: 1rem;
      justify-content: flex-start;
    }
  }

  @media (min-width: 768px) {
    .example-container {
      aspect-ratio: 16 / 9;
      grid-template-rows: 1fr max-content;
      padding: 1.5rem;
    }

    .example-preview {
      order: 1;
      overflow: var(--overflow, scroll);
    }

    .example-controls {
      order: 2;
    }
  }

  @media (min-width: 1024px) {
    .example {
      border: none;
      margin-top: 4rem;
      padding: 0;
    }

    .example-container {
      margin-block-start: 0;
    }

    :global(.example-text h2) {
      font-size: var(--font-size-xl);
    }
  }
</style>
