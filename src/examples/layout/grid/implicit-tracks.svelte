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
          property: "grid-auto-flow",
          value: "row",
          type: "select",
          options: ["row", "column"],
        },
        {
          property: "grid-auto-rows",
          value: "4rem",
          type: "text",
        },
        {
          property: "grid-auto-columns",
          value: "4rem",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <Grid
      rows="initial"
      columns="initial"
      autoFlow={code[0].value[0].value}
      implicitRowSize={code[0].value[1].value}
      implicitColumnSize={code[0].value[2].value}>
      {#if code[0].value[0].value === "row"}
        <Item columnBefore="1" />
        <Item rowBefore="2" />
        <Item rowBefore="3" />
        <Item rowBefore="4" rowAfter="5" />
      {:else}
        <Item columnBefore="1" />
        <Item columnBefore="2" />
        <Item columnBefore="3" />
        <Item columnBefore="4" columnAfter="5" />
      {/if}
    </Grid>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
