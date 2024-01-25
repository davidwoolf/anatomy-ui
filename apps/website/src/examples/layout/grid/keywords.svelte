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
          property: "grid-auto-rows",
          value: "8rem",
          type: "static",
        },
        {
          property: "grid-template-columns",
          value: "min-content 1fr",
          type: "select",
          options: ["min-content 1fr", "max-content 1fr", "minmax(min-content, 1fr) 1fr"],
        },
        {
          property: "width",
          value: "8rem",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div style:width={code[0].value[2].value}>
      <Grid implicitRowSize={code[0].value[0].value} columns={code[0].value[1].value}>
        <Item columnBefore="1" rowAfter="2" hideBottomBorder={true}>
          <span>content in column one</span>
        </Item>
        <Item
          columnBefore="2"
          columnAfter="3"
          hideRightBorder={true}
          hideBottomBorder={true} />
      </Grid>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
