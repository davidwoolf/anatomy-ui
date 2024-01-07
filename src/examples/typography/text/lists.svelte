<script>
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/editor/html/html.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = {
    ul: {
      tag: "ul",
      li1: {
        tag: "li",
        text: "Item one",
      },
      li2: {
        tag: "li",
        text: "Item two",
      },
      li3: {
        tag: "li",
        text: "Item three",
      },
    },
  };
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <ul>
        <li>{code.ul.li1.text}</li>
        <li>{code.ul.li2.text}</li>
        <li>{code.ul.li3.text}</li>
      </ul>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <HTMLEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
