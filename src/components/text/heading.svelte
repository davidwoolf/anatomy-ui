<h2>
  <slot />
</h2>

<style>
  h2 {
    font-size: var(--font-size-3xl);
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.01em;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: var(--font-size-4xl);
    }
  }
</style>
