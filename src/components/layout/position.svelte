<script>
  import Control from "@components/editing/control.svelte";
  import Controls from "@components/editing/controls.svelte";
  import ExampleText from "@components/example-text.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
  import AttributeCode from "@components/attribute-code.svelte";
  import Card from "@components/playground/card.svelte";
  import { writable } from "svelte/store";

  let starterPosition = "static";
  let starterOffset = writable([0]);

  let fixedSticky = "fixed";
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card
      position={starterPosition}
      top={starterPosition !== "static" ? "10px" : "0"}
      left={starterPosition !== "static" ? "10px" : "0"}>
      <p>
        The default value of the position property is , which ignores inset properties
        such as and , along with stacking values for the property. The default value of
        the position property is , which ignores inset properties such as and , along with
        stacking values for the property.
      </p>
    </Card>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Position">
      <Select bind:value={starterPosition}>
        <option value="static">static</option>
        <option value="relative">relative</option>
        <option value="absolute">absolute</option>
      </Select>
    </Control>
  </svelte:fragment>

  <div slot="description">
    <h2>Static, relative and absolute positioning</h2>

    <ExampleText>
      The default value of the position property is <AttributeCode>static</AttributeCode>,
      which ignores inset properties such as top and left, along with stacking values for
      the z-index property.
    </ExampleText>

    <ExampleText>
      The value <AttributeCode>relative</AttributeCode> will move the element relative to its
      current position, but without affecting other items around it.
    </ExampleText>

    <ExampleText>
      The value <AttributeCode>absolute</AttributeCode> will move the element relative to the
      nearest ancestor that has position: relative. If no ancestor has this value, the element
      will be placed relavite to the entire window.
    </ExampleText>
  </div>
</Example>

<Example reversed>
  <svelte:fragment slot="preview">preview</svelte:fragment>

  <div slot="description">
    <h2>Fixed and sticky positions</h2>

    <ExampleText>
      Applying <AttributeCode>fixed</AttributeCode> as the position property’s value will place
      the element relative to the window, regardless of any parent’s
      <AttributeCode>position: relative</AttributeCode> value. It also ignores scroll positioning.
    </ExampleText>

    <ExampleText>
      Applying <AttributeCode>sticky</AttributeCode> as the position property’s value will
      make an element act like it’s fixed once it hits the top of the viewport. The element’s
      dimensions are also calculated as part of the normal DOM, eliminating the need to calculate
      offset padding for other items. One thing to note is that sticky elements are scoped
      to the closest element with the overflow property applied.
      <sup>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/position#values"
          target="_blank">1</a>
      </sup>
    </ExampleText>

    <Controls>
      <Control label="Position">
        <Select bind:value={fixedSticky}>
          <option value="fixed">fixed</option>
          <option value="sticky">sticky</option>
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

<style>
</style>
