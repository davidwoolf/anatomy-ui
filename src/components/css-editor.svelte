<script>
  import { createEventDispatcher } from "svelte";
  import EditorItem from "./editor-item.svelte";

  const dispatch = createEventDispatcher();

  export let allowCopying = true;

  /** @type {{
   *  selector: string;
   *  value: {
   *    property: string;
   *    type: string;
   *    value: string;
   *    options?: string[]
   *  }[]
   * }[]
   * } */
  export let value;
  /** @type {number} */
  let timeout;
  let copied = false;

  async function generateCode() {
    const text = value
      .map(
        (selector) =>
          `${selector.selector} {\n\t${selector.value
            .map((item) => `${item.property}: ${item.value};`)
            .join("\n\t")}\n}`
      )
      .join("\n\n");

    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch (err) {}
  }

  /**
   *
   * @param {string} newValue
   * @param {string} selector
   * @param {string} property
   */
  function handleInput(newValue, selector, property) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch("update", {
        text: value.map((item) => {
          if (item.selector !== selector) return item;

          return {
            ...item,
            value: item.value.map((subItem) => {
              if (subItem.property !== property) return subItem;

              return {
                ...subItem,
                value: newValue,
              };
            }),
          };
        }),
      });
    }, 250);
  }

  $: {
    if (copied) {
      setTimeout(() => (copied = false), 1000);
    }
  }
</script>

<div class="container">
  {#each value as item, index}
    {#if index !== 0}
      <div class="spacer" />
    {/if}
    <span class="selector">{`${item.selector} {`}</span>

    <div class="fields">
      {#each item.value as value}
        <EditorItem label={value.property}>
          {#if value.type === "static"}
            <span class="static">{value.value}</span>
          {:else if value.type === "text"}
            <input
              type="text"
              size={value.value.length >= 3 ? value.value.length : 3}
              value={value.value}
              on:input={(e) => {
                // @ts-expect-error
                handleInput(e.target.value, item.selector, value.property);
              }} />
          {:else if value.type === "select"}
            <div class="select" style:width="{value.value.length * 9 + 16}px">
              <select
                value={value.value}
                on:change={(e) => {
                  // @ts-expect-error
                  handleInput(e.target.value, item.selector, value.property);
                }}>
                {#if value.options}
                  {#each value.options as option}
                    <option value={option}>{option}</option>
                  {/each}
                {/if}
              </select>
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.664062 0.5L5.66406 5.5L10.6641 0.5"
                  stroke="currentcolor"
                  stroke-linecap="round" />
              </svg>
            </div>
          {/if}
        </EditorItem>
      {/each}
    </div>

    <span class="selector end">{`}`}</span>
  {/each}

  {#if allowCopying}
    <button type="button" class="copy-code" on:click={generateCode}>
      {copied ? "copied!" : "copy code"}
    </button>
  {/if}
</div>

<style>
  .container {
    font-family: var(--font-mono);
    font-size: var(--font-size-base);
    font-weight: 500;
    line-height: 185%;
  }

  .fields {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
  }

  .selector {
    display: block;
    opacity: 0.5;
  }

  .spacer {
    height: 0.5rem;
  }

  .static {
    cursor: not-allowed;
    opacity: 0.7;
  }

  input {
    appearance: none;
    border-radius: 0.25rem;
    font-size: inherit;
    line-height: 145%;
    outline: none;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: var(--color-gray-300);
    transition: color 75ms ease;
    width: auto;
  }

  input:hover,
  input:focus-visible {
    color: var(--color-purple-400);
    text-underline-offset: 4px;
  }

  .copy-code {
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    opacity: 0.7;
    text-decoration: underline;
  }

  .select {
    background: #fff;
    border-bottom: 1px solid var(--color-gray-300);
    position: relative;
    min-width: 4rem;
  }

  .select select {
    appearance: none;
    box-sizing: border-box;
    font-family: var(--font-mono);
    font-size: inherit;
    line-height: 1;
    overflow: hidden;
    padding: 0 1rem 0 0;
    outline: none;
    width: 100%;
  }

  .select svg {
    block-size: 6px;
    color: var(--color-gray-800);
    inline-size: 11px;
    inset-block-start: 50%;
    inset-inline-end: 0;
    margin-block-start: 1px;
    opacity: 0.6;
    position: absolute;
    transform: translateY(-50%);
    pointer-events: none;
  }

  @media (min-width: 1024px) {
    .container {
      font-size: var(--font-size-sm);
    }
  }
</style>
