<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";
  import Container from "./components/container.svelte";
  import Item from "./components/item.svelte";

  let code = [
    {
      selector: ".item",
      value: [
        {
          property: "flex-basis",
          value: "auto",
          type: "select",
          options: ["auto", "min-content", "8rem"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <Container gap=".5rem">
      <Item basis={code[0].value[0].value}>item one</Item>
      <Item>item two</Item>
      <Item>item three</Item>
    </Container>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
