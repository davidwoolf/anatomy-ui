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
    <GridSandbox
      rows="initial"
      columns="initial"
      autoFlow={code[0].value[0].value}
      implicitRowSize={code[0].value[1].value}
      implicitColumnSize={code[0].value[2].value}>
      {#if code[0].value[0].value === "row"}
        <GridItem columnBefore="1" />
        <GridItem rowBefore="2" />
        <GridItem rowBefore="3" />
        <GridItem rowBefore="4" rowAfter="5" />
      {:else}
        <GridItem columnBefore="1" />
        <GridItem columnBefore="2" />
        <GridItem columnBefore="3" />
        <GridItem columnBefore="4" columnAfter="5" />
      {/if}
    </GridSandbox>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
