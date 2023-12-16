<script>
  import Control from "@components/editing/control.svelte";
  import Select from "@components/editing/select.svelte";
  import Example from "@components/example.svelte";
  import AspectRatio from "../../../routes/examples/layout/layout-shift/aspect-ratio.svelte";
  let reloadAspectRatio = false;
  let enabledAspectRatio = "enabled";

  // hacky way to remount a component
  $: {
    if (enabledAspectRatio) {
      reloadAspectRatio = true;

      setTimeout(() => {
        reloadAspectRatio = false;
      });
    }
  }
</script>

<Example>
  <svelte:fragment slot="preview">
    {#if !reloadAspectRatio}
      <AspectRatio enabled={enabledAspectRatio === "enabled" ? true : false} />
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Aspect ratios">
      <Select bind:value={enabledAspectRatio}>
        <option value="enabled">enabled</option>
        <option value="disabled">disabled</option>
      </Select>
    </Control>
  </svelte:fragment>
</Example>
