<script>
  export let offset = false;
  export let reversed = false;
  export let overflow = "scroll";
</script>

<div
  class="container"
  style:--small-offset={offset ? "1.5rem" : 0}
  style:--large-offset={offset ? "3rem" : 0}
  style:--overflow={overflow}
  style:--layout={reversed ? "5 / -1" : "1 / 9"}>
  <div class="preview">
    <slot name="preview" />
  </div>

  <div class="controls">
    <slot name="preview-controls" />
  </div>
</div>

<style>
  .container {
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
    margin-block-start: var(--small-offset);
    padding: 0.75rem;
    position: relative;
  }

  .preview {
    align-items: center;
    block-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: 2;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    overflow: scroll;
    max-width: 100%;
  }

  /* .example-text {
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
  } */

  @media (min-width: 640px) {
    .controls {
      gap: 1rem;
      justify-content: flex-start;
    }
  }

  @media (min-width: 768px) {
    .container {
      aspect-ratio: 16 / 9;
      grid-template-rows: 1fr max-content;
    }

    .preview {
      order: 1;
      overflow: var(--overflow, scroll);
    }

    .controls {
      order: 2;
    }
  }

  @media (min-width: 1024px) {
    .container {
      margin-block-start: var(--large-offset);
    }

    /* :global(.example-text h2) {
      font-size: var(--font-size-xl);
    } */
  }
</style>
