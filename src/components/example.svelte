<script>
  import { nanoid } from "nanoid";
  import Toggles from "./icons/toggles.svelte";

  let editorVisible = true;
  const popoverId = nanoid();
</script>

<div class="container">
  <div class="preview">
    <div class="canvas" style:--translateX={editorVisible ? "-8rem" : "0"}>
      <slot name="preview" />
    </div>
  </div>
  <div class="open-editor button">
    <button
      aria-haspopup="dialog"
      aria-expanded={editorVisible}
      aria-controls="popover-{popoverId}"
      type="button"
      style:visibility={editorVisible ? "hidden" : "visible"}
      style:--opacity={editorVisible ? "0" : "1"}
      style:--translateY={editorVisible ? ".5rem" : "0rem"}
      on:click={() => (editorVisible = true)}>
      <Toggles />

      Open editor
    </button>
  </div>

  <div
    id="popover-{popoverId}"
    class="controls"
    style:opacity={editorVisible ? "1" : "0"}
    style:visibility={editorVisible ? "visible" : "hidden"}>
    <slot name="controls" />
  </div>
</div>

<style>
  .container {
    /* background-color: white;
    box-shadow: 0px 0px 4px 0px rgba(151, 71, 255, 0.12); */
    border-radius: 0.75rem;
    border: 1px solid rgba(198, 198, 231, 0.5);
    overflow: hidden;
    position: relative;
  }

  .preview {
    background-color: var(--color-gray-100);
    place-items: center;
    place-content: center;
    display: grid;
    grid-template-rows: 1fr;
    flex-direction: column-reverse;
    inline-size: 100%;
    gap: 1rem;
    justify-content: center;
    padding: 0 8rem;
    position: relative;
    overflow: scroll;
  }

  .canvas {
    transition: all 1s ease;
    transform: translateX(var(--translateX, 0));
  }

  .open-editor {
    display: flex;
    justify-content: center;
    inset-block-start: 100%;
    inline-size: 100%;
    position: absolute;
  }

  .open-editor button {
    align-items: center;
    background-color: white;
    border-radius: 9999px;
    border: 2px solid color-mix(in srgb, var(--color-gray-300), white 50%);
    display: flex;
    font-size: var(--font-size-sm);
    font-weight: 500;
    gap: 0.5rem;
    margin: 0 auto;
    inline-size: max-content;
    inset-block-end: 0;
    padding: 0.5rem 1rem;
    transition: all 0.4s ease;
    opacity: var(--opacity, 1);
    transform: translateY(var(--translateY, 0));
  }

  .controls {
    background-color: white;
    block-size: 100%;
    box-shadow: -1px 0px 4px 0px rgba(151, 71, 255, 0.12);
    display: flex;
    flex-direction: column;
    inline-size: 16rem;
    inset-block-start: 0;
    inset-inline-end: 0;
    justify-content: center;
    padding-inline: 2rem;
    position: absolute;
    transition: all 1s ease;
  }
  /* 
  .close-editor {
    align-items: center;
    display: flex;
    justify-content: center;
    opacity: 0.6;
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    block-size: 3rem;
    inline-size: 3rem;
  } */

  /* @media (min-width: 640px) {
    .controls {
    }
  } */

  @media (min-width: 768px) {
    .preview {
      aspect-ratio: 16 / 9;
    }
  }
</style>
