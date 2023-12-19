<script>
  import Example from "@components/example.svelte";
  import Card from "@components/playground/card.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".container",
      value: [
        {
          property: "gap",
          value: "40px",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div>
      <Card maxWidth="24rem">
        <p>
          In the spring he sailed for Athens, and arrived at the island of Ios, now Ino,
          where he fell extremely ill, and died.
        </p>
      </Card>

      <div class="gap-highlight" style:--size={code[0].value[0].value}>
        <span>gap: {code[0].value[0].value}</span>
      </div>

      <Card maxWidth="24rem">
        <p>
          In the spring he sailed for Athens, and arrived at the island of Ios, now Ino,
          where he fell extremely ill, and died.
        </p>
      </Card>
    </div>

    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .gap-highlight span {
    background-color: #0138dd;
    border-radius: 0.25rem;
    color: white;
    display: block;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    font-size: 0.625rem;
    font-weight: 500;
    padding: 0.125rem 0.25rem;
    min-width: max-content;
  }

  .gap-highlight {
    align-items: center;
    background-color: color-mix(in srgb, #0138dd, #fff 80%);
    block-size: var(--size, 2.5rem);
    display: flex;
    justify-content: center;
    max-inline-size: 32rem;
    width: 100%;
  }
</style>
