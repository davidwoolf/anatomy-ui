<script>
  import Control from "@components/editing/control.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
  import Card from "@components/playground/card.svelte";

  let minContent = "disabled";
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card maxWidth={minContent === "enabled" ? "min-content" : "32rem"}>
      <p>Toggle the use of the min-content keyword to see how this card responds.</p>
    </Card>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Min-content">
      <Select bind:value={minContent}>
        <option value="enabled">enabled</option>
        <option value="disabled">disabled</option>
      </Select>
    </Control>
  </svelte:fragment>
</Example>
