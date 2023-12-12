<script>
  import Control from "@components/editing/control.svelte";
  import ExampleText from "@components/example-text.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
  import AttributeCode from "@components/attribute-code.svelte";
  import Card from "@components/playground/card.svelte";
  import Number from "@components/editing/number.svelte";
</script>

<Example>
  <svelte:fragment slot="preview">preview</svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Position" />

    <Control label="Offset" />
  </svelte:fragment>

  <div slot="description">
    <h2>Rules</h2>

    <ExampleText>
      In order for <AttributeCode>z-index</AttributeCode> to have any affect, an element must
      have a <AttributeCode>position</AttributeCode> value other than
      <AttributeCode>static</AttributeCode>, or the element must be a direct descendant of
      a flex or grid container.
    </ExampleText>

    <ExampleText>
      Stack values are scoped to the nearest ancestor that includes a valid
      <AttributeCode>position</AttributeCode> property, meaning that they can’t be positioned
      higher or lower than that ancestor’s position. Confusingly, this doesn't apply to flex
      or grid layout descendants don't conform to this rule, so be careful applying `z-index`
      in those containers.
    </ExampleText>
  </div>
</Example>

<Example reversed>
  <svelte:fragment slot="preview">
    <h2>Tie stacking values to specific UI contexts</h2>
    - For document level elements, apply `z-index` using values like `10`, `20`, `30`, etc.
    - For localized values in a parent stack context, use `1`, `2`, `3`, etc. - For temporary,
    blocking content such as dialogs, use a reserved value like `100`

    <h2>Eliminate unnecessary declarations</h2>

    For two items in a stacking context, only apply a `z-index` value (greater than `0`)
    to the one on top. For example, if you are making a sticky header that covers the main
    content: It may seem odd to apply `position: relative` to the `
    <main>
      ` element, but it will prevent stacking bugs with `z-index` values declared on
      descendant elements. In addition, if you have a stylist element in a component,
      meant to go behind the rest of the content, create a local stacking context and use
      `z-index: -1` on just the style element:
    </main>

    <h2>Decouple blocking UI</h2>

    ne of the nastiest stacking issues involves displaying a blocking dialog (such as a
    modal), which is declared in a local stack context. Avoid this altogether by using
    JavaScript to insert this type of content at the very bottom of the DOM when
    presented, and removing it when dismissed.
  </svelte:fragment>

  <svelte:fragment slot="preview-controls" />

  <div slot="description">
    <h2>Strategies</h2>

    <ExampleText>
      The <AttributeCode>z-index</AttributeCode> value can be zero, any negative number, or
      any positive number. This creates issues where elements compete with each other by setting
      high values like 9999999999 to ensure they are at the top of the stack. To avoid this,
      click through the following scenarios:
    </ExampleText>

    <ul>
      <li><button>Tie stacking values to specific UI contexts</button></li>
      <li><button>Eliminate unnecessary declarations</button></li>
      <li><button>Decouple blocking UI</button></li>
    </ul>
  </div>
</Example>

<style>
</style>
