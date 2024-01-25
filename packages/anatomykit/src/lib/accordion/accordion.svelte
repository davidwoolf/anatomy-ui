<script>
	import { accordion } from '../_actions/accordion.js';

	/** @type {string | undefined} */
	export let defaultValue = undefined;

	/** @type {string | undefined} */
	export let value = undefined;
</script>

<div
	use:accordion={{
		defaultValue,
		value
	}}
	{...$$restProps}
>
	<slot />
</div>
