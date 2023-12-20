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
          property: "grid-template-areas",
          value: '"header header nav"\n"body body body"\n"footer footer footer"',
          type: "static",
        },
      ],
    },
    {
      selector: ".item",
      value: [
        {
          property: "grid-column-start",
          value: "header",
          type: "select",
          options: ["header", "nav", "body", "footer"],
        },
        {
          property: "grid-column-end",
          value: "header",
          type: "select",
          options: ["header", "nav", "body", "footer"],
        },
        {
          property: "grid-row-start",
          value: "header",
          type: "select",
          options: ["header", "nav", "body", "footer"],
        },
        {
          property: "grid-row-end",
          value: "header",
          type: "select",
          options: ["header", "nav", "body", "footer"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <GridSandbox
      columns="1fr 1fr 1fr"
      rows="1fr 1fr 1fr"
      areas={code[0].value[0].value}
      gap=".25rem">
      <div
        style:grid-column-start={code[1].value[0].value}
        style:grid-column-end={code[1].value[1].value}
        style:grid-row-start={code[1].value[2].value}
        style:grid-row-end={code[1].value[3].value}>
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
