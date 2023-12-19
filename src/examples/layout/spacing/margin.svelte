<script>
  import Example from "@components/example.svelte";
  import Card from "@components/card.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".first",
      value: [
        {
          property: "margin-bottom",
          value: "40px",
          type: "text",
        },
      ],
    },
    {
      selector: ".second",
      value: [
        {
          property: "margin-top",
          value: "40px",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div>
      <div class="item" style:margin="0 0 {code[0].value[0].value}">
        <Card width="24rem" />

        <div class="margin-highlight bottom" style:--size={code[0].value[0].value}>
          <span>margin-bottom: {code[0].value[0].value}</span>
        </div>
      </div>

      <div class="item" style:margin="{code[1].value[0].value} 0 0">
        <div class="margin-highlight top" style:--size={code[1].value[0].value}>
          <span>margin-top: {code[1].value[0].value}</span>
        </div>
        <Card width="24rem" />
      </div>
    </div>

    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .item {
    position: relative;
  }
  .margin-highlight {
    align-items: center;
    background: url("/assets/lines.png");
    background-size: 500px auto;
    block-size: var(--size, 2.5rem);
    display: flex;
    justify-content: center;
    max-inline-size: 32rem;
    position: absolute;
    width: 40%;
  }

  .margin-highlight.bottom {
    inset-inline-start: 5%;
    inset-block-start: 100%;
  }

  .margin-highlight.top {
    inset-inline-end: 5%;
    inset-block-end: 100%;
  }

  .margin-highlight span {
    color: color-mix(in srgb, var(--color-green-400), var(--color-gray-800) 50%);
    border-radius: 0.25rem;
    display: block;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    font-size: 0.625rem;
    font-weight: 500;
    padding: 0.125rem 0.25rem;
    min-width: max-content;
  }
</style>
