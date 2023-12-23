<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import Card from "@components/card.svelte";

  let code = [
    {
      selector: ".container",
      value: [
        {
          property: "max-width",
          value: "420px",
          type: "text",
        },
      ],
    },
    {
      selector: ".card",
      value: [
        {
          property: "column-gap",
          value: "24px",
          type: "text",
        },
        {
          property: "row-gap",
          value: "12px",
          type: "text",
        },
        {
          property: "padding",
          value: "24px",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="container" style:max-width={code[0].value[0].value}>
      <div class="width">
        <span>
          {code[0].value[0].value}
        </span>
      </div>

      <Card
        showHighlights={["padding", "gaps"]}
        padding={code[1].value[2].value}
        columnGap={code[1].value[0].value}
        rowGap={code[1].value[1].value} />

      <div class="width">
        <span>
          {code[0].value[0].value}
        </span>
      </div>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .container {
    width: 24rem;
    max-width: 100%;
  }

  /* highlights */
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
