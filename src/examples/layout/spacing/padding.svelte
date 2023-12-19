<script>
  import Example from "@components/example.svelte";
  import Card from "@components/card.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "padding",
          value: "24px",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card width="24rem" showHighlights={["padding"]} padding={code[0].value[0].value} />

    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  .padding-highlight {
    align-items: center;
    background-color: color-mix(
      in srgb,
      var(--color-purple-400),
      var(--color-gray-800) 60%
    );
    display: flex;
    justify-content: center;
    position: absolute;
  }

  .padding-highlight span {
    color: color-mix(in srgb, var(--color-purple-400), white 80%);
    display: block;
    font-family: var(--font-mono);
    font-size: 0.625rem;
    font-weight: 500;
    padding: 0.125rem 0.25rem;
    min-width: max-content;
  }

  .padding-top {
    block-size: var(--size, 2.5rem);
    inset-inline-start: 0;
    inset-inline-end: 0;
    inset-block-start: 0;
  }

  .padding-bottom {
    block-size: var(--size, 2.5rem);
    inset-inline-start: 0;
    inset-inline-end: 0;
    inset-block-end: 0;
  }

  .padding-left {
    inline-size: var(--size, 2.5rem);
    inset-block-start: 0;
    inset-block-end: 0;
    inset-inline-start: 0;
  }

  .padding-left span {
    transform: rotate(-90deg);
  }

  .padding-right {
    inline-size: var(--size, 2.5rem);
    inset-block-start: 0;
    inset-block-end: 0;
    inset-inline-end: 0;
  }

  .padding-right span {
    transform: rotate(90deg);
  }
</style>
