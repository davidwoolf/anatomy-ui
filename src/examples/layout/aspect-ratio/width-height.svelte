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
          property: "height",
          value: "auto",
          type: "text",
        },
        {
          property: "width",
          value: "160px",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <Image
      ratio={code[0].value[0].value}
      height={code[0].value[1].value}
      width={code[0].value[2].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
