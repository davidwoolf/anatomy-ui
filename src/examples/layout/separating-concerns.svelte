<script>
  import ExampleText from "@components/example-text.svelte";
  import Example from "@components/example.svelte";
  import Card from "@components/playground/card.svelte";

  let showAnswer = false;
</script>

<Example overflow="hidden">
  <svelte:fragment slot="preview">
    <div class="card-container">
      <div>
        <div class="constraint-highlight" style:--opacity={showAnswer ? 1 : 0} />
      </div>

      <div class="py-4 md:py-12">
        <div class="outer-dimension-highlight" style:--opacity={showAnswer ? 1 : 0}>
          <span>2rem</span>
        </div>

        <Card
          position="relative"
          border={showAnswer
            ? "1px solid var(--color-purple-400)"
            : "1px solid transparent"}>
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

          <p>
            In a design, it may have width, height, margins, padding, and border
            properties defined. But which of them are relevant to the card itself? How do
            elements handle their positioning and spacing, themselves or via a parent
            container?
          </p>
        </Card>

        <div class="outer-dimension-highlight" style:--opacity={showAnswer ? 1 : 0}>
          <span>2rem</span>
        </div>
      </div>
      <div>
        <div class="constraint-highlight" style:--opacity={showAnswer ? 1 : 0} />
      </div>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="preview-controls">
    <button
      type="button"
      on:click={function (e) {
        e.preventDefault();

        showAnswer = !showAnswer;
      }}>{showAnswer ? "Hide" : "Show"} highlights</button>
  </svelte:fragment>
</Example>

<style>
  .card-container {
    align-items: center;
    display: grid;
    grid-template-columns: minmax(1rem, 1fr) minmax(min-content, 32rem) minmax(1rem, 1fr);
    width: 100%;
  }

  button {
    all: unset;
    overflow: revert;
    color: var(--color-purple-400);
    cursor: pointer;
    display: none;
    font-size: 1rem;
    font-weight: 500;
    text-decoration-line: underline;
    text-underline-offset: 0.25rem;
    transition: all 0.2s ease;
  }

  button:hover {
    color: var(--color-green-400);
  }

  .inner-dimension-highlight,
  .outer-dimension-highlight {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .inner-dimension-highlight {
    background-color: color-mix(in srgb, var(--color-purple-400), #fff 80%);
    position: absolute;
  }

  .outer-dimension-highlight {
    background-color: color-mix(in srgb, var(--color-green-400), #fff 80%);
    block-size: var(--height, 2rem);
    flex: 0 0 2rem;
    max-inline-size: 32rem;
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
    border: 1px solid var(--color-blue-400);
    border-block-start: none;
    border-block-end: none;
    display: flex;
    height: 2rem;
  }

  .constraint-highlight:before {
    background-color: var(--color-blue-400);
    content: "";
    display: block;
    height: 1px;
    width: 100%;
  }

  @media (min-width: 1024px) {
    button {
      display: block;
    }

    .inner-dimension-highlight,
    .outer-dimension-highlight,
    .constraint-highlight {
      opacity: var(--opacity, 0);
      transition: all 0.5s ease;
    }
  }
</style>
