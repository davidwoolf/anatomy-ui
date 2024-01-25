<script>
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/editor/html/html.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = {
    p: {
      tag: "p",
      strong: {
        tag: "strong",
        text: "Warning!",
      },
      text: "This action will delete all of your content.",
    },
  };
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <p>
        <strong>{code.p.strong.text}</strong>
        {code.p.text}
      </p>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <HTMLEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
