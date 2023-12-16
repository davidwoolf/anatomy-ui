<script>
  import Control from "@components/editing/control.svelte";
  import Number from "@components/editing/number.svelte";
  import Range from "@components/editing/range.svelte";
  import Example from "@components/example.svelte";
  import Card from "@components/playground/card.svelte";
  import { writable } from "svelte/store";

  let margin = writable([40]);
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card>
      <p>
        Avoid applying margins to base components. Instead, set it on a layout components
        that wrap your base components.
      </p>
    </Card>

    <div class="margin-highlight" style:--size="{$margin[0]}px">
      <span>margin: {$margin[0]}px</span>
    </div>

    <Card>
      <p>
        It's highly recommended that margin is applied from one direction per axis–usually
        the top and left.
      </p>
    </Card>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Margin">
      <Range value={margin} min={10} max={60} />
    </Control>
  </svelte:fragment>
</Example>

<style>
  .margin-highlight span {
    background-color: #047857;
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

  .margin-highlight {
    align-items: center;
    background-color: color-mix(in srgb, #047857, #fff 80%);
    block-size: var(--size, 2.5rem);
    display: flex;
    justify-content: center;
    max-inline-size: 32rem;
    width: 100%;
  }
</style>
