<script>
  import Example from "@components/example.svelte";
  import Card from "@components/playground/card.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: "div",
      value: [
        {
          property: "padding",
          value: "40px",
          type: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <Card position="relative" maxWidth="18rem" padding={code[0].value[0].value}>
      <div class="padding-highlight padding-top" style:--size={code[0].value[0].value}>
        <span>padding</span>
      </div>

      <div class="padding-highlight padding-left" style:--size={code[0].value[0].value}>
        <span>padding</span>
      </div>

      <div class="padding-highlight padding-right" style:--size={code[0].value[0].value}>
        <span>padding</span>
      </div>

      <div class="padding-highlight padding-bottom" style:--size={code[0].value[0].value}>
        <span>padding</span>
      </div>

      <p>
        In the spring he sailed for Athens, and arrived at the island of Ios, now Ino,
        where he fell extremely ill, and died.
      </p>
    </Card>

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
