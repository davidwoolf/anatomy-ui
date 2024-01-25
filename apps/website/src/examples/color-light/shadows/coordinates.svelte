<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "--offset-x",
          value: "5px",
          type: "text",
        },
        {
          property: "--offset-y",
          value: "5px",
          type: "text",
        },
        {
          property: "box-shadow",
          value: "var(--offset-x) var(--offset-y) black",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div
      class="shadow"
      style:--offset-x={code[0].value[0].value}
      style:--offset-y={code[0].value[1].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .shadow {
    background-color: var(--color-purple-400);
    box-shadow: var(--offset-x) var(--offset-y) black;

    height: 8rem;
    width: 8rem;
  }
</style>
