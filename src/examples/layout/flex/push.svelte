<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";
  import Container from "./components/container.svelte";
  import Item from "./components/item.svelte";

  let code = [
    {
      selector: ".item-3",
      value: [
        {
          property: "margin-left",
          value: "none",
          type: "select",
          options: ["none", "auto"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <Container width="24rem" gap=".5rem">
      <Item>item one</Item>
      <Item>item two</Item>
      <Item marginLeft={code[0].value[0].value}>item three</Item>
    </Container>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
