<script>
  import Example from "@components/example.svelte";
  import Image from "@components/image.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "img",
      value: [
        {
          property: "aspect-ratio",
          value: "1 / 1",
          type: "text",
        },
        {
          property: "min-height",
          value: "none",
          type: "text",
        },
        {
          property: "max-height",
          value: "none",
          type: "text",
        },
        {
          property: "min-width",
          value: "none",
          type: "text",
        },
        {
          property: "max-width",
          value: "none",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <Image
      height="auto"
      width="160px"
      ratio={code[0].value[0].value}
      minHeight={code[0].value[1].value}
      maxHeight={code[0].value[2].value}
      minWidth={code[0].value[3].value}
      maxWidth={code[0].value[4].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
