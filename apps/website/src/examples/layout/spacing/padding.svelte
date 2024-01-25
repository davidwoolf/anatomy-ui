<script>
  import Example from "@components/example.svelte";
  import Card from "@components/card.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "div",
      value: [
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
    <Card width="24rem" showHighlights={["padding"]} padding={code[0].value[0].value} />
  </svelte:fragment>

  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
