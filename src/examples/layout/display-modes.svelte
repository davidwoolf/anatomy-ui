<script>
  import CSSEditor from "@components/css-editor.svelte";
  import Example from "@components/example.svelte";

  let code = [
    {
      selector: ".container",
      value: [
        {
          property: "display",
          value: "block",
          type: "select",
          options: [
            "block",
            "flex",
            "grid",
            "inline",
            "inline-block",
            "inline-flex",
            "inline-grid",
            "none",
          ],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="container">
      <div class="item" style:display={code[0].value[0].value}>item</div>

      <div class="item" style:display={code[0].value[0].value}>
        <span class="item">child</span>
        <span class="item">child</span>
        <span class="item">child</span>
      </div>

      <div class="item" style:display={code[0].value[0].value}>item</div>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .container {
    width: max-content;
  }

  .item {
    border: 1px solid var(--color-purple-400);
    color: var(--color-purple-400);
    font-family: var(--font-mono);
    font-size: var(--font-size-xxs);
    gap: 0.5rem;
    margin: -1px;
    padding: 0.5rem;
  }

  .item .item {
    border: none;
    padding: 0;
  }
</style>
