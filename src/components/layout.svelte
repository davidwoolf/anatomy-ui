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
  }

  .layout-separator {
    margin: 3rem 0;
  }

  @media (min-width: 768px) {
    .layout-head {
      text-align: center;
    }
  }

  @media (min-width: 1280px) {
    .layout {
    }

    .layout-contents {
      align-items: center;
    }

    .layout-separator {
      margin: 6rem 0;
    }
  }
</style>
