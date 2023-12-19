<script>
  import Example from "@components/example.svelte";
  import Image from "./image.svelte";
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

    <CSSEditor
      value={code}
      on:update={(event) => {
        console.log(event.detail.text);

        code = event.detail.text;
      }} />
  </svelte:fragment>
</Example>
