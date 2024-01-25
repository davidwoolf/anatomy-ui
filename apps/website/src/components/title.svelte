<h1>
  <slot />
</h1>

<style>
  h1 {
    font-size: var(--font-size-5xl);
    letter-spacing: -0.01em;
    line-height: 1;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--font-size-6xl);
    }
  }
</style>
