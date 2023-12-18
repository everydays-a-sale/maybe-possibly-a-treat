<script>
	import Header from './Header.svelte';
	import './styles.css';

	let toggle = false;
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<a href="/" class="hint" on:click={() => (toggle = !toggle)}>
			nothing to see here :) or maybe if you click this it'll be easier to read the scrolling header
		</a>
		{#if toggle}
		<p>
			"this is, maybe, possibly, a treat. it is intentionally difficult to read this, so I hope you can view this without spending too much time! I can't really sing to replicate your treat, so I did something I kinda know how to do - make a stupid and annoying website. I've said it before, but I really respect your dedication to school and studying (AND still trying to moderate the subreddit), especially when I compare to myself. ^_^ I hope you have a really good break, because you deserve it! I also hope this stupid little treat made you a bit happy after the usual painful exam season!"
		</p>
		{/if}
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.hint:hover {
        text-shadow: 2px 2px 5px #76dff1;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		margin-left: 36px;
		margin-right: 36px;
		margin-bottom: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
