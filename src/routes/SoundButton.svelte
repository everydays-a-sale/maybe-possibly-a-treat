<script>
	async function playAudio() {
		const audio = new Audio();
		audio.src="https://freesound.org/data/previews/536/536420_4921277-lq.mp3";
		audio.play();
	}
</script>

<div class="counter">
	<button on:click={playAudio} aria-label="Decrease the counter by one">
		cool button click here for something
	</button>
</div>

<style>

</style>