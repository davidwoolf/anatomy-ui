<script>
</script>

<div class="container">
  <div class="canvas">
    <slot name="preview" />
  </div>

  <div class="controls">
    <slot name="controls" />
  </div>
</div>

<style>
  .container {
    border-block: 1px solid rgba(198, 198, 231, 0.5);
    display: grid;
    grid-template-rows: auto auto;
    overflow: hidden;
    position: relative;
    margin-inline: -1.5rem;
    max-width: 52rem;
  }

  .canvas {
    background-color: var(--color-gray-100);
    aspect-ratio: 1 / 1;
    align-items: center;
    block-size: 100%;
    display: flex;
    flex-direction: column;
    inline-size: 100%;
    min-block-size: fit-content;
    justify-content: center;
    padding: 1rem;
    position: relative;
    overflow: scroll;
  }

  .controls {
    background-color: white;
    border-block-start: 1px solid rgba(198, 198, 231, 0.5);
    block-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    position: relative;
    overflow: scroll;
    z-index: 1;
  }

  @media (min-width: 480px) {
    .container {
      border-radius: 0.75rem;
      border: 1px solid rgba(198, 198, 231, 0.5);
      box-shadow: 0 1px 2px 0px rgba(151, 71, 255, 0.12);
      margin-inline: 0;
    }

    .canvas {
      aspect-ratio: unset;
      min-block-size: unset;
      padding: 3rem;
    }

    .controls {
      border-block-start: none;
      border-inline-start: 1px solid rgba(198, 198, 231, 0.5);
    }
  }

  @media (min-width: 768px) {
    .controls {
      padding: 2rem;
    }

    .canvas {
      padding: 3rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      aspect-ratio: 16 / 9;
      grid-template-columns: 1fr 16rem;
      grid-template-rows: 1fr;
    }
  }

  @media (min-width: 1280px) {
    .container {
      grid-template-columns: 1fr 18rem;
    }
  }
</style>
