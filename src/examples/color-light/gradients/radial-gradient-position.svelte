<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".gradient",
      value: [
        {
          property: "--shape",
          value: "ellipse",
          type: "select",
          options: ["ellipse", "circle"],
        },
        {
          property: "--size",
          value: "farthest-corner",
          type: "select",
          options: ["farthest-corner", "closest-corner", "farthest-side", "closest-side"],
        },
        {
          property: "--position",
          value: "center",
          type: "select",
          options: [
            "center",
            "top right",
            "center right",
            "bottom right",
            "top left",
            "center left",
            "bottom left",
          ],
        },
        {
          property: "background",
          value:
            "radial-gradient(var(--shape) var(--size) at var(--position), #fff, #9747ff)",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div
      class="radial-gradient"
      style:--shape={code[0].value[0].value}
      style:--size={code[0].value[1].value}
      style:--position={code[0].value[2].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .radial-gradient {
    background: radial-gradient(
      var(--shape) var(--size) at var(--position),
      #fff,
      #9747ff
    );
    border-radius: 100%;
    height: 8rem;
    width: 12rem;
  }
</style>
