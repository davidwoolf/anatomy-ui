<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";
  import Container from "./components/container.svelte";
  import Item from "./components/item.svelte";

  let code = [
    {
      selector: ".flex-container",
      value: [
        {
          property: "align-items",
          value: "stretch",
          type: "select",
          options: ["stretch", "flex-start", "flex-end", "center"],
        },
        {
          property: "justify-content",
          value: "stretch",
          type: "select",
          options: [
            "stretch",
            "start",
            "end",
            "center",
            "space-between",
            "space-around",
            "space-evenly",
          ],
        },
        {
          property: "gap",
          value: ".5rem",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <Container
      alignItems={code[0].value[0].value}
      justifyContents={code[0].value[1].value}
      gap={code[0].value[2].value}
      width="24rem">
      <Item>1</Item>
      <Item>2</Item>
      <Item height="4rem">3</Item>
    </Container>
  </svelte:fragment>

  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
