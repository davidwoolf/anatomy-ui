<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";

  let code = [
    {
      selector: ".items",
      value: [
        {
          property: "flex-shrink",
          value: "0",
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
