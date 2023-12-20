<div>
  <slot />
</div>

<style>
  div {
    display: grid;
    row-gap: 0.75rem;
    grid-template-columns: 100%;
    width: 100%;
  }

  @media (min-width: 1280px) {
    div {
      grid-auto-flow: dense;
      grid-template-columns: subgrid;
      grid-column: 1 / -1;
      row-gap: 0;
    }
  }
</style>
