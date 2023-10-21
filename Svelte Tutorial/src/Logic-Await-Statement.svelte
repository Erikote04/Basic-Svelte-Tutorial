<script>
	import { getRandomNumber } from './utils.js';
	let promise = getRandomNumber();
	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}>
	generate random number
</button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<!--
    If you know that your promise can't reject, you can omit the catch block. 
    You can also omit the first block if you don't want to show anything until the promise resolves
-->
