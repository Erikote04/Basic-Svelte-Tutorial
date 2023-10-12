<script>
  // INTRODUCTION
  import Nested from './Nested.svelte'
  let src = './assets/svelte.svg'
  let name = 'Svelte'
  let string = 'This string contains some <strong>HTML!!!</strong>'

  // REACTIVITY
  let count = 0
  function increment() {
    count += 1
  }
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
</main>

<style>
  p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
