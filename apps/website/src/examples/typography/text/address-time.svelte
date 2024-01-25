<script>
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/editor/html/html.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  let code = {
    address: {
      tag: "address",
      text: "123 Beeker Street",
    },
    time: {
      tag: "time",
      text: "Jan 1, 2049 at 00:00",
      attributes: {
        datetime: "2049-01-01T00:00:00",
      },
    },
  };
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      Address
      <address>
        {code.address.text}
      </address>

      Time
      <time datetime={code.time.attributes.datetime}>
        {code.time.text}
      </time>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <HTMLEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
