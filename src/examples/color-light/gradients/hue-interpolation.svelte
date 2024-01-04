<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".gradient",
      value: [
        {
          property: "--hue-interpolation",
          value: "shorter hue",
          type: "select",
          options: ["shorter hue", "longer hue", "decreasing hue", "increasing hue"],
        },
        {
          property: "background",
          value:
            "linear-gradient(to right in oklch var(--hue-interpolation), #9747ff, #f59e0b)",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="linear-gradient" style:--hue-interpolation={code[0].value[0].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .linear-gradient {
    background: linear-gradient(
      to right in oklch var(--hue-interpolation),
      #9747ff,
      #f59e0b
    );
    border-radius: 100%;
    height: 8rem;
    width: 12rem;
  }
</style>
