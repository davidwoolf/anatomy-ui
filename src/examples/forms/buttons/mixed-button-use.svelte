<script>
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/editor/html/html.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = {
    form: {
      tag: "form",
      button: {
        tag: "button",
        attributes: {
          type: "button",
        },
        text: "Regular button",
      },
      button_2: {
        tag: "button",
        text: "Submit",
      },
    },
  };
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <form
        on:submit={(e) => {
          e.preventDefault();

          alert("submissions are disabled for examples");
        }}>
        <button type={code.form.button.attributes.type}>
          {code.form.button.text}
        </button>

        <button>
          {code.form.button_2.text}
        </button>
      </form>

      <address />
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <HTMLEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>

<style>
  button {
    all: revert;
  }
</style>
