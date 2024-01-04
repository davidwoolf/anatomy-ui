<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "box-shadow",
          value: "0 0 10px 0 inset black",
          type: "select",
          options: ["0 0 10px 0 inset black", "0 0 10px 0 black"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="shadow" style:box-shadow={code[0].value[0].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .shadow {
    background-color: var(--color-purple-400);
    height: 8rem;
    width: 8rem;
  }
</style>
