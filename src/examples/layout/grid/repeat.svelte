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
          type: "select",
          options: ["repeat(3, 1fr)", "repeat(3, 1fr 4rem)", "1fr repeat(3, 3rem) 1fr"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <GridSandbox columns={code[0].value[0].value} gap=".25rem">
      {#if code[0].value[0].value === "repeat(3, 1fr)"}
        <GridItem />
        <GridItem />
        <GridItem />
      {:else if code[0].value[0].value === "repeat(3, 1fr 4rem)"}
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      {:else if code[0].value[0].value === "1fr repeat(3, 3rem) 1fr"}
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      {/if}
    </GridSandbox>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
