<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".gradient",
      value: [
        {
          property: "--first-stop",
          value: "#9747ff 0 1%",
          type: "text",
        },
        {
          property: "--second-stop",
          value: "transparent 1% 6%",
          type: "text",
        },
        {
          property: "background",
          value:
            "repeating-radial-gradient(circle, var(--first-stop), var(--second-stop))",
          type: "static",
        },
        {
          property: "border-radius",
          value: "100%",
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
    background: repeating-radial-gradient(circle, var(--first-stop), var(--second-stop));
    border-radius: 100%;
    height: 12rem;
    width: 12rem;
  }
</style>
