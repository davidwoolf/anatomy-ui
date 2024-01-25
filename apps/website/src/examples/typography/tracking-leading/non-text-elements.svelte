<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".container",
      value: [
        {
          property: "letter-spacing",
          value: "1rem",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="container" style:letter-spacing={code[0].value[0].value}>
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .box {
    background-color: white;
    border-radius: 1rem;
    border: 1px solid color-mix(in srgb, var(--color-gray-300), white 60%);
    block-size: 4rem;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    letter-spacing: initial;
    line-height: initial;
    word-spacing: initial;
    inline-size: 4rem;
  }
</style>
