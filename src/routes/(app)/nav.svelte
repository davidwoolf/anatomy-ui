<script>
  import Separator from "@components/separator.svelte";

  /** @type {HTMLDialogElement} */
  let panel;
  let expanded = false;

  function openPanel() {
    panel.showModal();
    expanded = true;
  }

  function closePanel() {
    panel.close();
    expanded = false;
  }
</script>

<button
  on:click={openPanel}
  type="button"
  class="trigger"
  aria-label="Open site navigation"
  aria-haspopup="dialog"
  aria-expanded={expanded}
  aria-controls="site-navigation">
  <svg
    width="26"
    height="19"
    viewBox="0 0 26 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 1.5H25M25 9.5H6.6M25 17.5H1"
      stroke="#0F172A"
      stroke-width="1.5"
      stroke-linecap="round" />
  </svg>
</button>

<dialog id="site-navigation" class="hidden" bind:this={panel}>
  <button class="close-menu" on:click={closePanel} aria-label="Close site navigation">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none">
      <path
        d="M1 1L13 13M13 1L1 13"
        stroke="#0F172A"
        stroke-width="1.5"
        stroke-linecap="round" />
    </svg>
  </button>
  <nav class="menu">
    <a data-sveltekit-reload href="/foundations/layout/semantic-elements"
      ><span>Layout</span></a>

    <Separator />

    <a data-sveltekit-reload href="/foundations/layout"><span>Typography</span></a>

    <Separator />

    <a data-sveltekit-reload href="/foundations/layout"><span>Color and light</span></a>

    <Separator />

    <a data-sveltekit-reload href="/foundations/layout"><span>Animation</span></a>

    <Separator />

    <a data-sveltekit-reload href="/foundations/layout"><span>Media</span></a>

    <Separator />

    <a data-sveltekit-reload href="/foundations/layout"><span>Forms</span></a>

    <Separator />

    <a data-sveltekit-reload href="/foundations/layout"><span>Sizing</span></a>

    <Separator />

    <a data-sveltekit-reload href="/foundations/layout"><span>Extras</span></a>
  </nav>
</dialog>

<style>
  dialog {
    /* resets */
    max-height: unset;
    max-width: unset;
    /* styles */
    animation: slideIn;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-iteration-count: 1;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    background-color: white;
    box-shadow: -1px 0px 26px -7px rgba(15, 23, 42, 0.15);
    height: 100dvh;
    overflow: scroll;
    margin: 0 0 0 auto;
    padding: 3rem;
    transform: translateX(100%);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 30rem;
  }

  dialog::backdrop {
    animation: fadeIn;
    animation-timing-function: ease;
    animation-iteration-count: 1;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }

  nav {
    display: flex;
    block-size: calc(100% - 6rem);
    flex-direction: column;
    margin-block-start: 3rem;
  }

  a {
    align-items: center;
    display: flex;
    color: var(--color-gray-800);
    font-size: var(--font-size-2xl);
    font-weight: 500;
    height: 4.5rem;
    min-block-size: 3rem;
    outline: none;
  }

  a span {
    transition: transform 0.5s 0.075s ease;
  }

  a:hover span {
    transform: translateX(1rem);
  }

  a:focus-visible {
    outline: revert;
  }

  .close-menu {
    align-items: center;
    background: rgba(198, 198, 231, 0.2);
    border-radius: 100%;
    display: flex;
    height: 3rem;
    justify-content: center;
    margin-inline-start: auto;
    outline: none;
    width: 3rem;
  }

  .close-menu:focus-visible {
    box-shadow: 0 0 0 2px white, 0 0 0 4px rgba(198, 198, 231, 0.8);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1s;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0);
    }
  }
</style>
