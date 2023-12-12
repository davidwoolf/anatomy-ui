<div class="layout--description">
  <slot />
</div>

<style>
  .layout--description {
    border-block-end: 1px solid var(--color-gray-200);
    color: color-mix(in srgb, var(--color-gray-800), white 30%);
    margin: 0.75rem -1.5rem 0 0;
    padding: 0 1.5rem 3rem 0;
    font-size: var(--font-size-md);
    line-height: 145%;
  }

  @media (min-width: 768px) {
    .layout--description {
      margin: 1.5rem 0 0;
      font-size: var(--font-size-xl);
    }
  }

  @media (min-width: 1024px) {
    .layout--description {
      border: none;
      padding: 0;
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
