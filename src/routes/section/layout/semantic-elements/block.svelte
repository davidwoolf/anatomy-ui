<script lang="ts">
  export let active: boolean;
  export let tag: string;
</script>

<div
  class="
    semantic-element-block
    border
    border-purple-400/10
    flex
    grow
    max-h-96
    ml-2
    overflow-hidden
    relative
    rounded-lg
    shadow-sm
    shrink-0
    snap-start
    w-11/12
    
    sm:max-h-80
    sm:w-auto

    {active ? 'sm:block' : 'sm:hidden'}
  ">
  <div class="p-8 overflow-scroll">
    <h2 class="text-lg font-bold">
      the
      <span class="font-mono text-purple-400 font-semibold">
        &lt;{tag}&gt;
      </span>
      element
    </h2>
    <slot />
  </div>

  <div class="absolute bottom-0 left-0 right-0 h-8 overflow-background" inert />
</div>

<style lang="postcss">
  :global(.semantic-element-block p) {
    @apply mt-3
    text-gray-800/80
    text-base;
  }

  :global(.semantic-element-block ul) {
    @apply list-disc list-inside mt-3
    text-gray-800/80
    text-base;
  }

  :global(.semantic-element-block p a) {
    @apply underline hover:text-yellow-400 transition-all;
  }

  :global(.semantic-element-block p code) {
    @apply p-0.5 bg-purple-400/10 rounded-sm font-mono font-semibold text-purple-400 text-[.875em];
  }

  :global(.semantic-element-block pre) {
    @apply mt-3 text-sm;
  }

  :global(.hljs-tag, .hljs-keyword, .hljs-built_in, .hljs-params) {
    @apply text-gray-400;
  }

  :global(.hljs-comment) {
    @apply text-gray-500;
  }

  :global(.hljs-name, .hljs-attr, .hljs-selector-tag) {
    @apply text-green-400;
  }

  :global(.hljs-title, .hljs-string, .hljs-attribute) {
    @apply text-yellow-400;
  }

  .overflow-background {
    background: linear-gradient(to top, white, rgb(255 255 255 / 0));
  }
</style>
