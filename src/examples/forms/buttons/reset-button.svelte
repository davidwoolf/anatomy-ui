<script lang="ts">
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/editor/html/html.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = {
    form: {
      tag: "form",
      label: {
        tag: "label",
        span: {
          tag: "span",
          text: "Movie",
        },
        input: {
          tag: "input",
          attributes: {
            name: "first_name",
            placeholder: "Enter a movie...",
            type: "text",
          },
        },
      },
      button: {
        tag: "button",
        text: "reset field",
        attributes: {
          type: "reset",
        },
      },
    },
  };
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      <div>
        <form>
          <label>
            <span>{code.form.label.span.text}</span>
            <input {...code.form.label.input.attributes} />
          </label>

          <button type={code.form.button.attributes.type}>
            {code.form.button.text}
          </button>
        </form>
      </div>
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
