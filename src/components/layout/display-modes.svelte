<script>
  import Control from "@components/editing/control.svelte";
  import Controls from "@components/editing/controls.svelte";
  import ExampleText from "@components/example-text.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
  import { derived, writable } from "svelte/store";
  import AttributeCode from "@components/attribute-code.svelte";

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

  <div slot="description">
    <Controls label="Change the layout settings to see different effects">
      <Control label="External layout">
        <Select bind:value={$externalLayout}>
          <option value="block">block</option>
          <option value="inline">inline</option>
          <option value="none">none</option>
        </Select>
      </Control>

      <Control label="Internal layout">
        <Select bind:value={$internalLayout}>
          <option value="block">block</option>
          <option value="flex">flex</option>
          <option value="grid">grid</option>
        </Select>
      </Control>
    </Controls>

    <div class="settings-summary">
      {#if $externalLayout === "block"}
        <ExampleText>
          In non-flex or grid layouts, an external layout value of <AttributeCode
            >block</AttributeCode> will force an element onto its own line.
        </ExampleText>
      {:else if $externalLayout === "none"}
        <ExampleText>
          An external layout value of <AttributeCode>none</AttributeCode> will hide an element
          completely and remove its dimension sizing from the document.
        </ExampleText>
      {:else if $externalLayout === "inline"}
        <ExampleText>
          In non-flex or grid layouts, an external layout value of <AttributeCode
            >inline</AttributeCode> will slot an element nto the same line as another inline
          element.
        </ExampleText>
      {/if}

      {#if $internalLayout === "block"}
        <ExampleText>
          An internal layout of <AttributeCode>block</AttributeCode> allows descendant elements
          to control their own, external layout value.
        </ExampleText>
      {:else if $internalLayout === "flex"}
        <ExampleText>
          An internal layout of <AttributeCode>flex</AttributeCode> will force descendant elements
          into a flex layout, regardless of their own, external layout value.
        </ExampleText>
      {:else if $internalLayout === "grid"}
        <ExampleText>
          An internal layout of <AttributeCode>grid</AttributeCode> will force descendant elements
          into a grid layout, regardless of their own, external layout value.
        </ExampleText>
      {/if}
    </div>
  </div>
</Example>

<style>
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
  .settings-summary {
    margin-block-start: 2rem;
  }
</style>
