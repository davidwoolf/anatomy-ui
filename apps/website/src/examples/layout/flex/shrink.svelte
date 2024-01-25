<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";
  import Container from "./components/container.svelte";
  import Item from "./components/item.svelte";

  let code = [
    {
      selector: ".item-1",
      value: [
        {
          property: "flex-shrink",
          value: "0",
          type: "select",
          options: ["0", "1", "2"],
        },
      ],
    },
    {
      selector: ".item-2",
      value: [
        {
          property: "flex-shrink",
          value: "0",
          type: "select",
          options: ["0", "1", "2"],
        },
      ],
    },
    {
      selector: ".item-3",
      value: [
        {
          property: "flex-shrink",
          value: "0",
          type: "select",
          options: ["0", "1", "2"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <Container width="8rem" gap=".5rem">
      <Item shrink={code[0].value[0].value}>item one</Item>
      <Item shrink={code[1].value[0].value}>item two</Item>
      <Item shrink={code[2].value[0].value}>item three</Item>
    </Container>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
