<script>
  import Control from "@components/editing/control.svelte";
  import Controls from "@components/editing/controls.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";
  import ExampleText from "@components/example-text.svelte";

  let writingMode = "horizontal-tb";
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="axes" style:--writingMode={writingMode}>
      <div class="axis-boundary block-start" />
      <div class="axis-boundary block-end" />
      <div class="axis-boundary inline-start" />
      <div class="axis-boundary inline-end" />

      <div class="block-axis">
        <span>block axis start</span>
      </div>

      <div class="inline-axis">
        <span>inline axis start</span>
      </div>

      <div class="circle" inert aria-hidden />
    </div>
  </svelte:fragment>

  <div slot="description">
    <ExampleText>
      In English, text flows from left to right, and top to bottom. The <strong
        >block axis</strong>
      is the vertical axis starting from the top, while the <strong>inline axis</strong> is
      the horizontal axis starting from the left.
    </ExampleText>

    <ExampleText>
      Changing the writing direction will augment these values, but they are relationally
      tied together. Both the start and end point of axes (along with the axes themselves)
      can be flipped, but they will always be opposite of each other.
    </ExampleText>

    <Controls label="Change settings to see how the axes are affected:">
      <Control label="Writing mode">
        <Select bind:value={writingMode}>
          <option value="horizontal-tb">horizontal</option>
          <option value="vertical-lr">vertical — left to right</option>
          <option value="vertical-rl">vertical — right to left</option>
        </Select>
      </Control>
    </Controls>
  </div>
</Example>

<style>
  .axes {
    block-size: max(60%, 8rem);
    inline-size: max(60%, 8rem);
    position: relative;
    writing-mode: var(--writingMode, inherit);
  }

  .axis-boundary {
    background-color: #9747ff;
    position: absolute;
  }

  .axis-boundary.block-start {
    block-size: 1px;
    inset-block-start: 1.5rem;
    inset-inline: -1.5rem;
  }

  .axis-boundary.block-end {
    block-size: 1px;
    inset-block-end: 1.5rem;
    inset-inline: -1.5rem;
  }

  .axis-boundary.inline-start {
    inset-inline-start: 1.5rem;
    inset-block: -1.5rem;
    inline-size: 1px;
  }

  .axis-boundary.inline-end {
    inset-inline-end: 1.5rem;
    inset-block: -1.5rem;
    inline-size: 1px;
  }

  span {
    background: white;
    border: 1px solid #9747ff;
    border-radius: 0.25rem;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    color: #9747ff;
    content: "block axis";
    display: block;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1;
    padding: 0.5rem 0.75rem;
    text-align: center;
    min-inline-size: max-content;
  }

  .block-axis {
    border-inline-end: 1px dashed #9747ff;
    inset-inline-start: 50%;
    inset-block: 3rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    inline-size: 1px;
  }

  .block-axis span {
    margin-block-start: 1rem;
  }

  .inline-axis {
    align-items: center;
    border-block-end: 1px dashed #9747ff;
    block-size: 1px;
    display: flex;
    inset-block-start: 50%;
    inset-inline: 3rem;
    position: absolute;
  }

  .inline-axis span {
    margin-inline-start: 1rem;
  }
</style>
