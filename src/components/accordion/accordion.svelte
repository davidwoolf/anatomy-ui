<script>
  import { accordion } from "./action";

  /** @type {string | undefined} */
  export let defaultValue = undefined;

  /** @type {string | undefined} */
  export let value = undefined;
</script>

<div
  use:accordion={{
    defaultValue,
    value,
  }}
  {...$$restProps}>
  <slot />
</div>
