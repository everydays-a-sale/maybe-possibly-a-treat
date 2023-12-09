<script>
    function playAudio() {
        const audio = new Audio();
        audio.src = "https://freesound.org/data/previews/536/536420_4921277-lq.mp3";
        audio.play();
    }

    let currentImage="/sveltekit-github-pages/images/millie-1.png";
    let maxImageIndex = 3;
    let minImageIndex = 1;
    let currentImageIndex = 1;

    function getRandomIndex() {
        return  Math.floor(Math.random() * (maxImageIndex - minImageIndex + 1)) + minImageIndex;
    }

    function changeImage() {
        let randomIndex = getRandomIndex();
        while (randomIndex === currentImageIndex) {
            randomIndex = getRandomIndex();
        }
        currentImageIndex = randomIndex;
        currentImage = `/sveltekit-github-pages/images/millie-${randomIndex}.png`
    }

    function handleButton() {
        changeImage();
        playAudio();
    }
</script>

<button class="transparent-button" on:click={handleButton}>
    <img
        src={currentImage}
        alt="something to click"
        class="circular-img"
    />
</button>

<style>
    .transparent-button {
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    .circular-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        border:2px solid red;
    }
</style>
