<script>
  import { createEventDispatcher } from "svelte";
  import Attributes from "./attributes.svelte";
  import Element from "./element.svelte";
  import Text from "@components/editor/text.svelte";
  import Textarea from "@components/editor/textarea.svelte";
  import Static from "@components/editor/static.svelte";
  import { text } from "@sveltejs/kit";

  const dispatch = createEventDispatcher();

  /**
   * @typedef Nodes
   * @property {string} [tag]
   * @property {string} [text]
   * @property {"text" | "textarea"} [editable]
   * @property {{ name: string; value: string; editable: "text"}[]} [attributes]
   * @property {Nodes[]} [nodes]
   * */

  /** @type {string | undefined} */
  export let tag = undefined;
  /** @type {{ name: string; value: string; editable: "text"}[]} */
  export let attributes = [];
  /** @type {Nodes[]} */
  export let nodes = [];

  /**
   *
   * @param {any} value
   */
  function updateElement(value) {
    dispatch("update", {
      text: {
        tag,
        attributes,
        nodes,
        ...value,
      },
    });
  }
</script>

<div class="element">
  {#if tag}
    <span class="selector">
      <span class="keyword">{"<"}</span>
      {tag}

      {#if attributes.length}
        <Attributes
          {attributes}
          on:update={({ detail }) =>
            updateElement({
              attributes: detail.text,
            })} />
      {/if}

      {#if nodes.length}
        <span class="keyword">{">"}</span>
      {:else}
        <span class="keyword">{"/>"}</span>
      {/if}
    </span>
  {/if}

  {#if nodes.length}
    {#each nodes as node, index (index)}
      {#if node.text}
        <div class="inner-element">
          {#if node.editable === "text"}
            <Text
              value={node.text}
              on:update={({ detail }) =>
                updateElement({
                  nodes: nodes.map((item, itemIndex) => {
                    if (itemIndex !== index) return item;

                    return {
                      ...item,
                      text: detail.text,
                    };
                  }),
                })} />
          {:else if node.editable === "textarea"}
            <Textarea
              value={node.text}
              on:update={({ detail }) =>
                updateElement({
                  nodes: nodes.map((item, itemIndex) => {
                    if (itemIndex !== index) return item;

                    return {
                      ...item,
                      text: detail.text,
                    };
                  }),
                })} />
          {:else}
            <Static value={node.text} />
          {/if}
        </div>
      {:else if node.nodes}
        <div class="inner-element">
          <Element
            {...node}
            on:update={({ detail }) => {
              // @TODO this is hella broken
            }} />
        </div>
      {:else}
        <span class="selector">
          <span class="keyword">{"</"}</span>
          {tag}
          <span class="keyword">{">"}</span>
        </span>
      {/if}
    {/each}

    <span class="selector">
      <span class="keyword">{"</"}</span>
      {tag}
      <span class="keyword">{">"}</span>
    </span>
  {/if}
</div>

<style>
  .inner-element {
    margin-inline-start: 1rem;
  }

  .selector {
    color: var(--color-green-400);
    display: inline flex;
    white-space: nowrap;
    white-space-collapse: collapse;
  }

  .keyword {
    color: color-mix(in srgb, var(--color-gray-800), white 60%);
  }
</style>
