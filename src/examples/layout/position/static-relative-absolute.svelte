<script>
  import Control from "@components/editing/control.svelte";
  import Select from "@components/editing/select.svelte";
  import Example from "@components/example.svelte";
  import Card from "@components/playground/card.svelte";
  import Number from "@components/editing/number.svelte";

  let starterPosition = "static";
  /** @type {string | number | null}*/
  let offset = null;
</script>

<Example offset>
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

  @media (min-width: 1024px) {
    .absolute-relative {
      aspect-ratio: unset;
    }
  }
</style>
