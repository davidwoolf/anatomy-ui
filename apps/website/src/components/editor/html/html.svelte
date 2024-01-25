<script>
  import { createEventDispatcher } from "svelte";
  import Element from "./element.svelte";

  const dispatch = createEventDispatcher();

  /**
   * @type {Record<string, Object>}
   */
  export let value;
  export let allowCopying = true;

  /* copy logic */
  let copied = false;

  function getSanitizedValue(value) {
    const { attributes, tag, ...nodes } = value;

    return nodes;
  }

  function getAttributes(value) {
    let text = "";

    if (value && typeof value === "object" && "attributes" in value) {
      Object.entries(value.attributes).forEach(([key, value]) => {
        text = ` ${key}="${value}"`;
      });
    }

    return text;
  }

  /**
   *
   * @param {Object} value
   */
  function generateCode(value) {
    let text = "";

    Object.entries(value).forEach(([key, children]) => {
      if (children && typeof children === "object" && "tag" in children) {
        text = text + `<${children.tag}${getAttributes(children)}`;

        if (Object.values(getSanitizedValue(children)).length !== 0) {
          text = text + ">";
        } else {
          text = text + "/>";
        }
      }

      if (key !== "text" && key !== "attributes" && key !== "tag") {
        text = text + `${generateCode(children)}`;
      } else if (key === "text") {
        text = text + `${children}`;
      } else {
      }

      if (children && typeof children === "object" && "tag" in children) {
        if (Object.values(getSanitizedValue(children)).length !== 0) {
          text = text + `</${children.tag}>\n`;
        }
      }
    });

    return text;
  }

  $: {
    if (copied) {
      setTimeout(() => (copied = false), 1000);
    }
  }
</script>

<div class="container">
  {#each Object.entries(value) as [key, children], index (index)}
    {#if index !== 0}
      <div class="spacer" />
    {/if}

    <Element
      value={children}
      tag={children.tag}
      on:update={({ detail }) => {
        dispatch("update", {
          text: {
            ...value,
            [key]: {
              ...children,
              ...detail.text,
            },
          },
        });
      }} />
  {/each}

  {#if allowCopying}
    <div>
      <button
        type="button"
        class="copy-code"
        on:click={async () => {
          const text = generateCode(value);

          try {
            await navigator.clipboard.writeText(text);
            copied = true;
          } catch (err) {}
        }}>
        {copied ? "copied!" : "copy code"}
      </button>
    </div>
  {/if}
</div>

<style>
  .container {
    font-family: var(--font-mono);
    font-size: var(--font-size-base);
    font-weight: 500;
    line-height: 185%;
  }

  .copy-code {
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    opacity: 0.7;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    .container {
      font-size: var(--font-size-sm);
    }
  }
</style>
