<script>
  import Example from "@components/example.svelte";
  import CSSEditor from "@components/css-editor.svelte";

  let code = [
    {
      selector: ".button-one",
      value: [
        {
          property: "all",
          value: "unset",
          type: "select",
          options: ["unset", "revert"],
        },
      ],
    },
    {
      selector: ".button-two",
      value: [
        {
          property: "appearance",
          value: "none",
          type: "select",
          options: ["none", "auto"],
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <div class="container">
      <button style:all={code[0].value[0].value}>button one</button>
      <button style:appearance={code[1].value[0].value}>button two</button>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <CSSEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  /* necessary as global styling is doing other things to default buttons */
  button {
    all: revert;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
