<div class="section-head">
  <slot />
</div>

<style lang="postcss">
  :global(.section-head h1) {
    @apply font-normal
    leading-none
    tracking-snug
    text-3xl
    md:text-4xl
    lg:font-light
    lg:text-5xl;
  }

  :global(.section-head p) {
    @apply mt-2
    text-gray-800/80
    text-lg
    lg:mt-6
    lg:text-xl;
  }
</style>
