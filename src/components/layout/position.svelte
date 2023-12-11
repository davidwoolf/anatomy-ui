<script>
  import Control from "@components/editing/control.svelte";
  import Controls from "@components/editing/controls.svelte";
  import ExampleText from "@components/example-text.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
  import AttributeCode from "@components/attribute-code.svelte";
  import NumberGroup from "@components/editing/number-group.svelte";
  import Card from "@components/playground/card.svelte";

  let starterPosition = "static";
  let starterOffset = [null, null, null, null];
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card
      position={starterPosition}
      top="{starterOffset[0]}px"
      right="{starterOffset[1]}px"
      bottom="{starterOffset[2]}px"
      left="{starterOffset[3]}px">
      {#if starterPosition === "static"}
        <h2>Static position</h2>

        <p>
          The default value of the position property is
          <AttributeCode>static</AttributeCode>, which ignores inset properties such as
          <AttributeCode>top</AttributeCode> and <AttributeCode>left</AttributeCode>,
          along with stacking values for the <AttributeCode>z-index</AttributeCode>
          property.
        </p>
      {:else if starterPosition === "relative"}
        <h2>Relative position</h2>

        <p>
          Using a value of <AttributeCode>relative</AttributeCode> will move the element relative
          to its current position, but without affecting other items around it.
        </p>
      {:else if starterPosition === "absolute"}
        <h2>Absolute position</h2>

        <p>
          Using a value of <AttributeCode>absolute</AttributeCode> will move the element relative
          to the nearest ancestor that has
          <AttributeCode>position: relative</AttributeCode>. If no ancestor has this
          value, the element will be placed relavite to the entire window.
        </p>
      {/if}
    </Card>
  </svelte:fragment>

  <div slot="description">
    <h2>Static, relative and absolute positioning</h2>

    <ExampleText>
      The <AttributeCode>position</AttributeCode> property accepts multiple values, including
      <AttributeCode>static</AttributeCode> (the default),
      <AttributeCode>relative</AttributeCode>, and
      <AttributeCode>absolute</AttributeCode>.
    </ExampleText>

    <ExampleText>
      Change the position and offset values below to see how the card reacts.
    </ExampleText>

    <Controls label="Change the position and offsets">
      <Control label="Position">
        <Select bind:value={starterPosition}>
          <option value="static">static</option>
          <option value="relative">relative</option>
          <option value="absolute">absolute</option>
        </Select>
      </Control>
      <Control label="Offsets">
        <NumberGroup min={-100} max={100} bind:value={starterOffset} />
      </Control>
    </Controls>
  </div>
</Example>

<Example reversed>
  <svelte:fragment slot="preview">preview</svelte:fragment>

  <div slot="description">
    <h2>Fixed and sticky positions</h2>

    <ExampleText />

    <Controls>
      <Control label="Item">
        <Select>
          <option value="value">value</option>
        </Select>
      </Control>
    </Controls>
  </div>
</Example>

<Example>
  <svelte:fragment slot="preview">preview</svelte:fragment>

  <div slot="description">
    <h2>Stacking elements</h2>

    <ExampleText />

    <Controls>
      <Control label="Item">
        <Select>
          <option value="value">value</option>
        </Select>
      </Control>
    </Controls>
  </div>
</Example>
