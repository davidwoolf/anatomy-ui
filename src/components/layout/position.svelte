<script>
  import Control from "@components/editing/control.svelte";
  import Controls from "@components/editing/controls.svelte";
  import ExampleText from "@components/example-text.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
  import AttributeCode from "@components/attribute-code.svelte";
  import NumberGroup from "@components/editing/number-group.svelte";
</script>

<Example>
  <svelte:fragment slot="preview">preview</svelte:fragment>

  <div slot="description">
    <h2>Static, relative and absolute positioning</h2>

    <ExampleText>
      The the default value of the position property is
      <AttributeCode>static</AttributeCode>, which ignores the top, bottom, left, right,
      and inset values. It also ignores any applied <AttributeCode>z-index</AttributeCode>
      value.
    </ExampleText>

    <ExampleText>
      Using a value of <AttributeCode>relative</AttributeCode> will move the element relative
      to its current position, but without affecting other items around it. In contrast, using
      <AttributeCode>absolute</AttributeCode> will move the element relative to the nearest
      ancestor that has <AttributeCode>position: relative</AttributeCode>. If no ancestor
      has this value, the element will be placed relavite to the entire window.
    </ExampleText>

    <Controls>
      <Control label="Position">
        <Select>
          <option value="static">static</option>
        </Select>
      </Control>
      <Control label="Offsets">
        <NumberGroup
          value={[0, 0, 0, 0]}
          onChange={(value) => {
            console.log(value);
          }} />
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
