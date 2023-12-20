<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";

  let code = [
    {
      selector: ".item",
      value: [
        {
          property: "flex-basis",
          value: "auto",
          type: "text",
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
