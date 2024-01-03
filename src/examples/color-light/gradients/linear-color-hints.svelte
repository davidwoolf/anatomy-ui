<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".gradient",
      value: [
        {
          property: "--hint-1",
          value: "25%",
          type: "text",
        },
        {
          property: "--hint-2",
          value: "75%",
          type: "text",
        },
        {
          property: "background",
          value:
            "linear-gradient(to right, #9747ff, var(--hint-1), #f59e0b, var(--hint-2), #047857)",
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
      style:--hint-1={code[0].value[0].value}
      style:--hint-2={code[0].value[1].value} />
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .linear-gradient {
    background: linear-gradient(
      to right,
      #9747ff,
      var(--hint-1),
      #f59e0b,
      var(--hint-2),
      #047857
    );
    border-radius: 100%;
    height: 8rem;
    width: 12rem;
  }
</style>
