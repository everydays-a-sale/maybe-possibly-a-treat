<script>
    let marqueeText = "this is, maybe, possibly, a treat. it is intentionally difficult to read this, so I hope you can view this without spending too much time! I can't really sing to replicate your treat, so I did something I kinda know how to do - make a stupid and annoying website. I've said it before, but I really respect your dedication to school and studying (AND still trying to moderate the subreddit), especially when I compare to myself. ^_^ I hope you have a really good break, because you deserve it! I also hope this stupid little treat made you a bit happy after the usual painful exam season! "
</script>

<header>
    <nav>
        <div class="marquee-container">
            <div class="marquee">
                <span class="marquee-text">
                    {marqueeText}
                </span>
                <span class="marquee-text">
                    {marqueeText}
                </span>
            </div>
        </div>
    </nav>
</header>

<style>
    nav {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    .marquee-container {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
    }

    .marquee {
        display: inline-block;
        animation: marquee 14s linear infinite;
    }

    .marquee-text {
        font-size: 100px;
    }

    @keyframes marquee {
        0% {
            transform: translateX(0%);
        }

        100% {
            transform: translateX(-50%);
        }
    }
</style>
