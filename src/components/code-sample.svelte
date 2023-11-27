<script lang="ts">
  import hljs from "highlight.js";
  export let value: string;
  export let language = "plaintext";

  const formattedCode = hljs.highlight(value.trim(), { language });
</script>

<pre class="text-xs bg-gray-50 overflow-scroll p-4 rounded-sm"><code
    class="language-{formattedCode.language}">{@html formattedCode.value}</code></pre>

<style lang="postcss">
  :global(.hljs-tag, .hljs-keyword, .hljs-built_in, .hljs-params, .hljs-comment) {
    @apply text-slate-500;
  }

  :global(.hljs-name, .hljs-attr, .hljs-selector-tag) {
    @apply text-emerald-700;
  }

  :global(.hljs-title, .hljs-string, .hljs-attribute) {
    @apply text-emerald-900;
  }
</style>
