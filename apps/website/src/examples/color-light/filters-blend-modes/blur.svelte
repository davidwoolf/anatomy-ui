<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";
  import Image from "@components/image.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "--blur",
          value: "5px",
          type: "text",
        },
        {
          property: "filter",
          value: "blur(var(--blur))",
          type: "static",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div style:--filter={code[0].value[0].value}>
      <Image width="100%" />
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  div {
    filter: blur(var(--filter));
    inline-size: 8rem;
  }
</style>
