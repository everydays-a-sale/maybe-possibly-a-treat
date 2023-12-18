<script>
    import { base } from '$app/paths';
    let sounds = ['clap', 'gj', 'woo', 'woof', 'yay', 'youdidit'];
    let images = ['click', 'milliehat', 'dawg', 'rabbit', 'rats'];

    let soundFileType = '.wav';
    let imageFileType = '.png';

    let currentImage=`${base}/images/${images[0]}${imageFileType}`;


    let maxSoundIndex = sounds.length - 1;
    let minSoundIndex = 0;
    let currentSoundIndex = -1;

    let maxImageIndex = images.length - 1;
    let minImageIndex = 1;
    let currentImageIndex = 1;

    function getRandomIndex(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function playAudio() {
        const audio = new Audio();
        let randomIndex = getRandomIndex(minSoundIndex, maxSoundIndex);
        while (randomIndex === currentSoundIndex) {
            randomIndex = getRandomIndex(minSoundIndex, maxSoundIndex);
        }
        currentSoundIndex = randomIndex;
        audio.src = `${base}/sounds/${sounds[randomIndex]}${soundFileType}`;
        audio.play();
    }

    function changeImage() {
        let randomIndex = getRandomIndex(minImageIndex, maxImageIndex);
        while (randomIndex === currentImageIndex) {
            randomIndex = getRandomIndex(minImageIndex, maxImageIndex);
        }
        currentImageIndex = randomIndex;
        currentImage = `${base}/images/${images[randomIndex]}${imageFileType}`
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
        border:2px solid rgba(216, 244, 247, 0.397);
    }

    .circular-img:hover{
        border:2px solid #76dff1;
        box-shadow: 0 0 50px 5px #76dff1;
    }
</style>
