<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";

  let code = [
    {
      selector: ".empty-item",
      value: [
        {
          property: "flex",
          value: "0 0 auto",
          type: "text",
        },
      ],
    },
    {
      selector: ".offset-item",
      value: [
        {
          property: "margin-left",
          value: "0",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview" />
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
