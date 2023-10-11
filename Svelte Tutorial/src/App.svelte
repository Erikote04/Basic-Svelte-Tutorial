<script>
  let src = './assets/svelte.svg'
  let name = 'Svelte';
</script>

<main>
  <h1>Hello {name.toUpperCase()}!</h1>

  <p>This is a paragraph</p>

  <img {src} alt="{name} logo">
</main>

<style>
  p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
