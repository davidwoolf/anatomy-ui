<script>
  export let size = "normal";
</script>

<div
  class="component--text"
  style:--paragraph-size={size === "large"
    ? "var(--font-size-lg)"
    : "var(--font-size-base)"}>
  <slot />
</div>

<style>
  :global(.component--text h2) {
    color: var(--color-gray-800);
    font-size: var(--font-size-lg);
    font-weight: 600;
    line-height: 110%;
    text-wrap: balance;
  }

  :global(.component--text p, .component--text ul, .component--text ol) {
    color: color-mix(in srgb, var(--color-gray-800), white 20%);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: 145%;
    max-width: 65ch;
  }

  :global(.component--text ul, .component--text ol) {
    margin-block: 0.75rem;
  }

  :global(.component--text ul li) {
    margin-block-start: 0.5rem;
  }

  :global(.component--text ul li:before) {
    content: "– ";
  }

  :global(.component--text h2 + p) {
    margin-block-start: 0.5rem;
  }

  :global(.component--text p + p) {
    margin-block-start: 0.75rem;
  }

  :global(.component--text p > code) {
    background-color: color-mix(in srgb, var(--color-gray-300), white 70%);
    color: var(--color-gray-800);
    border-radius: 0.25rem;
    font-family: var(--font-mono);
    font-size: 0.875em;
    font-weight: 600;
    padding: 0.125rem;
  }

  :global(.component--text pre) {
    background-color: color-mix(in srgb, var(--color-gray-300), white 85%);
    color: var(--color-gray-800);
    border-radius: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.875em;
    font-weight: 500;
    margin: 0.75rem 0;
    padding: 1.5rem;
    overflow: scroll;
    width: 100%;
  }

  :global(.hljs-tag, .hljs-keyword, .hljs-built_in, .hljs-params) {
    color: color-mix(in srgb, var(--color-gray-300), black 20%);
  }

  :global(.hljs-name, .hljs-attr, .hljs-selector-tag) {
    color: var(--color-green-400);
  }

  :global(.hljs-comment) {
    color: color-mix(in srgb, var(--color-gray-300), black 20%);
  }

  :global(.hljs-title, .hljs-string, .hljs-attribute) {
    color: var(--color-purple-400);
  }

  @media (min-width: 768px) {
    :global(.component--text p, .component--text ul, .component--text ol) {
      font-size: var(--paragraph-size);
    }
  }
</style>
