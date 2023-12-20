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
          value: "1fr 1fr",
          type: "select",
          options: ["1fr 1fr", "2rem 1fr", "5fr 1fr"],
        },
        {
          property: "gap",
          value: "0px",
          type: "text",
        },
        {
          property: "width",
          value: "128px",
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
        rows="auto"
        columns={code[0].value[0].value}
        gap={code[0].value[1].value}>
        <GridItem />
        <GridItem />
      </GridSandbox>
    </div>

    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
