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
          property: "background",
          value: "radial-gradient(var(--shape), #fff, #9747ff)",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="radial-gradient" style:--shape={code[0].value[0].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .radial-gradient {
    background: radial-gradient(var(--shape), #fff, #9747ff);
    border-radius: 0.5rem;
    height: 8rem;
    width: 12rem;
  }
</style>
