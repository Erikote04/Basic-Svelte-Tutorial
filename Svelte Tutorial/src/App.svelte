<script>
// @ts-nocheck
  // INTRODUCTION
  import Nested from './Nested.svelte';
  let src = './assets/svelte.svg';
  let name = 'Svelte';
  let string = 'This string contains some <strong>HTML!!!</strong>';

  // REACTIVITY
  let count = 0;
  function increment() {
    count += 1;
  }
  $: doubled = count * 2;
  $: if (count >= 10) {
    alert('count is dangerously high!');
    count = 0;
  }
  let numbers = [1, 2, 3, 4];
  function addNumber() {
    numbers[numbers.length] = numbers.length + 1;
  }
  $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);

  // PROPS
  import PackageInfo from './PackageInfo.svelte';
	const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev'
	};
</script>

<main>
  <!--INTRODUCTION-->
  <h1>Hello {name.toUpperCase()}!</h1>
  <p>This is a paragraph</p>
  <img {src} alt="{name} logo">
  <p>{@html string}</p> 

  <!--REACTIVITY-->
  <p>{numbers.join(' + ')} = {sum}</p>
  <button on:click={addNumber}>
    Add a number
  </button>
  <button on:click={increment}>
    Clicked {count}
    {count === 1 ? 'time' : 'times'}
  </button>
  <p>{count} doubled is {doubled}</p>

  <!--LOGIC-->
  {#if count > 10}
    <p>{count} is greater than 10</p>
  {:else if count < 5}
    <p>{count} is less than 5</p>
  {:else}
    <p>{count} is between 5 and 10</p>
  {/if}

  <!--PROPS-->
  <Nested answer={42} />
  <Nested />
  <PackageInfo {...pkg}/>
</main>

<style>
  p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
