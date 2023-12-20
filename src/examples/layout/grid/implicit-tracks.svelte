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
          property: "grid-auto-flow",
          value: "row",
          type: "select",
          options: ["row", "column"],
        },
        {
          property: "grid-auto-rows",
          value: "auto",
          type: "text",
        },
        {
          property: "grid-auto-columns",
          value: "auto",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <GridSandbox
      rows="initial"
      columns="initial"
      autoFlow={code[0].value[0].value}
      implicitRowSize={code[0].value[1].value}
      implicitColumnSize={code[0].value[2].value}
      gap=".25rem">
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
    </GridSandbox>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
