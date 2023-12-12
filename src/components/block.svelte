<script lang="ts">
  export let active: boolean;
  export let tag: string;
</script>

<div class="container" style:--display={active ? "flex" : "hidden"}>
  <div class="contents">
    <h2>the <span>&lt;{tag}&gt;</span> element</h2>
    <slot />
  </div>

  <div class="overflow-background" inert />
</div>

<style>
  .container {
    border: 1px solid color-mix(in srgb, var(--color-purple-400), white 90%);
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    display: flex;
    flex: 1 0;
    inline-size: 91.666667%;
    max-block-size: 24rem;
    margin-inline-start: 0.5rem;
    overflow: hidden;
    position: relative;
    scroll-snap-align: start;
  }

  .contents {
    overflow: scroll;
    padding: 2rem;
  }

  .contents h2 {
    font-size: var(--font-size-lg);
    font-weight: 700;
  }

  .contents h2 span {
    color: var(--color-purple-400);
    font-family: var(--font-mono);
    font-size: 600;
  }

  @media (min-width: 640px) {
    .container {
      display: var(--display, flex);
      inline-size: auto;
      max-block-size: 20rem;
    }
  }

  :global(.container p, .container ul) {
    color: color-mix(in srgb, var(--color-gray-800), white 20%);
    font-size: var(--font-size-base);
    margin-block-start: 0.75rem;
  }

  :global(.container ul) {
    list-style: disc;
    list-style-position: inside;
  }

  :global(.container p a) {
    text-decoration: underline;
    transition: all 75ms ease;
  }

  :global(.container p a:hover) {
    color: var(--color-yellow-400);
  }

  :global(.container p code) {
    background-color: color-mix(in srgb, var(--color-purple-400), white 90%);
    border-radius: 0.125rem;
    color: var(--color-purple-400);
    font-family: var(--font-mono);
    font-size: var(--font-size-sm);
    font-weight: 600;
    padding: 0.125rem;
  }

  .overflow-background {
    background: linear-gradient(to top, white, rgb(255 255 255 / 0));
    block-size: 2rem;
    inset-block-end: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;
    position: absolute;
  }
</style>
