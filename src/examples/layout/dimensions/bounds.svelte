<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import Card from "@components/card.svelte";

  let code = [
    {
      selector: ".container",
      value: [
        {
          property: "min-width",
          value: "0",
          type: "text",
        },
        {
          property: "min-height",
          value: "0",
          type: "text",
        },
        {
          property: "max-width",
          value: "none",
          type: "text",
        },
        {
          property: "max-height",
          value: "none",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div
      class="container"
      style:min-width={code[0].value[0].value}
      style:min-height={code[0].value[1].value}
      style:max-width={code[0].value[2].value}
      style:max-height={code[0].value[3].value}
      style:width="24rem">
      <Card width="100%" height="100%" />
    </div>

    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .container {
    border: 1px dashed var(--color-gray-300);
    overflow: hidden;
  }
</style>
