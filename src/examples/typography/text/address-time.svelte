<script>
  import Example from "@components/example.svelte";
  import HTMLEditor from "@components/editor/html/html.svelte";
  import SimpleCard from "@components/simple-card.svelte";

  /**
   * @typedef Nodes
   * @property {string} [tag]
   * @property {string} [text]
   * @property {"text" | "textarea"} [editable]
   * @property {{ name: string; value: string; editable: "text"}[]} [attributes]
   * @property {Nodes[]} [nodes]
   * */

  /** @type {Nodes[]} */
  let code = [
    {
      tag: "address",
      nodes: [
        {
          text: "123 Beeker Street",
          editable: "textarea",
        },
      ],
    },
    {
      tag: "time",
      attributes: [
        {
          name: "datetime",
          value: "2049-01-01T00:00:00",
          editable: "text",
        },
      ],
      nodes: [
        {
          text: "Jan 1, 2049 at 00:00",
          editable: "text",
        },
      ],
    },
  ];
</script>

<Example>
  <svelte:fragment slot="preview">
    <SimpleCard>
      Address
      <address>
        {code[0].nodes[0].text}
      </address>

      Time
      <time datetime={code[1].attributes[0].value}>
        {code[1].nodes[0].text}
      </time>
    </SimpleCard>
  </svelte:fragment>
  <svelte:fragment slot="controls">
    <HTMLEditor value={code} on:update={({ detail }) => (code = detail.text)} />
  </svelte:fragment>
</Example>
