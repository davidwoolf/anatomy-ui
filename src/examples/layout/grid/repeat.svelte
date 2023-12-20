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
      <GridSandbox
        implicitRowSize={code[0].value[0].value}
        columns={code[0].value[1].value}>
        {#if code[0].value[1].value === "repeat(3, 1fr)"}
          <GridItem columnBefore="1" />
          <GridItem columnBefore="2" />
          <GridItem columnBefore="3" columnAfter="4" />
        {:else if code[0].value[1].value === "repeat(2, 1fr 4rem)"}
          <GridItem columnBefore="1" />
          <GridItem columnBefore="2" />
          <GridItem columnBefore="3" />
          <GridItem columnBefore="4" columnAfter="5" />
        {:else if code[0].value[1].value === "1fr repeat(3, 3rem) 1fr"}
          <GridItem columnBefore="1" />
          <GridItem columnBefore="2" />
          <GridItem columnBefore="3" />
          <GridItem columnBefore="4" />
          <GridItem columnBefore="5" columnAfter="6" />
        {/if}
      </GridSandbox>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
