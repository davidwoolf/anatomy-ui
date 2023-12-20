<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";

  let code = [
    {
      selector: ".flex",
      value: [
        {
          property: "flex-direction",
          value: "row",
          type: "select",
          options: ["row", "row-reverse", "column", "column-reverse"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
