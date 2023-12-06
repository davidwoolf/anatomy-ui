<script lang="ts">
  import "../../embed-reset.css";
</script>

<slot />

<style lang="postcss">
  :global(body) {
    -webkit-font-smoothing: antialiased;
    @apply text-gray-800;
  }
</style>
