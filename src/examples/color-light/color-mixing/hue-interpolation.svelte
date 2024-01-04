<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "--hue-interpolation",
          value: "shorter hue",
          type: "select",
          options: ["shorter hue", "longer hue", "decreasing hue", "increasing hue"],
        },
        {
          property: "--color-1",
          value: "purple",
          type: "text",
        },
        {
          property: "--color-2",
          value: "yellow",
          type: "text",
        },
        {
          property: "background-color",
          value: "color-mix(in oklch var(--hue-interpolation), purple, yellow)",
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
      style:--hue-interpolation={code[0].value[0].value}
      style:--color-1={code[0].value[1].value}
      style:--color-2={code[0].value[2].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .linear-gradient {
    background: color-mix(
      in oklch var(--hue-interpolation),
      var(--color-1),
      var(--color-2)
    );
    border-radius: 0.5rem;
    height: 8rem;
    width: 8rem;
  }
</style>
