<script>
  import Control from "@components/editing/control.svelte";

  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
  import { derived, writable } from "svelte/store";

  const externalLayout = writable("block");
  const internalLayout = writable("block");

  const containerDisplay = derived(
    [externalLayout, internalLayout],
    ([$externalLayout, $internalLayout]) => {
      if ($externalLayout === "none") {
        return "none";
      } else if ($externalLayout === "block" && $internalLayout === "block") {
        return "block";
      } else if ($externalLayout === "inline" && $internalLayout === "block") {
        return `${$externalLayout}-${$internalLayout}`;
      } else {
        return `${$externalLayout} ${$internalLayout}`;
      }
    }
  );
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="card-wrapper">
      <div style:display={$containerDisplay}>
        <div class="element">Top level element</div>
      </div>

      <div style:display={$containerDisplay}>
        <div class="element">Child element</div>

        <div class="element">Child element</div>

        <div class="element">Child element</div>
      </div>

      <div style:display={$containerDisplay}>
        <div class="element">Top level element</div>
      </div>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="controls">
    <Control label="Outside">
      <Select bind:value={$externalLayout}>
        <option value="block">block</option>
        <option value="inline">inline</option>
        <option value="none">none</option>
      </Select>
    </Control>

    <Control label="Inside">
      <Select bind:value={$internalLayout}>
        <option value="block">block</option>
        <option value="flex">flex</option>
        <option value="grid">grid</option>
      </Select>
    </Control>
  </svelte:fragment>
</Example>

<style>
  .card-wrapper {
    min-block-size: 8rem;
  }

  .element {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0px 1px 3px 0px rgba(4, 120, 87, 0.1);
    overflow: hidden;
    margin: 0.25rem;
    padding: 1rem;
    position: relative;
    width: 100%;
  }
</style>
