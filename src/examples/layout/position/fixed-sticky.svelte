<script>
  import Control from "@components/editing/control.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";

  let fixedSticky = "sticky";
</script>

<Example offset>
  <svelte:fragment slot="preview">
    <div class="sticky-fixed">
      <iframe
        loading="lazy"
        src="/examples/layout/position/sticky-fixed?type={fixedSticky}"
        title="Card showing sticky and fixed positions" />
    </div>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Position">
      <Select bind:value={fixedSticky}>
        <option value="fixed">fixed</option>
        <option value="sticky">sticky</option>
      </Select>
    </Control>
  </svelte:fragment>
</Example>

<style>
  .sticky-fixed {
    aspect-ratio: 4 / 3;
    inline-size: 100%;
    position: relative;
  }

  @media (min-width: 1024px) {
    .sticky-fixed {
      block-size: 100%;
      inline-size: 100%;
    }
  }

  .sticky-fixed iframe {
    background-color: white;
    block-size: calc(100% - 4px);
    border-radius: 0.5rem;
    box-shadow: 0px 1px 3px 0px rgba(4, 120, 87, 0.1);
    inline-size: 100%;
    inset: 0 0 4px 0;
    overflow: scroll;
    position: absolute;
  }
</style>
