<script>
  import { createEventDispatcher } from "svelte";
  import Attributes from "./attributes.svelte";
  import Element from "./element.svelte";
  import Text from "@components/editor/text.svelte";

  const dispatch = createEventDispatcher();

  /** @type {string} */
  export let tag;
  /** @type {Object} */
  export let value;

  function getSanitizedValue(value) {
    const { attributes, tag, ...nodes } = value;

    return nodes;
  }
</script>

<div class="element">
  {#if value.attributes}
    <div class="selector">
      <span class="keyword">{"<"}</span>
      {tag}
    </div>

    <Attributes
      attributes={value.attributes}
      closingTag={Object.values(getSanitizedValue(value)).length !== 0 ? ">" : "/>"}
      on:update={({ detail }) => {
        dispatch("update", {
          text: {
            attributes: {
              ...value.attributes,
              ...detail.text,
            },
          },
        });
      }} />
  {:else}
    <div class="selector">
      <span class="keyword">{"<"}</span>
      {tag}

      {#if Object.values(getSanitizedValue(value)).length !== 0}
        <span class="keyword">{">"}</span>
      {:else}
        <span class="keyword">{"/>"}</span>
      {/if}
    </div>
  {/if}

  {#each Object.entries(value) as [key, children], index (index)}
    {#if index !== 0}
      <div class="spacer" />
    {/if}

    {#if key !== "text" && key !== "attributes" && key !== "tag"}
      <div class="inner-element">
        <Element
          value={children}
          tag={children.tag}
          on:update={({ detail }) => {
            dispatch("update", {
              text: {
                [key]: {
                  ...children,
                  ...detail.text,
                },
              },
            });
          }} />
      </div>
    {/if}

    {#if key === "text"}
      <div class="inner-element">
        <Text
          value={children}
          on:update={({ detail }) => {
            dispatch("update", {
              text: {
                text: detail.text,
              },
            });
          }} />
      </div>
    {/if}
  {/each}

  {#if Object.values(getSanitizedValue(value)).length !== 0}
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

  .element {
    display: inline;
  }

  .selector {
    color: var(--color-green-400);
    display: inline flex;
  }

  .keyword {
    color: color-mix(in srgb, var(--color-gray-800), white 60%);
  }
</style>
