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

  /**
   * This doesn't actually close the panel, but
   * kicks off a close animation which will call the dialog's .close()
   * function in the `container.addEventListener("animationend")` call below
   */
  function closePanel() {
    expanded = false;
  }

  /**
   *
   * @param {HTMLAnchorElement} node
   */
  function dismissPanel(node) {
    function handleClick() {
      expanded = false;
    }

    node.addEventListener("click", handleClick, true);

    return {
      destroy() {
        node.removeEventListener("click", handleClick, true);
      },
    };
  }

  onMount(function () {
    panel.addEventListener("click", (e) => {
      console.log(e.target === panel);
      /**
       * enables dismissal when clicking the backdrop, which is technically
       * a part of the dialog itself. A sub container contains the styling of the "panel"
       * and clicking inside causes this logic to be false
       */
      if (e.target === panel) {
        expanded = false;
      }
    });

    /**
     * The close function is called on escape and on the
     * containers `animationend`
     */
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
    style:--animation-name={expanded ? "slideIn" : "slideOut"}
    style:--animation-duration={expanded ? "0.6s" : "0.4s"}
    style:--animation-timing-function={expanded
      ? "cubic-bezier(0.25, 1, 0.5, 1)"
      : "ease"}>
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
      <a use:dismissPanel href="/foundations/layout/semantic-elements">Layout</a>

      <Separator />

      <a use:dismissPanel href="/foundations/typography/headings">Typography</a>

      <Separator />

      <a use:dismissPanel href="/foundations/color-light/spaces-gamuts">
        Color and light
      </a>

      <Separator />

      <a use:dismissPanel href="/foundations/forms/buttons">Forms</a>

      <Separator />

      <a use:dismissPanel href="/foundations/sizing/viewport-units">Sizing</a>
      <Separator />

      <a use:dismissPanel href="/foundations/dynamic-components/dialogs">
        Dynamic components
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

    <div class="ancillary-links">
      <a use:dismissPanel href="/release-notes" class="ancillary-link">Release notes</a>

      <a target="_blank" href="https://davidwoolf.me" class="ancillary-link">
        Made by David Woolf
      </a>
    </div>
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
    animation-name: var(--animation-name);
    animation-timing-function: var(--animation-timing-function);
    animation-duration: var(--animation-duration, 0);
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    background-color: white;
    box-shadow: -1px 0px 26px -7px rgba(15, 23, 42, 0.15);
    block-size: 100dvh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: fixed;
    inset-inline-end: 0;
    max-inline-size: 90vw;
    inline-size: 30rem;
    overflow: scroll;
    padding: 2rem;
  }

  nav {
    display: flex;
    flex: 1 0 max-content;
    flex-direction: column;
  }

  nav a,
  nav div {
    align-items: center;
    block-size: 3.5rem;
    display: flex;
    color: var(--color-gray-800);
    font-size: var(--font-size-xl);
    font-weight: 500;
    outline: none;
    transition: all 150ms ease;
  }

  nav div {
    opacity: 0.5;
  }

  nav span {
    font-size: 1rem;
    margin-inline-start: auto;
  }

  nav a:hover {
    opacity: 0.6;
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
    flex: none;
    inline-size: 3rem;
    justify-content: center;
    margin-inline-start: auto;
    outline: none;
  }

  .close-menu:focus-visible {
    box-shadow: 0 0 0 2px white, 0 0 0 4px rgba(198, 198, 231, 0.8);
  }

  .ancillary-links {
    display: flex;
    gap: 2rem;
  }

  .ancillary-links a {
    font-size: var(--font-size-sm);
    opacity: 0.7;
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-color: var(--color-gray-300);
  }

  .ancillary-links a:hover {
    text-underline-offset: 4px;
  }

  @media (min-width: 768px) {
    .container {
      padding: 3rem;
    }

    nav {
      block-size: calc(100% - 6rem);
      margin-block-start: 3rem;
    }

    nav a,
    nav div {
      block-size: 4.5rem;
      font-size: var(--font-size-2xl);
    }
  }

  @media (prefers-reduced-motion) {
    .container {
      animation-duration: 0s;
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

  @keyframes -global-slideIn {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0px);
    }
  }

  @keyframes -global-slideOut {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(100%);
    }
  }
</style>
