<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";
  import Grid from "./components/grid.svelte";
  import Item from "./components/item.svelte";

  let code = [
    {
      selector: ".grid-container",
      value: [
        {
          property: "grid-template-areas",
          value: '"header header nav"\n"body body body"\n"footer footer footer"',
          type: "static",
        },
        {
          property: "width",
          value: "12rem",
          type: "text",
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
    <div style:width={code[0].value[1].value}>
      <Grid
        columns="repeat(3, 1fr)"
        rows="repeat(3, 4rem)"
        areas={code[0].value[0].value}>
        <div
          style:grid-column-start={code[1].value[0].value}
          style:grid-column-end={code[1].value[1].value}
          style:grid-row-start={code[1].value[2].value}
          style:grid-row-end={code[1].value[3].value}>
          <Item><span>.item</span></Item>
        </div>
      </Grid>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
