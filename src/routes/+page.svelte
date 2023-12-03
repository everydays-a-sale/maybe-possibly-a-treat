<script>
	import SoundButton from './SoundButton.svelte';
</script>

<svelte:head>
	<title>possibly a treat</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<SoundButton />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
