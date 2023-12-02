<script>
  import Example from "@components/example.svelte";

  let showAnswer = false;
</script>

<!-- md:grid lg:grid-cols-[32rem_1fr] xl:grid-cols-[48rem_1fr] items-center -->

<div class="col-1">
  <Example>
    <div class="card-container">
      <div>
        <div class="constraint-highlight" style:--opacity={showAnswer ? 1 : 0} />
      </div>
      <div class="py-4 md:py-12">
        <div class="card disabled" inert />

        <div class="outer-dimension-highlight" style:--opacity={showAnswer ? 1 : 0}>
          <span>2rem</span>
        </div>

        <div class="card" style:--border-color={showAnswer ? "#9747ff" : "white"}>
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

          <p>
            In a design, it may have width, height, margins, padding, and border
            properties defined. But which of them are relevant to the card itself? How do
            the descendants elements handle their positioning and spacing, themselves or
            via the parent card?

            {#if !showAnswer}
              <button
                type="button"
                on:click={function () {
                  showAnswer = true;
                }}>Reveal the answer.</button>
            {/if}
          </p>
        </div>

        <div class="outer-dimension-highlight" style:--opacity={showAnswer ? 1 : 0}>
          <span>2rem</span>
        </div>

        <div class="card disabled" inert />
      </div>
      <div>
        <div class="constraint-highlight" style:--opacity={showAnswer ? 1 : 0} />
      </div>
    </div>
  </Example>
</div>

<div class="col-2 py-4 md:py-8 lg:p-8 xl:p-16">
  {#if showAnswer}
    <p>
      The card itself controls layout details including <span
        class="border border-purple-400 rounded-md px-1">borders</span>
      and <span class="rounded-md bg-purple-400/10 px-1 text-purple-400"> padding</span>,
      along with the layout of its descendants.
    </p>

    <p>
      The card’s container manages details including <span
        class="rounded-md bg-green-400/10 px-1 text-green-400">spacing</span>
      between elements, and
      <span class="rounded-md bg-blue-400/10 px-1 text-blue-400">max dimensions</span>.
      Avoid adding ancillary details like dimension constraints and outward spacing to
      base components to ensure consistent alignment and sizing on every device.
    </p>

    <button
      type="button"
      on:click={function () {
        showAnswer = !showAnswer;
      }}>Reset card</button>
  {/if}
</div>

<style>
  .card-container {
    align-items: center;
    display: grid;
    grid-template-columns: minmax(1rem, 1fr) minmax(min-content, 32rem) minmax(1rem, 1fr);
    width: 100%;
  }
  .card {
    background-color: white;
    border: 1px solid var(--border-color, white);
    border-radius: 0.5rem;
    flex-shrink: 0;
    max-inline-size: 32rem;
    overflow: hidden;
    padding: 2.5rem;
    position: relative;
    width: 100%;
  }

  .card h2 {
    font-size: 1.125rem;
    font-weight: bold;
  }

  .card p {
    color: color-mix(in srgb, rgb(31, 41, 55), white 20%);
    font-size: 1rem;
    line-height: 145%;
    margin: 0.375rem 0 0;
  }

  button {
    all: unset;
    overflow: revert;
    color: #9747ff;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;

    text-decoration-line: underline;
    text-underline-offset: 0.25rem;
    transition: all 0.2s ease;
  }

  button:hover {
    color: #047857;
  }

  .card.disabled {
    border: none;
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

  .constraint-highlight {
    align-items: center;
    border: 1px solid #0138dd;
    border-block-start: none;
    border-block-end: none;
    display: flex;
    height: 2rem;
    opacity: var(--opacity, 0);
    transition: all 0.2s ease;
  }
  .constraint-highlight:before {
    background-color: #0138dd;
    content: "";
    display: block;
    height: 1px;
    width: 100%;
  }
</style>
