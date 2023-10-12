<script>
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
  /*
  $: console.log(`the count is ${count}`); -> This will log the value of count whenever it changes
  $: {
    console.log(`the count is ${count}`);
    console.log(`this will also be logged whenever count changes`);
  }
  */
</script>

<main>
  <!--INTRODUCTION-->
  <h1>Hello {name.toUpperCase()}!</h1>
  <p>This is a paragraph</p>
  <img {src} alt="{name} logo">
  <Nested />
  <p>{@html string}</p> 

  <!--REACTIVITY-->
  <button on:click={increment}>
    Clicked {count}
    {count === 1 ? 'time' : 'times'}
  </button>
  <p>{count} doubled is {doubled}</p>

  <p>{numbers.join(' + ')} = {sum}</p>
  <button on:click={addNumber}>
    Add a number
  </button>
</main>

<style>
  p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
