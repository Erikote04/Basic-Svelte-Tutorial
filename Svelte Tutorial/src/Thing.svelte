<script>
	const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};	
	export let name; // the name is updated whenever the prop value changes, but the "emoji" variable is fixed upon initialisation of the component because it uses `const` instead of `$:`
	const emoji = emojis[name];
</script>

<p>{emoji} = {name}</p>