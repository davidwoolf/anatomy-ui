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

  :global(.component--text code) {
    background-color: color-mix(in srgb, var(--color-gray-300), white 70%);
    color: var(--color-gray-800);
    border-radius: 0.25rem;
    font-family: var(--font-mono);
    font-size: 0.875em;
    font-weight: 600;
    padding: 0.125rem;
  }

  @media (min-width: 768px) {
    :global(.component--text p, .component--text ul, .component--text ol) {
      font-size: var(--paragraph-size);
    }
  }
</style>
