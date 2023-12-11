<div class="layout--description">
  <slot />
</div>

<style>
  .layout--description {
    color: color-mix(in srgb, var(--color-gray-800), white 20%);
    margin: 0.5rem 0 0;
    font-size: var(--font-size-lg);
  }

  @media (min-width: 1024px) {
    .layout--description {
      margin: 1.5rem 0 0;
      /* font-size: 1.3125rem; */
    }
  }

  :global(.layout--description a) {
    text-decoration-color: color-mix(in srgb, var(--color-gray-800), white 70%);
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
    text-decoration: underline;
    transition: all 0.2s ease;
  }

  :global(.layout--description a:hover) {
    text-decoration-color: var(--color-purple-400);
  }
</style>
