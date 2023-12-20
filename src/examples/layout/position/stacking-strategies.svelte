<script>
  import Control from "@components/editing/control.svelte";
  import Example from "@components/example.svelte";
</script>

<Example>
  <svelte:fragment slot="preview">preview</svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Position" />

    <Control label="Offset" />
  </svelte:fragment>
</Example>
