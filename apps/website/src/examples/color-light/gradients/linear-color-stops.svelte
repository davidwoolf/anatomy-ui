<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".gradient",
      value: [
        {
          property: "--stop-1",
          value: "#9747ff 0%",
          type: "text",
        },
        {
          property: "--stop-2",
          value: "#f59e0b 100%",
          type: "text",
        },
        {
          property: "background",
          value: "linear-gradient(to right, var(--stop-1), var(--stop-2))",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div
      class="linear-gradient"
      style:--stop-1={code[0].value[0].value}
      style:--stop-2={code[0].value[1].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .linear-gradient {
    background: linear-gradient(to right, var(--stop-1), var(--stop-2));
    border-radius: 0.5rem;
    height: 8rem;
    width: 8rem;
  }
</style>
