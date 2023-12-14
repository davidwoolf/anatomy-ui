<div>
  <slot />
</div>

<style>
  div {
    place-items: end stretch;
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
    grid-auto-flow: dense;
  }
</style>
