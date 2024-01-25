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
          property: "grid-template-columns",
          value: "repeat(3, 1fr)",
          type: "static",
        },
        {
          property: "grid-template-rows",
          value: "repeat(3, 4rem)",
          type: "static",
        },
        {
          property: "grid-template-areas",
          value: '"header header nav"\n". body body"\n"footer footer footer"',
          type: "textarea",
        },
        {
          property: "width",
          value: "12rem",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div style:width={code[0].value[3].value}>
      <Grid
        columns={code[0].value[0].value}
        rows={code[0].value[1].value}
        areas={code[0].value[2].value}>
        <div style:grid-area="header">
          <Item>
            <span>header</span>
          </Item>
        </div>

        <div style:grid-area="nav">
          <Item><span>nav</span></Item>
        </div>

        <div style:grid-area="body">
          <Item>
            <span>body</span>
          </Item>
        </div>

        <div style:grid-area="footer">
          <Item>
            <span>footer</span>
          </Item>
        </div>
      </Grid>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
