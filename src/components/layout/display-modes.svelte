<script>
  import Control from "@components/editing/control.svelte";
  import Controls from "@components/editing/controls.svelte";
  import { safelyGetFormEventValue } from "@components/editing/form";
  import ExampleText from "@components/example-text.svelte";
  import Example from "@components/example.svelte";

  import Select from "@components/editing/select.svelte";
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="card-wrapper">example</div>
  </svelte:fragment>

  <div slot="description">
    <Controls label="Change the layout settings to see different effects">
      <Control label="External layout">
        <Select
          on:change={(e) => {
            const value = safelyGetFormEventValue(e);
            // writingMode.set(value);
          }}>
          <option value="block">block</option>
          <option value="inline">inline</option>
        </Select>
      </Control>

      <Control label="Internal layout">
        <Select
          on:change={(e) => {
            const value = safelyGetFormEventValue(e);
            // writingMode.set(value);
          }}>
          <option value="inherit">inherit</option>
          <option value="flex">flex layout</option>
          <option value="grid">grid layout</option>
        </Select>
      </Control>
    </Controls>

    <div class="settings-summary">
      <ExampleText>
        An external layout value of <strong>block</strong> will force an element onto its own
        line unless its parent element has an internal layout value of flex or grid.
      </ExampleText>

      <ExampleText>
        An internal layout of <strong>flex</strong> will force descendant elements into a flex
        layout, regardless of their own, external layout value.
      </ExampleText>
    </div>
  </div>
</Example>

<style>
  .settings-summary {
    margin-block-start: 2rem;
  }
</style>
