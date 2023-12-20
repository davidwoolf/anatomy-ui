<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";
  import GridSandbox from "@components/grid-sandbox.svelte";
  import GridItem from "@components/grid-sandbox-item.svelte";

  let code = [
    {
      selector: ".grid-container",
      value: [
        {
          property: "grid-template-columns",
          value: "min-content 1fr",
          type: "select",
          options: [
            "min-content 1fr",
            "max-content 1fr",
            "fit-content 1fr",
            "minmax(min-content, 1fr) 1fr",
          ],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <GridSandbox rows="auto" columns={code[0].value[0].value} gap=".25rem">
      <GridItem>&nbsp;item content</GridItem>
      <GridItem />
    </GridSandbox>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
