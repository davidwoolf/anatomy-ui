<script>
  /** @type {string} */
  export let value;
</script>

<span class="control">{@html value.split("\n").join("<br />")}</span>

<style>
  .control {
    cursor: not-allowed;
    opacity: 0.7;
  }
</style>
