<script>
  import Control from "@components/editing/control.svelte";
  import Select from "@components/editing/select.svelte";
  import Example from "@components/example.svelte";
  import AspectRatio from "../../../routes/examples/layout/layout-shift/aspect-ratio.svelte";
  let reload = false;
  let enabled = "enabled";

  // hacky way to remount a component
  $: {
    if (enabled) {
      reload = true;

      setTimeout(() => {
        reload = false;
      });
    }
  }
</script>

<Example>
  <svelte:fragment slot="preview">
    {#if !reload}
      <AspectRatio enabled={enabled === "enabled" ? true : false} />
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Aspect ratios">
      <Select bind:value={enabled}>
        <option value="enabled">enabled</option>
        <option value="disabled">disabled</option>
      </Select>
    </Control>
  </svelte:fragment>
</Example>
