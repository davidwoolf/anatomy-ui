<script>
  import Control from "@components/editing/control.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
  import Card from "@components/playground/card.svelte";

  let fitContent = "disabled";
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card maxWidth={fitContent === "enabled" ? "fit-content" : "max(60%, 20rem)"}>
      <p>
        Toggle the use of the fit-content keyword to see how this card responds. Here is a
        lot of additional text to show how fit-content will prevent elements from breaking
        out of their parent containers with this keyword.
      </p>
    </Card>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Fit-content">
      <Select bind:value={fitContent}>
        <option value="enabled">enabled</option>
        <option value="disabled">disabled</option>
      </Select>
    </Control>
  </svelte:fragment>
</Example>
