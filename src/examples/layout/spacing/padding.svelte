<script>
  import Control from "@components/editing/control.svelte";
  import Number from "@components/editing/number.svelte";
  import Range from "@components/editing/range.svelte";
  import Example from "@components/example.svelte";
  import Card from "@components/playground/card.svelte";
  import { writable } from "svelte/store";

  let padding = writable([40]);
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card position="relative" padding="{$padding[0]}px">
      <div class="padding-highlight padding-top" style:--size="{$padding[0]}px">
        <span>padding {$padding[0]}px</span>
      </div>

      <div class="padding-highlight padding-left" style:--size="{$padding[0]}px">
        <span>padding {$padding[0]}px</span>
      </div>

      <div class="padding-highlight padding-right" style:--size="{$padding[0]}px">
        <span>padding {$padding[0]}px</span>
      </div>

      <div class="padding-highlight padding-bottom" style:--size="{$padding[0]}px">
        <span>padding {$padding[0]}px</span>
      </div>

      <p>
        Base components sometimes need to handle padding, especially when visual
        properties like background colors, borders, and shadows are applied.
      </p>
    </Card>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Padding">
      <Range value={padding} min={10} max={60} />
    </Control>
  </svelte:fragment>
</Example>

<style>
  .padding-highlight {
    align-items: center;
    background-color: color-mix(in srgb, #9747ff, #fff 80%);
    display: flex;
    justify-content: center;
    position: absolute;
  }

  .padding-highlight span {
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
</style>
