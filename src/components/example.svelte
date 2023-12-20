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
    border-radius: 0.75rem;
    border: 1px solid rgba(198, 198, 231, 0.5);
    display: grid;
    grid-template-rows: auto auto;
    overflow: hidden;
    position: relative;
    max-width: 52rem;
  }

  .canvas {
    background-color: var(--color-gray-100);
    align-items: center;
    block-size: 100%;
    display: flex;
    flex-direction: column;
    inline-size: 100%;
    justify-content: center;
    padding: 3rem;
    position: relative;
    overflow: scroll;
  }

  .controls {
    background-color: white;
    block-size: 100%;
    box-shadow: -1px -1px 4px 0px rgba(151, 71, 255, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 768px) {
    .controls {
      padding: 2rem;
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
