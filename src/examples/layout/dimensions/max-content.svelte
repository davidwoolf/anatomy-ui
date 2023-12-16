<script>
  import Control from "@components/editing/control.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
  import Card from "@components/playground/card.svelte";

  let maxContent = "disabled";
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card minWidth={maxContent === "enabled" ? "max-content" : "0px"}>
      <p>
        Toggle the use of the max-content keyword to see how this card responds. Here is a
        lot of additional text to show how elements can break out of their parent
        containers with this keyword.
      </p>
    </Card>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Max-content">
      <Select bind:value={maxContent}>
        <option value="enabled">enabled</option>
        <option value="disabled">disabled</option>
      </Select>
    </Control>
  </svelte:fragment>
</Example>
