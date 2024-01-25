<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".gradient",
      value: [
        {
          property: "--first-stop",
          value: "#9747ff 0 20%",
          type: "text",
        },
        {
          property: "--second-stop",
          value: "transparent 20% 100%",
          type: "text",
        },
        {
          property: "background-image",
          value: "radial-gradient(circle, var(--first-stop), var(--second-stop))",
          type: "static",
        },
        {
          property: "background-size",
          value: "2rem 2rem",
          type: "static",
        },
        {
          property: "height",
          value: "12rem",
          type: "static",
        },
        {
          property: "width",
          value: "12rem",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div
      class="repeating-radial-gradient"
      style:--first-stop={code[0].value[0].value}
      style:--second-stop={code[0].value[1].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .repeating-radial-gradient {
    background: radial-gradient(circle, var(--first-stop), var(--second-stop));
    background-size: 1rem 1rem;
    height: 12rem;
    width: 12rem;
  }
</style>
