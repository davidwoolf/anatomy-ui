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
          value: "4rem 4rem",
          type: "text",
        },
        {
          property: "grid-template-rows",
          value: "2rem 2rem",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <GridSandbox
      columns={code[0].value[0].value}
      rows={code[0].value[1].value}
      gap=".25rem">
      {#each code[0].value[1].value.split(" ") as _row}
        {#each code[0].value[0].value.split(" ") as _column}
          <GridItem />
        {/each}
      {/each}
    </GridSandbox>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
