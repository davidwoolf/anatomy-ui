<div class="grid">
  <slot />
</div>

<style>
  .grid {
    display: grid;
    row-gap: 0.75rem;
    grid-template-columns: 100%;
    width: 100%;
  }

  @media (min-width: 1024px) {
    .grid {
      grid-auto-flow: dense;
      grid-template-columns: repeat(12, 1fr);
      row-gap: 0;
    }
  }
</style>
