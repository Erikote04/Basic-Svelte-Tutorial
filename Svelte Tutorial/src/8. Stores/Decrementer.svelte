<script>
	import { count } from './writableStores.js';

	function decrement() {
		count.update((n) => n - 1);
	}
</script>

<button on:click={decrement}>
	-
</button>
