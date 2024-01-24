<script>
  /** @type {string | undefined}*/
  export let value = undefined;
</script>

<div {...$$restProps} data-value={value}>
  <slot />
</div>
