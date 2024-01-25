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
          value: "4rem",
          type: "static",
        },
        {
          property: "grid-template-columns",
          value: "1fr 1fr 1fr",
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
    <div style:width={code[0].value[2].value}>
      <Grid implicitRowSize={code[0].value[0].value} columns={code[0].value[1].value}>
        <div style:grid-column={code[1].value[0].value}>
          <Item
            columnBefore="1"
            columnAfter={(() => {
              if (
                code[1].value[0].value === "1 / span 3" ||
                code[1].value[0].value === "1 / -1"
              ) {
                return "4";
              }
            })()} />
        </div>
        <Item
          columnBefore={(() => {
            if (code[1].value[0].value === "1") {
              return "2";
            }

            if (code[1].value[0].value === "1 / span 2") {
              return "3";
            }
          })()} />
        <Item />
        <Item />
        <Item />
        <Item />
      </Grid>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
