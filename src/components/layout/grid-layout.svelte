<script>
  import Control from "@components/editing/control.svelte";
  import Controls from "@components/editing/controls.svelte";
  import ExampleText from "@components/example-text.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
</script>

<Example>
  <svelte:fragment slot="preview">preview</svelte:fragment>

  <div slot="description">
    <Controls>
      <Control label="Item">
        <Select on:change={(e) => {}}>
          <option value="value">value</option>
        </Select>
      </Control>
    </Controls>

    <ExampleText>text</ExampleText>
  </div>
</Example>
