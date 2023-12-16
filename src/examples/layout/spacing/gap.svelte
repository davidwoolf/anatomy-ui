<script>
  import Control from "@components/editing/control.svelte";
  import Number from "@components/editing/number.svelte";
  import Range from "@components/editing/range.svelte";
  import Example from "@components/example.svelte";
  import Card from "@components/playground/card.svelte";
  import { writable } from "svelte/store";

  let gap = writable([40]);
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card>
      <p>
        Apply gaps to containers that use flex and grid layouts. Gaps cannot be less than
        zero, therefore negative offsets still require using the margin property.
      </p>
    </Card>

    <div class="gap-highlight" style:--size="{$gap[0]}px">
      <span>gap: {$gap[0]}px</span>
    </div>

    <Card>
      <p>
        Apply gaps to containers that use flex and grid layouts. Gaps cannot be less than
        zero, therefore negative offsets still require using the margin property.
      </p>
    </Card>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Gap">
      <Range value={gap} min={10} max={60} />
    </Control>
  </svelte:fragment>
</Example>

<style>
  .gap-highlight span {
    background-color: #0138dd;
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

  .gap-highlight {
    align-items: center;
    background-color: color-mix(in srgb, #0138dd, #fff 80%);
    block-size: var(--size, 2.5rem);
    display: flex;
    justify-content: center;
    max-inline-size: 32rem;
    width: 100%;
  }
</style>
