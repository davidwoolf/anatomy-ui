<div class="layout">
  <div class="col-start-1">
    <slot name="title" />
  </div>

  <div class="col-start-1">
    <slot name="description" />
  </div>

  <div class="col-span-2 layout-contents">
    <slot name="contents" />
  </div>

  <div class="col-start-2 row-start-2 flex items-center justify-center">
    <slot name="sidebar" />
  </div>
</div>

<style>
  .layout {
    max-width: 96rem;
    margin: 0 auto;
  }

  .layout-contents {
    margin: 1rem 0 0;
  }

  @media (min-width: 1024px) {
    .layout {
      display: grid;
      grid-template-columns: 32rem 1fr;
    }

    .layout-contents {
      align-items: center;
      display: grid;
      grid-template-columns: subgrid;
      margin: 4rem 0 0;
    }
  }

  @media (min-width: 1152px) {
    .layout {
      grid-template-columns: 40rem 1fr;
    }
  }

  @media (min-width: 1376px) {
    .layout {
      grid-template-columns: 48rem 1fr;
    }
  }
</style>
