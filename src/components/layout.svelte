<script>
  import Separator from "./separator.svelte";
</script>

<div class="layout">
  <header class="layout-head">
    <slot name="head" />
  </header>

  <div class="layout-separator">
    <Separator />
  </div>

  <div class="layout-contents">
    <slot name="contents" />
  </div>
</div>

<style>
  .layout {
    max-width: 84rem;
    margin: 0 auto;
  }

  .layout-head,
  .layout-contents,
  .layout-separator {
    grid-column: 1 / -1;
  }

  .layout-separator {
    margin: 3rem 0;
  }

  @media (min-width: 1024px) {
    .layout {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
    }

    .layout-head {
      text-align: center;
    }

    .layout-contents {
      align-items: center;
      display: grid;
      grid-template-columns: subgrid;
    }

    .layout-separator {
      margin: 6rem 0;
    }
  }
</style>
