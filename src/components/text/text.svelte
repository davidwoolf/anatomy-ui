<script>
  export let size = "normal";
</script>

<!-- style:--align={align === "top" || align === "bottom" ? `flex-${align}` : align} -->
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
  }

  :global(.component--text p) {
    color: color-mix(in srgb, var(--color-gray-800), white 20%);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: 145%;
  }

  :global(.component--text p + p) {
    margin-block-start: 0.75rem;
  }

  @media (min-width: 768px) {
    :global(.component--text p) {
      font-size: var(--paragraph-size);
    }
  }
</style>
