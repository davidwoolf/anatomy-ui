<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";

  let code = [
    {
      selector: ".flex-container",
      value: [
        {
          property: "align-items",
          value: "stretch",
          type: "select",
          options: ["stretch", "flex-start", "flex-end", "center"],
        },
        {
          property: "justify-content",
          value: "stretch",
          type: "select",
          options: [
            "stretch",
            "start",
            "end",
            "center",
            "space-between",
            "space-around",
            "space-evenly",
          ],
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
