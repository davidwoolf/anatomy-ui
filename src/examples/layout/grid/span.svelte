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
          value: "1fr 1fr 1fr",
          type: "static",
        },
      ],
    },
    {
      selector: ".span-item",
      value: [
        {
          property: "grid-column",
          value: "1",
          type: "select",
          options: ["1", "1 / span 2", "1 / span 3", "1 / -1"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <GridSandbox columns={code[0].value[0].value} gap=".25rem">
      <div style:grid-column={code[1].value[0].value}>
        <GridItem />
      </div>
      <GridItem />
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
