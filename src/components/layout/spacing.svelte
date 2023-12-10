<script>
  import AttributeCode from "@components/attribute-code.svelte";
  import Control from "@components/editing/control.svelte";
  import Controls from "@components/editing/controls.svelte";
  import Number from "@components/editing/number.svelte";
  import ExampleText from "@components/example-text.svelte";
  import Example from "@components/example.svelte";
  import Card from "@components/playground/card.svelte";

  /**
   *
   * @param {number} value
   * @param {number} min
   * @param {number} max
   */
  function clampValue(value, min, max) {
    if (value < min) {
      return min;
    }

    if (value > max) {
      return max;
    }

    return value;
  }

  let padding = 40;
  let renderedPadding = 40;
  let margin = 40;
  let renderedMargin = 40;
  let gap = 40;
  let renderedGap = 40;

  $: renderedPadding = clampValue(padding, 10, 60);
  $: renderedMargin = clampValue(margin, 10, 100);
  $: renderedGap = clampValue(gap, 10, 100);
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card padding="{renderedPadding}px">
      <div class="padding-highlight padding-top" style:--size="{renderedPadding}px">
        <span>padding {renderedPadding}px</span>
      </div>

      <div class="padding-highlight padding-left" style:--size="{renderedPadding}px">
        <span>padding {renderedPadding}px</span>
      </div>

      <div class="padding-highlight padding-right" style:--size="{renderedPadding}px">
        <span>padding {renderedPadding}px</span>
      </div>

      <div class="padding-highlight padding-bottom" style:--size="{renderedPadding}px">
        <span>padding {renderedPadding}px</span>
      </div>

      <h2>This card has padding</h2>

      <p>
        Base components sometimes need to handle padding, especially when visual
        properties like background colors, borders, and shadows are applied.
      </p>
    </Card>
  </svelte:fragment>

  <div slot="description">
    <h2>Padding</h2>

    <ExampleText>
      The <AttributeCode>padding</AttributeCode> property affects the interior layout of an
      element. Avoid adding padding to base components that don't visually require it.
    </ExampleText>

    <Controls>
      <Control label="Padding">
        <Number bind:value={padding} min={10} max={60} />
      </Control>
    </Controls>
  </div>
</Example>

<Example reversed>
  <svelte:fragment slot="preview">
    <Card>
      <h2>This card’s parent has margins</h2>

      <p>
        Avoid applying margins to base components. Instead, set it on a layout components
        that wrap your base components.
      </p>
    </Card>

    <div class="margin-highlight" style:--size="{renderedMargin}px">
      <span>margin: {renderedMargin}px</span>
    </div>

    <Card>
      <h2>This card’s parent has margins</h2>

      <p>
        It's highly recommended that margin is applied from one direction per axis–usually
        the top and left.
      </p>
    </Card>
  </svelte:fragment>

  <div slot="description">
    <h2>Margin</h2>

    <ExampleText>
      The <AttributeCode>margin</AttributeCode> property affects the exterior spacing around
      an element. When using margin to control spacing, apply values from one axis direction
      (usually the top and/or left).
    </ExampleText>

    <Controls>
      <Control label="Margin">
        <Number bind:value={margin} min={10} max={100} />
      </Control>
    </Controls>
  </div>
</Example>

<Example>
  <svelte:fragment slot="preview">
    <Card>
      <h2>This card’s parent has gaps</h2>

      <p>Apply gaps to containers that use flex and grid layouts.</p>
    </Card>

    <div class="gap-highlight" style:--size="{renderedGap}px">
      <span>gap: {renderedGap}px</span>
    </div>

    <Card>
      <h2>This card’s parent has gaps</h2>

      <p>
        Gaps cannot be less than zero, therefore negative offsets still require using the
        margin property.
      </p>
    </Card>
  </svelte:fragment>

  <div slot="description">
    <h2>Gap</h2>

    <ExampleText>
      The <AttributeCode>gap</AttributeCode> property adds consistent space between elements
      in a flex or grid container. Additional properties <AttributeCode
        >column-gap</AttributeCode> and
      <AttributeCode>row-gap</AttributeCode> are available for more customizable spacing on
      the block and inline axes.
    </ExampleText>
    <ExampleText>
      The gap property can not be less than <AttributeCode>0</AttributeCode>, so using
      margin may be required in those situations.
    </ExampleText>

    <Controls>
      <Control label="Gap">
        <Number bind:value={gap} min={0} max={50} />
      </Control>
    </Controls>
  </div>
</Example>

<style>
  .padding-highlight {
    align-items: center;
    background-color: color-mix(in srgb, #9747ff, #fff 80%);
    display: flex;
    justify-content: center;
    position: absolute;
    transition: all 0.5s ease;
  }

  .padding-highlight span,
  .margin-highlight span,
  .gap-highlight span {
    background-color: #9747ff;
    border-radius: 0.25rem;
    color: white;
    display: block;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    font-size: 0.625rem;
    font-weight: 500;
    padding: 0.125rem 0.25rem;
    min-width: max-content;
  }

  .margin-highlight span {
    background-color: #047857;
  }

  .gap-highlight span {
    background-color: #0138dd;
  }

  .padding-top {
    block-size: var(--size, 2.5rem);
    inset-inline-start: 0;
    inset-inline-end: 0;
    inset-block-start: 0;
  }

  .padding-bottom {
    block-size: var(--size, 2.5rem);
    inset-inline-start: 0;
    inset-inline-end: 0;
    inset-block-end: 0;
  }

  .padding-left {
    inline-size: var(--size, 2.5rem);
    inset-block-start: 0;
    inset-block-end: 0;
    inset-inline-start: 0;
  }

  .padding-left span {
    transform: rotate(-90deg);
  }

  .padding-right {
    inline-size: var(--size, 2.5rem);
    inset-block-start: 0;
    inset-block-end: 0;
    inset-inline-end: 0;
  }

  .padding-right span {
    transform: rotate(90deg);
  }

  .margin-highlight,
  .gap-highlight {
    align-items: center;
    background-color: color-mix(in srgb, #047857, #fff 80%);
    block-size: var(--size, 2.5rem);
    display: flex;
    justify-content: center;
    max-inline-size: 32rem;
    transition: all 0.5s ease;
    width: 100%;
  }

  .gap-highlight {
    background-color: color-mix(in srgb, #0138dd, #fff 80%);
  }
</style>
