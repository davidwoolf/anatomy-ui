<div class="layout">
  <div class="layout-title">
    <slot name="title" />
  </div>

  <div class="layout-description">
    <slot name="description" />
  </div>

  <div class="layout-contents">
    <slot name="contents" />
  </div>

  <div class="layout-aside">
    <slot name="sidebar" />
  </div>
</div>

<style>
  .layout {
    max-width: 84rem;
    margin: 0 auto;
  }

  .layout-title,
  .layout-description {
    grid-column: 1 / 9;
  }

  .layout-contents {
    grid-column: 1 / -1;
    margin: 1rem 0 0;
  }

  .layout-aside {
    align-items: center;
    display: flex;
    grid-column: 9 / -1;
    grid-row: 2;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    .layout {
      display: grid;
      grid-column-gap: 2rem;
      grid-template-columns: repeat(12, 1fr);
    }

    .layout-contents {
      align-items: center;
      display: grid;
      grid-template-columns: subgrid;
      margin: 4rem 0 0;
    }
  }

  @media (min-width: 1280px) {
    .layout {
      grid-column-gap: 4rem;
    }
  }
</style>
