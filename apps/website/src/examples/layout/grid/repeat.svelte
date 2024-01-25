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
          value: "repeat(3, 1fr)",
          type: "select",
          options: ["repeat(3, 1fr)", "repeat(2, 1fr 4rem)", "1fr repeat(3, 3rem) 1fr"],
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
    <div style:width={code[0].value[2].value}>
      <Grid implicitRowSize={code[0].value[0].value} columns={code[0].value[1].value}>
        {#if code[0].value[1].value === "repeat(3, 1fr)"}
          <Item columnBefore="1" />
          <Item columnBefore="2" />
          <Item columnBefore="3" columnAfter="4" />
        {:else if code[0].value[1].value === "repeat(2, 1fr 4rem)"}
          <Item columnBefore="1" />
          <Item columnBefore="2" />
          <Item columnBefore="3" />
          <Item columnBefore="4" columnAfter="5" />
        {:else if code[0].value[1].value === "1fr repeat(3, 3rem) 1fr"}
          <Item columnBefore="1" />
          <Item columnBefore="2" />
          <Item columnBefore="3" />
          <Item columnBefore="4" />
          <Item columnBefore="5" columnAfter="6" />
        {/if}
      </Grid>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
