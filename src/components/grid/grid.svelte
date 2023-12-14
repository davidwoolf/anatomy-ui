<div>
  <slot />
</div>

<style>
  div {
    display: grid;

    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    div {
      grid-auto-flow: dense;
      grid-template-columns: subgrid;
      grid-column: 1 / -1;
      row-gap: 0;
    }
  }
</style>
