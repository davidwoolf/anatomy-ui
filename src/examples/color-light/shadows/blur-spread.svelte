<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "--blur-radius",
          value: "2px",
          type: "text",
        },
        {
          property: "--spread-radius",
          value: "0px",
          type: "text",
        },
        {
          property: "box-shadow",
          value: "5px 5px var(--blur-radius) var(--spread-radius) black",
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
      style:--blur-radius={code[0].value[0].value}
      style:--spread-radius={code[0].value[1].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .shadow {
    background-color: var(--color-purple-400);
    box-shadow: 5px 5px var(--blur-radius) var(--spread-radius) black;
    height: 8rem;
    width: 8rem;
  }
</style>
