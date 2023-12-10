<script>
  import Control from "@components/editing/control.svelte";
  import Controls from "@components/editing/controls.svelte";
  import ExampleText from "@components/example-text.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
  import Number from "@components/editing/number.svelte";
  import AttributeCode from "@components/attribute-code.svelte";
  import Card from "@components/playground/card.svelte";

  let minWidth = 240;
  let maxWidth = 320;
  let maxContent = "disabled";
  let minContent = "disabled";
  let fitContent = "disabled";
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card {minWidth} {maxWidth}>
      <h2>Change the bounds</h2>
      <p>Update the minimum and maximum width values to see how this card responds.</p>
    </Card>
  </svelte:fragment>

  <div slot="description">
    <h2>Setting upper and lower bounds</h2>
    <ExampleText
      >Use max-height, max-width, min-height, and min-width to set upper and lower
      constraints on an element’s dimensions. When using both constraints, the minimum
      value will be used over the maximum value if its larger.</ExampleText>

    <Controls>
      <Control label="Minimum width">
        <Number bind:value={minWidth} />
      </Control>

      <Control label="Maximum width">
        <Number bind:value={maxWidth} />
      </Control>
    </Controls>
  </div>
</Example>

<Example reversed>
  <svelte:fragment slot="preview">
    <Card minWidth={maxContent === "enabled" ? "max-content" : "none"}>
      <h2>Change the bounds</h2>
      <p>
        Toggle the use of the max-content keyword to see how this card responds. Here is a
        lot of additional text to show how elements can break out of their parent
        containers with this keyword.
      </p>
    </Card>
  </svelte:fragment>

  <div slot="description">
    <h2>Intrinsic keywords: max-content</h2>
    <ExampleText>
      The <AttributeCode>max-content</AttributeCode> value represents the maximum theoretical
      size based on the property and content. Think of a line a text: the maximum theoretical
      width is the width when the text doesn’t have to wrap to a new line. Be careful with
      max-content as it will cause elements to break out of their containing box.
    </ExampleText>

    <Controls>
      <Control label="Max-content keyword">
        <Select bind:value={maxContent}>
          <option value="enabled">enabled</option>
          <option value="disabled">disabled</option>
        </Select>
      </Control>
    </Controls>
  </div>
</Example>

<Example>
  <svelte:fragment slot="preview">
    <Card maxWidth={minContent === "enabled" ? "min-content" : "32rem"}>
      <h2>Change the bounds</h2>
      <p>Toggle the use of the min-content keyword to see how this card responds.</p>
    </Card>
  </svelte:fragment>

  <div slot="description">
    <h2>Intrinsic keywords: min-content</h2>
    <ExampleText>
      The <AttributeCode>min-content</AttributeCode> value represents the minimum theoretical
      size without distorting the content. For a line of text, this would be the largest width
      of a single word. Note that this doesn’t mean one word per line; if two subsequent words
      are smaller in width than the largest word, they will sit on the same line.
    </ExampleText>

    <Controls>
      <Control label="Min-content keyword">
        <Select bind:value={minContent}>
          <option value="enabled">enabled</option>
          <option value="disabled">disabled</option>
        </Select>
      </Control>
    </Controls>
  </div>
</Example>

<Example reversed>
  <svelte:fragment slot="preview">
    <Card maxWidth={fitContent === "enabled" ? "fit-content" : "32rem"}>
      <h2>Change the bounds</h2>
      <p>
        Toggle the use of the fit-content keyword to see how this card responds. Here is a
        lot of additional text to show how fit-content will prevent elements from breaking
        out of their parent containers with this keyword.
      </p>
    </Card>
  </svelte:fragment>

  <div slot="description">
    <h2>Intrinsic keywords: fit-content</h2>
    <ExampleText>
      The <AttributeCode>fit-content</AttributeCode> value uses a combination of <AttributeCode
        >min-content</AttributeCode> and <AttributeCode>max-content</AttributeCode>,
      filling up to the container if necessary, but stopping beforehand if the content is
      smaller than the container.
    </ExampleText>

    <Controls>
      <Control label="Fit-content keyword">
        <Select bind:value={fitContent}>
          <option value="enabled">enabled</option>
          <option value="disabled">disabled</option>
        </Select>
      </Control>
    </Controls>
  </div>
</Example>
