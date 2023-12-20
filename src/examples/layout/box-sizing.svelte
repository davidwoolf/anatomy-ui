<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import Card from "@components/card.svelte";
  import { afterUpdate } from "svelte";

  let code = [
    {
      selector: "*",
      value: [
        {
          property: "box-sizing",
          value: "border-box",
          type: "select",
          options: ["border-box", "content-box"],
        },
      ],
    },
    {
      selector: ".card",
      value: [
        {
          property: "padding",
          value: "24px",
          type: "text",
        },
      ],
    },
  ];

  /** @type {HTMLDivElement} */
  let box;
  /** @type {number} */
  let width = 0;

  afterUpdate(() => {
    if (box) {
      width = box.getBoundingClientRect().width;
    }
  });
</script>

<Example>
  <svelte:fragment slot="preview">
    <div>
      <div class="box-sizing-container" style:--box-sizing={code[0].value[0].value}>
        <div bind:this={box}>
          <Card
            width="24rem"
            padding={code[1].value[0].value}
            showHighlights={["padding"]} />
        </div>
      </div>

      <div class="width">
        <span>
          {width}px
        </span>
      </div>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  :global(.box-sizing-container *) {
    box-sizing: var(--box-sizing);
  }

  .width {
    align-items: center;
    border-block-start: 1px solid var(--color-purple-400);
    color: var(--color-purple-400);
    display: flex;
    font-family: var(--font-mono);
    font-size: var(--font-size-xs);
    height: 1px;
    justify-content: center;
    margin-block: 2rem;
    text-align: center;
  }

  .width span {
    background-color: var(--color-gray-100);
    padding: 0 1rem;
  }
</style>
