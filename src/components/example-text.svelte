<p>
  <slot />
</p>

<style>
  p {
    color: color-mix(in srgb, var(--color-gray-800), white 20%);
    font-size: var(--font-size-sm);
    line-height: 145%;
  }

  @media (min-width: 768px) {
    p {
      font-size: var(--font-size-base);
    }
  }
</style>
