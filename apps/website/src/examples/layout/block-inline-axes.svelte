<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import Card from "@components/card.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "writing-mode",
          value: "horizontal-tb",
          type: "select",
          options: ["horizontal-tb", "vertical-lr", "vertical-rl"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="container" style:writing-mode={code[0].value[0].value}>
      <div class="block-axis">
        <span>block axis</span>
      </div>

      <div class="inline-axis">
        <span>inline axis</span>
      </div>
      <Card width="18rem" />
    </div>
  </svelte:fragment>

  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .container {
    padding-inline: 4rem;
    padding-block: 2rem;
    position: relative;
  }

  span {
    display: block;
    color: var(--color-purple-400);
    font-family: var(--font-mono);
    font-size: 0.5rem;
    font-weight: 500;
    line-height: 1;
    min-inline-size: max-content;
  }

  .block-axis {
    border-inline-end: 1px dashed #9747ff;
    inset-inline-start: 50%;
    inset-block: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    inline-size: 1px;
  }

  .block-axis span {
    padding-inline-start: 0.5rem;
  }

  .inline-axis {
    align-items: flex-start;
    border-block-end: 1px dashed #9747ff;
    block-size: 1px;
    display: flex;
    inset-block-start: 50%;
    inset-inline: 0;
    position: absolute;
  }

  .inline-axis span {
    padding-block-start: 0.5rem;
  }
</style>
