<script>
  import Control from "@components/editing/control.svelte";
  import Select from "@components/editing/select.svelte";
  import Example from "@components/example.svelte";
  import Animations from "../../../routes/examples/layout/layout-shift/animations.svelte";
  let reloadAnimations = false;
  let enabledTransformAnimations = "enabled";

  // hacky way to remount a component
  $: {
    if (enabledTransformAnimations) {
      reloadAnimations = true;

      setTimeout(() => {
        reloadAnimations = false;
      });
    }
  }
</script>

<Example>
  <svelte:fragment slot="preview">
    {#if !reloadAnimations}
      <Animations enabled={enabledTransformAnimations === "enabled" ? true : false} />
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Transform animations">
      <Select bind:value={enabledTransformAnimations}>
        <option value="enabled">enabled</option>
        <option value="disabled">disabled</option>
      </Select>
    </Control>
  </svelte:fragment>
</Example>
