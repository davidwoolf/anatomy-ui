<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".gradient",
      value: [
        {
          property: "--stop-1",
          value: "#9747ff 120deg",
          type: "select",
          options: ["#9747ff 120deg", "#9747ff 33.333%", "#9747ff 180deg"],
        },
        {
          property: "--stop-2",
          value: "#047857 240deg",
          type: "select",
          options: ["#047857 240deg", "#047857 66.666%", "#047857 220deg"],
        },
        {
          property: "--stop-3",
          value: "#f59e0b 360deg",
          type: "select",
          options: ["#f59e0b 360deg", "#f59e0b 100%", "#f59e0b 300deg"],
        },
        {
          property: "background",
          value: "conic-gradient(var(--stop-1), var(--stop-2), var(--stop-3))",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div
      class="conic-gradient"
      style:--stop-1={code[0].value[0].value}
      style:--stop-2={code[0].value[1].value}
      style:--stop-3={code[0].value[2].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .conic-gradient {
    background: conic-gradient(var(--stop-1), var(--stop-2), var(--stop-3));
    border-radius: 100%;
    height: 8rem;
    width: 12rem;
  }
</style>
