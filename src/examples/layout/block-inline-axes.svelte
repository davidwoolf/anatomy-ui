<script>
  import Control from "@components/editing/control.svelte";
  import Example from "@components/example.svelte";
  import Select from "@components/editing/select.svelte";

  let writingMode = "horizontal-tb";
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="axes-container">
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
    </div>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <Control label="Writing mode">
      <Select bind:value={writingMode}>
        <option value="horizontal-tb">horizontal</option>
        <option value="vertical-lr">vertical — left to right</option>
        <option value="vertical-rl">vertical — right to left</option>
      </Select>
    </Control>
  </svelte:fragment>
</Example>

<style>
  .axes-container {
    aspect-ratio: 4 / 3;
    inline-size: 100%;
    padding: 1rem;
  }
  .axes {
    block-size: 100%;
    inline-size: 100%;
    position: relative;
    writing-mode: var(--writingMode, inherit);
  }

  .axis-boundary {
    background-color: #9747ff;
    position: absolute;
  }

  .axis-boundary.block-start {
    block-size: 1px;
    inset-block-start: 1rem;
    inset-inline: -1rem;
  }

  .axis-boundary.block-end {
    block-size: 1px;
    inset-block-end: 1rem;
    inset-inline: -1rem;
  }

  .axis-boundary.inline-start {
    inset-inline-start: 1rem;
    inset-block: -1rem;
    inline-size: 1px;
  }

  .axis-boundary.inline-end {
    inset-inline-end: 1rem;
    inset-block: -1rem;
    inline-size: 1px;
  }

  @media (min-width: 768px) {
    .axes-container {
      aspect-ratio: unset;
      block-size: max(80%, 8rem);
      inline-size: max(80%, 8rem);
      padding: 0;
    }

    .axis-boundary.block-start {
      inset-block-start: 1.5rem;
      inset-inline: -1.5rem;
    }

    .axis-boundary.block-end {
      inset-block-end: 1.5rem;
      inset-inline: -1.5rem;
    }

    .axis-boundary.inline-start {
      inset-inline-start: 1.5rem;
      inset-block: -1.5rem;
    }

    .axis-boundary.inline-end {
      inset-inline-end: 1.5rem;
      inset-block: -1.5rem;
    }
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
