<script>
  import Control from "@components/editing/control.svelte";
  import Example from "@components/example.svelte";
  import Number from "@components/editing/number.svelte";
  import Card from "@components/playground/card.svelte";

  /** @type {number | null} */
  let minWidth = null;
  /** @type {number | null} */
  let maxWidth = null;
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card minWidth="{minWidth}px" maxWidth="{maxWidth ?? 640}px">
      <p>
        Use max-height, max-width, min-height, and min-width to set upper and lower
        constraints on an element’s dimensions. When using both constraints, the minimum
        value will be used over the maximum value if its larger.
      </p>
    </Card>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Min width">
      <Number bind:value={minWidth} placeholder="120" />
    </Control>

    <Control label="Max width">
      <Number bind:value={maxWidth} placeholder="320" />
    </Control>
  </svelte:fragment>
</Example>
