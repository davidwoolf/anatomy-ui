<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";

  let code = [
    {
      selector: ".flex-container",
      value: [
        {
          property: "flex-wrap",
          value: "nowrap",
          type: "select",
          options: ["nowrap", "wrap"],
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
