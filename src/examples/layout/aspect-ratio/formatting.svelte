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
          type: "select",
          options: ["1 / 1", "1 / 2", "1", "2", "16 / 9", "auto 16 / 9"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <Image height="auto" width="10rem" ratio={code[0].value[0].value} />

    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
