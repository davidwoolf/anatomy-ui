<script>
  import Example from "@components/example.svelte";

  let showAnswer = false;
</script>

<!-- md:grid lg:grid-cols-[32rem_1fr] xl:grid-cols-[48rem_1fr] items-center -->

<div class="col-1">
  <Example>
    <div class="card disabled" inert />

    <div class="outer-dimension-highlight" style:--opacity={showAnswer ? 1 : 0}>
      <span>2rem</span>
    </div>

    <div class="card">
      <div
        class="inner-dimension-highlight padding-top"
        style:--opacity={showAnswer ? 1 : 0}>
        <span>2.5rem</span>
      </div>

      <div
        class="inner-dimension-highlight padding-left"
        style:--opacity={showAnswer ? 1 : 0}>
        <span>2.5rem</span>
      </div>

      <div
        class="inner-dimension-highlight padding-right"
        style:--opacity={showAnswer ? 1 : 0}>
        <span>2.5rem</span>
      </div>

      <div
        class="inner-dimension-highlight padding-bottom"
        style:--opacity={showAnswer ? 1 : 0}>
        <span>2.5rem</span>
      </div>

      <h2>This is a card component</h2>

      <div
        class="outer-dimension-highlight"
        style:--height=".375rem"
        style:--opacity={showAnswer ? 1 : 0}>
        <span>.375rem</span>
      </div>

      <p>
        In a design, it may have width, height, margins, padding, and border properties
        defined. But which of them are relevant to the card itself? How do the descendants
        elements handle their positioning and spacing, themselves or via the parent card?
      </p>

      {#if !showAnswer}
        <button
          type="button"
          on:click={function () {
            showAnswer = true;
          }}>Reveal the answer</button>
      {/if}
    </div>

    <div class="outer-dimension-highlight" style:--opacity={showAnswer ? 1 : 0}>
      <span>2rem</span>
    </div>

    <div class="card disabled" inert />
  </Example>
</div>

<div class="col-2 py-4 md:py-8 lg:p-8 xl:p-16">
  {#if showAnswer}
    <p>
      The card handles layout details like borders and padding, along with the layout of
      its descendants, while an ancestor of the card handles its spacing, max dimensions,
      etc. Avoid adding ancillary details like dimension constraints and margins to base
      components to ensure consistent alignment and sizing on every device.
    </p>

    <button
      type="button"
      on:click={function () {
        showAnswer = !showAnswer;
      }}>Reset card</button>
  {/if}
</div>

<style>
  .card {
    background-color: white;
    border-radius: 0.5rem;
    max-inline-size: 32rem;
    padding: 2.5rem;
    position: relative;
    width: 100%;
  }

  .card h2 {
    font-size: 1.125rem;
    font-weight: bold;
  }

  .card p {
    font-size: 1rem;
    line-height: 145%;
    opacity: 0.8;
  }

  button {
    all: unset;
    overflow: revert;
    color: #9747ff;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem 0 0;
    text-decoration-line: underline;
    text-underline-offset: 0.25rem;
    transition: all 0.2s ease;
  }

  .card button:hover {
    color: #047857;
  }

  .card.disabled {
    opacity: 0.7;
  }
  .card.disabled:first-of-type {
    margin-block-start: -4rem;
  }

  .card.disabled:last-of-type {
    margin-block-end: -4rem;
  }

  .inner-dimension-highlight {
    align-items: center;
    background-color: color-mix(in srgb, #9747ff, #fff 80%);
    display: flex;
    justify-content: center;
    opacity: var(--opacity, 0);
    position: absolute;
    transition: all 0.5s ease;
  }

  .outer-dimension-highlight {
    align-items: center;
    background-color: color-mix(in srgb, #047857, #fff 80%);
    display: flex;
    block-size: var(--height, 2rem);
    flex: 0 0 2rem;
    justify-content: center;
    max-inline-size: 32rem;
    opacity: var(--opacity, 0);
    transition: all 0.5s ease;
    inline-size: 100%;
  }

  /* .outer-dimension-highlight:hover {
    opacity: 1;
  }
  .card:hover .inner-dimension-highlight {
    opacity: 1;
  } */

  .inner-dimension-highlight span,
  .outer-dimension-highlight span {
    background-color: #9747ff;
    border-radius: 0.25rem;
    color: white;
    display: block;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    font-size: 0.625rem;
    font-weight: 500;
    padding: 0.125rem 0.25rem;
  }

  .outer-dimension-highlight span {
    background-color: #047857;
  }

  .padding-top {
    block-size: 2.5rem;
    inset-inline-start: 0;
    inset-inline-end: 0;
    inset-block-start: 0;
  }

  .padding-bottom {
    block-size: 2.5rem;
    inset-inline-start: 0;
    inset-inline-end: 0;
    inset-block-end: 0;
  }

  .padding-left {
    inline-size: 2.5rem;
    inset-block-start: 0;
    inset-block-end: 0;
    inset-inline-start: 0;
  }

  .padding-left span {
    transform: rotate(-90deg);
  }

  .padding-right {
    inline-size: 2.5rem;
    inset-block-start: 0;
    inset-block-end: 0;
    inset-inline-end: 0;
  }

  .padding-right span {
    transform: rotate(90deg);
  }
</style>
