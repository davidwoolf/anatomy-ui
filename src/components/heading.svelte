<h2>
  <slot />
</h2>

<style>
  h2 {
    font-size: var(--font-size-xl);
    font-weight: bold;
    margin: 0.75rem 0 -0.25rem;
  }

  @media (min-width: 768px) {
    h2 {
      /* font-size: 1.5rem; */
      margin: 1.5rem 0 -1rem;
    }
  }
</style>
