<script>
  export let canScale = true;
  export let canPan = true;
  /**
   * @type {HTMLDivElement}
   */
  let canvas;
  let grabbing = false;

  let scale = 1;
  let startingCoordinates = { x: 0, y: 0 };
  let movingCoordinates = { x: 0, y: 0 };
  let transformX = 0;
  let transformY = 0;

  /**
   *
   * @param {PointerEvent} e
   */
  function onCanvasDown(e) {
    // document.body.style.overflow = "hidden";

    startingCoordinates = {
      x: e.clientX,
      y: e.clientY,
    };

    movingCoordinates = {
      x: e.clientX,
      y: e.clientY,
    };

    grabbing = true;
  }

  function onCanvasUp() {
    // document.body.style.overflow = "auto";
    grabbing = false;

    transformX = transformX + (movingCoordinates.x - startingCoordinates.x);
    transformY = transformY + (movingCoordinates.y - startingCoordinates.y);

    startingCoordinates = { x: 0, y: 0 };
    movingCoordinates = { x: 0, y: 0 };
  }

  /**
   *
   * @param {PointerEvent} e
   */
  function onCanvasMove(e) {
    if (!grabbing || !canPan) return;

    // document.body.style.overflow = "hidden";

    movingCoordinates = {
      x: e.clientX,
      y: e.clientY,
    };
  }

  function getCursor() {
    if (!canPan) {
      return "inherit";
    }

    if (grabbing) {
      return "grabbing";
    }

    return "grab";
  }
</script>

<div class="container">
  <div class="canvas">
    <div
      bind:this={canvas}
      on:pointerdown|capture|stopPropagation={onCanvasDown}
      style:cursor={getCursor()}
      class="canvas--contents">
      <div
        class="canvas--preview"
        style:--scale={scale}
        style:--translateX="{(transformX +
          (movingCoordinates.x - startingCoordinates.x)) /
          scale}px"
        style:--translateY="{(transformY +
          (movingCoordinates.y - startingCoordinates.y)) /
          scale}px">
        <slot name="preview" />
      </div>
    </div>

    {#if canScale}
      <label class="scale" aria-label="Change preview scale">
        <span>{scale}</span>
        <input type="range" bind:value={scale} min=".5" max="2" step=".1" />
      </label>
    {/if}
  </div>

  <div class="controls">
    <slot name="controls" />
  </div>
</div>

<svelte:window
  on:pointerup|stopPropagation={onCanvasUp}
  on:pointermove|stopPropagation={onCanvasMove}
  on:scroll={(e) => {
    if (grabbing) {
      e.preventDefault();
    }
  }} />

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
    block-size: 100%;
    inline-size: 100%;
    min-block-size: fit-content;
    position: relative;
    overflow: hidden;
  }

  .canvas--contents {
    inset: 0;
    position: absolute;
    touch-action: none;
  }

  .canvas--preview {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    align-items: center;
    block-size: 100%;
    display: flex;
    flex-direction: column;
    inline-size: 100%;
    justify-content: center;
    padding: 1rem;
    transform: scale(var(--scale)) translate3d(var(--translateX), var(--translateY), 0);
  }

  :global(
      .canvas--preview img,
      .canvas--preview h2,
      .canvas--preview h3,
      .canvas--preview p
    ) {
    pointer-events: none;
  }

  .scale {
    align-items: center;
    background: linear-gradient(to top, var(--color-gray-100) 50%, transparent);
    display: flex;
    inset-inline: 0;
    inset-block-end: 0;
    justify-content: flex-end;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    position: absolute;
    z-index: 2;
  }

  .scale span {
    font-size: var(--font-size-xs);
    font-weight: 500;
    opacity: 0.7;
  }

  .scale input {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    block-size: 1.25rem;
    inline-size: 8rem;
  }

  .scale input::-webkit-slider-runnable-track {
    background: var(--color-gray-300);
    height: 0.125rem;
  }

  .scale input::-moz-range-track {
    background: var(--color-gray-300);
    height: 0.125rem;
  }

  .scale input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    box-sizing: border-box;
    background: white;
    border: 2px solid var(--color-gray-800);
    box-shadow: 0px 2px 3px rgba(151, 71, 255, 0.18);
    display: block;
    border-radius: 9999px;
    block-size: 1.25rem;
    inline-size: 1.25rem;
    margin-block-start: -0.5rem;
  }

  .scale input::-moz-range-thumb {
    -moz-appearance: none;
    box-sizing: border-box;
    appearance: none;
    background: white;
    border: 2px solid var(--color-gray-800);
    box-shadow: 0px 2px 3px rgba(151, 71, 255, 0.18);
    display: block;
    border-radius: 9999px;
    block-size: 1.25rem;
    inline-size: 1.25rem;
    margin-block-start: -0.5rem;
  }

  /***** Focus Styles *****/
  /* Removes default focus */
  input[type="range"]:focus {
    outline: none;
  }

  /***** Chrome, Safari, Opera, and Edge Chromium *****/
  input[type="range"]:focus::-webkit-slider-thumb {
    outline: 2px solid var(--color-gray-800);
    outline-offset: 0.125rem;
  }

  /******** Firefox ********/
  input[type="range"]:focus::-moz-range-thumb {
    outline: 2px solid var(--color-gray-800);
    outline-offset: 0.125rem;
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
    }

    .canvas--preview {
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
