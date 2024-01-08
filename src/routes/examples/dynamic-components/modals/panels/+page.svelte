<script>
  import { onMount } from "svelte";

  /** @type {HTMLDialogElement} */
  let dialog;

  let background;
  let height;
  let left;
  let position;
  let width;

  onMount(() => {
    const params = new URLSearchParams(window.location.search);

    background = params.get("background");
    height = params.get("height");
    left = params.get("left");
    position = params.get("position");
    width = params.get("width");
  });
</script>

<div class="container">
  <button on:click={() => dialog.showModal()}>open panel</button>

  <dialog bind:this={dialog}>
    <div
      class="panel"
      style:background
      style:height
      style:left
      style:position
      style:width>
      <button on:click={() => dialog.close()}>close panel</button>
    </div>
  </dialog>
</div>

<style>
  .container {
    align-items: center;
    display: flex;
    justify-content: center;
    block-size: 100vh;
    inline-size: 100vw;
  }

  button {
    all: revert;
  }

  dialog {
    background-color: unset;
    block-size: 100vh;
    inline-size: 100vw;
    inset: 0;
    margin: 0;
  }

  dialog::backdrop {
    background-color: rgb(0 0 0 / 0.05);
  }

  .panel {
    animation-name: slideInFromLeft;
    animation-timing-function: ease;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    background-color: black;
    block-size: 100dvh;
    padding: 2rem;
    position: fixed;
    inset-inline-start: 0;
    inline-size: 18rem;
  }

  @keyframes -global-slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0px);
    }
  }
</style>
