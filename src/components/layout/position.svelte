<script>
  import Control from "@components/editing/control.svelte";
  import ExampleText from "@components/example-text.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
  import AttributeCode from "@components/attribute-code.svelte";
  import Card from "@components/playground/card.svelte";
  import Number from "@components/editing/number.svelte";

  let starterPosition = "static";
  /** @type {string | number | null}*/
  let offset = null;
  let fixedSticky = "sticky";
</script>

<Example>
  <svelte:fragment slot="preview">
    <div
      class="absolute-relative"
      style:--aspect-ratio={starterPosition === "absolute" ? "1 / 1" : "initial"}
      style:--overflow={starterPosition === "absolute" ? "hidden" : "initial"}>
      <Card
        position={starterPosition}
        top={starterPosition !== "static" ? `${offset}px` : "unset"}
        left={starterPosition !== "static" ? `${offset}px` : "unset"}>
        <p>
          The default value of the position property is , which ignores inset properties
          such as and , along with stacking values for the property. The default value of
          the position property is , which ignores inset properties such as and , along
          with stacking values for the property.
        </p>
      </Card>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Position">
      <Select bind:value={starterPosition}>
        <option value="static">static</option>
        <option value="relative">relative</option>
        <option value="absolute">absolute</option>
      </Select>
    </Control>

    <Control label="Offset">
      <Number bind:value={offset} placeholder="0" />
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
      In contrast, the value <AttributeCode>absolute</AttributeCode> will move the element
      relative to the nearest ancestor that has position: relative. If no ancestor has this
      value, the element will be placed relavite to the entire window.
    </ExampleText>
  </div>
</Example>

<Example reversed>
  <svelte:fragment slot="preview">
    <div class="sticky-fixed">
      <iframe
        loading="lazy"
        src="/examples/layout/position/sticky-fixed?type={fixedSticky}"
        title="Card showing sticky and fixed positions" />
    </div>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Position">
      <Select bind:value={fixedSticky}>
        <option value="fixed">fixed</option>
        <option value="sticky">sticky</option>
      </Select>
    </Control>
  </svelte:fragment>

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
  </div>
</Example>

<style>
  .absolute-relative {
    aspect-ratio: var(--aspect-ratio);
    align-items: center;
    block-size: 100%;
    display: flex;
    justify-content: center;
    inline-size: 100%;
    overflow: var(--overflow);
    position: relative;
  }

  .sticky-fixed {
    aspect-ratio: 4 / 3;
    inline-size: 100%;
    position: relative;
  }

  @media (min-width: 1024px) {
    .absolute-relative {
      aspect-ratio: unset;
    }

    .sticky-fixed {
      block-size: 100%;
      inline-size: 100%;
    }
  }

  .sticky-fixed iframe {
    background-color: white;
    block-size: calc(100% - 4px);
    border-radius: 0.5rem;
    box-shadow: 0px 1px 3px 0px rgba(4, 120, 87, 0.1);
    inline-size: 100%;
    inset: 0 0 4px 0;
    overflow: scroll;
    position: absolute;
  }
</style>
