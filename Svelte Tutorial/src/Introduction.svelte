<script>
  import Nested from './Nested-For-Introduction.svelte';
  let src = './assets/svelte.svg';
  let name = 'Svelte';
  let string = 'This string contains some <strong>HTML!!!</strong>';
</script>

<main>
  <h1>Hello {name.toUpperCase()}!</h1>
  <p>This is a paragraph</p>
  <img {src} alt="{name} logo">
  <p>{@html string}</p> 
  <Nested />
</main>

<style>
  p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
