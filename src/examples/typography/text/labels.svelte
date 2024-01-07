<script>
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/editor/html/html.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = {
    label: {
      tag: "label",
      span: {
        tag: "span",
        text: "First name:",
      },
      input: {
        tag: "input",
        attributes: {
          type: "text",
        },
      },
    },
  };
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <label>
        <span>{code.label.span.text}</span>
        <input type={code.label.input.attributes.type} placeholder="John Doe..." />
      </label>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <HTMLEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  span {
    display: block;
    font-size: var(--font-size-sm);
  }

  input {
    border: 1px solid var(--color-gray-300);
    border-radius: 0.25rem;
    font-size: var(--font-size-sm);
    padding: 0 0.5rem;
  }
</style>
