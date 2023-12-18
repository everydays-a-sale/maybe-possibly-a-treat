<script>
    let marqueeText = "&nbsp; this is, maybe, possibly, a treat. it is intentionally difficult to read this, so I hope you can view this without spending too much time. this is just filler text to make you waste more time, but I'll probably fill this out a bit more later, just to waste more time!"
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
        animation: marquee 12s linear infinite;
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
