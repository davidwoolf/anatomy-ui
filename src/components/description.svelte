<div class="layout--description">
  <slot />
</div>

<style>
  .layout--description {
    color: color-mix(in srgb, var(--color-gray-800), white 40%);
    margin: 0.75rem auto 0;
    font-size: var(--font-size-lg);
    line-height: 145%;
    max-inline-size: 54rem;
    text-wrap: balance;
  }

  @media (min-width: 768px) {
    .layout--description {
      margin: 1.5rem auto 0;
      font-size: var(--font-size-xl);
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
