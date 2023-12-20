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
          value: "repeat(3, 1fr)",
          type: "static",
        },
        {
          property: "grid-template-rows",
          value: "repeat(3, 1fr)",
          type: "static",
        },
        {
          property: "grid-template-areas",
          value: '"header header header"\n". body body"\n"footer footer footer"',
          type: "textarea",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <GridSandbox
      columns={code[0].value[0].value}
      rows={code[0].value[1].value}
      areas={code[0].value[2].value}
      gap=".25rem">
      <div style:grid-area="header">
        <GridItem />
      </div>

      <div style:grid-area="body">
        <GridItem />
      </div>

      <div style:grid-area="footer">
        <GridItem />
      </div>
    </GridSandbox>

    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
