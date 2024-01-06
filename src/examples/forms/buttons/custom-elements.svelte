<script lang="ts">
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/editor/html/html.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = {
    div: {
      tag: "div",
      attributes: {
        role: "button",
      },
      text: "I am clickable",
    },
  };
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <div role={code.div.attributes.role}>{code.div.text}</div>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <HTMLEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
