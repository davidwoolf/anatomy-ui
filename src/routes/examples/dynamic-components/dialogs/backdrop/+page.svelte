<script>
  import { onMount } from "svelte";

  /** @type {HTMLDialogElement} */
  let dialog;

  /** @type {string | null} */
  let background = "rgb(0 0 0 / .5)";

  /**
   * Extremely hacky way to get playground values to the backdrop
   *
   * The `dialog::backdrop` selector does not inherit from the dialog it is attached to
   * OR from :root. Instead, it only inherit's from the global `::backdrop` declaration
   * @param {string | null} value
   */
  function addBackdropCSS(value) {
    const css = `::backdrop { --background: ${value}; }`;
    const head = document.querySelector("head");
    const style = document.createElement("style");

    if (head) {
      head.appendChild(style);

      style.appendChild(document.createTextNode(css));
    }
  }

  onMount(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("background")) {
      background = params.get("background");

      addBackdropCSS(background);
    }
  });
</script>

<div>
  <button on:click={() => dialog.showModal()}>open dialog</button>

  <dialog bind:this={dialog}>
    <button on:click={() => dialog.close()}>close dialog</button>
  </dialog>
</div>

<style>
  div {
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
    padding: 1rem;
  }

  dialog::backdrop {
    background-color: var(--background);
  }
</style>
