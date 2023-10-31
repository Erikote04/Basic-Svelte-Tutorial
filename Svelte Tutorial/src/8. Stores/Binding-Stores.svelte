<script>
	import { name, greeting } from './bindingStores.js';
</script>

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={() => $name += '!'}>
	Add exclamation mark!
</button>
