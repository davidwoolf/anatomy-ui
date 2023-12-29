<script>
  import Separator from "@components/separator.svelte";
  import { onMount } from "svelte";

  /** @type {HTMLDialogElement} */
  let panel;
  /** @type {HTMLDivElement} */
  let container;
  let expanded = false;

  function openPanel() {
    panel.showModal();
    expanded = true;
    document.body.style.overflow = "hidden";
  }

  function closePanel() {
    expanded = false;
    // panel.close();
  }

  onMount(function () {
    panel.addEventListener("click", (e) => {
      if (e.target === panel) {
        expanded = false;
      }
    });

    panel.addEventListener("close", () => {
      expanded = false;
      document.body.style.overflow = "auto";
    });

    container.addEventListener("animationend", () => {
      if (!expanded) {
        panel.close();
      }
    });
  });

  $: {
    console.log(expanded);
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

<dialog id="site-navigation" bind:this={panel}>
  <div
    class="container"
    bind:this={container}
    style:animation-name={expanded ? "slideIn" : "slideOut"}
    style:animation-duration={expanded ? "0.6s" : "0.4s"}
    style:animation-timing-function={expanded ? "cubic-bezier(0.25, 1, 0.5, 1)" : "ease"}>
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
      <a data-sveltekit-reload href="/foundations/layout/semantic-elements">Layout</a>

      <Separator />

      <a data-sveltekit-reload href="/foundations/typography/headings">Typography</a>

      <Separator />

      <a data-sveltekit-reload href="/foundations/color-light/spaces-gamuts">
        Color and light
      </a>

      <Separator />

      <a data-sveltekit-reload href="/foundations/forms/buttons">Forms</a>

      <Separator />

      <a data-sveltekit-reload href="/foundations/sizing/viewport-units">Sizing</a>
      <Separator />

      <a data-sveltekit-reload href="/foundations/transitional-components/dialogs">
        Transitional components
      </a>

      <Separator />

      <div>
        Animation
        <span class="coming-soon">Coming soon</span>
      </div>

      <Separator />

      <div>
        Media
        <span class="coming-soon">Coming soon</span>
      </div>
    </nav>
  </div>
</dialog>

<style>
  dialog {
    /* resets */
    background-color: unset;
    block-size: 100vh;
    inline-size: 100vw;
    inset: 0;
    margin: 0;
    overflow: hidden;
    max-block-size: unset;
    max-inline-size: unset;
    padding: 0;
  }

  dialog::backdrop {
    animation-name: fadeIn;
    animation-timing-function: ease;
    animation-iteration-count: 1;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }

  .container {
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: white;
    box-shadow: -1px 0px 26px -7px rgba(15, 23, 42, 0.15);
    height: 100dvh;
    position: absolute;
    right: 0;
    max-width: 90vw;
    overflow: scroll;
    padding: 2rem;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 30rem;
  }

  nav {
    display: flex;
    block-size: calc(100% - 5rem);
    flex-direction: column;
    margin-block-start: 2rem;
  }

  nav a,
  nav div {
    align-items: center;
    display: flex;
    color: var(--color-gray-800);
    font-size: var(--font-size-2xl);
    font-weight: 500;
    height: 4.5rem;
    min-block-size: 3rem;
    outline: none;
  }

  nav div {
    opacity: 0.5;
  }

  nav span {
    font-size: 1rem;
    margin: 0 0 0 auto;
  }

  a:focus-visible {
    outline: revert;
  }

  .close-menu {
    align-items: center;
    background: rgba(198, 198, 231, 0.2);
    block-size: 3rem;
    border-radius: 100%;
    display: flex;
    inline-size: 3rem;
    justify-content: center;
    margin-inline-start: auto;
    outline: none;
  }

  .close-menu:focus-visible {
    box-shadow: 0 0 0 2px white, 0 0 0 4px rgba(198, 198, 231, 0.8);
  }

  @media (min-width: 768px) {
    .container {
      padding: 3rem;
    }

    nav {
      block-size: calc(100% - 6rem);
      margin-block-start: 3rem;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1s;
    }
  }
</style>
