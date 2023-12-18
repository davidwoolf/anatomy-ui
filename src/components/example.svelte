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
  <slot name="preview" />
</div>

<style>
  .container {
    align-items: center;
    background-color: white;
    border-radius: 0.75rem;
    border: 1px solid rgba(198, 198, 231, 0.5);
    box-shadow: 0px 0px 4px 0px rgba(151, 71, 255, 0.12);
    display: flex;
    flex-direction: column-reverse;
    gap: 3rem;
    /* grid-template-rows: max-content 1fr;
    grid-template-columns: 1fr;
    grid-column: var(--layout, 1 / span 7); */
    inline-size: 100%;
    justify-content: center;
    margin-block-start: var(--small-offset);
    padding: 2rem;
    overflow: scroll;
    position: relative;
  }

  /* .preview {
    align-items: center;
    block-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: 2;
  } */

  /* .controls {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    overflow: scroll;
    max-width: 100%;
  } */

  @media (min-width: 640px) {
    /* .controls {
      gap: 1rem;
      justify-content: flex-start;
    } */
  }

  @media (min-width: 768px) {
    .container {
      aspect-ratio: 16 / 9;
      flex-direction: row;
      /* grid-template-rows: 1fr max-content; */
    }

    /* .preview {
      order: 1;
      overflow: var(--overflow, scroll);
    }

    .controls {
      overflow: visible;
      order: 2;
    } */
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
