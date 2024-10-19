const animation = document.querySelector(".animation");

      

    for (let i = 0; i < 100; i++) {
        const block = document.createElement("div");
        const img = document.createElement("img");

        img.src = "./images/airbnb-logo.png";
        img.alt = "Airbnb Logo";
        img.classList.add("max-h-full", "max-w-full");

        block.classList.add("block", "flex", "items-center", "justify-center", "w-20", "h-20", "bg-white", "shadow-md", "rounded-lg");

        block.appendChild(img);
        animation.appendChild(block);
    }

        function animateBlocks() {
            anime({
                targets: ".block",
                translateX: () => anime.random(-700, 700),
                translateY: () => anime.random(-200, 200),
                scale: () => anime.random(1, 3),
                easing: "easeOutBack",
                duration: 4000,
                delay: anime.stagger(50),
                complete: animateBlocksAfter, // Chain the next animation
            });
        }

        function animateBlocksAfter() {
            anime({
                targets: ".block",
                translateX: () => anime.random(-700, 700),
                translateY: () => anime.random(-250, 250),
                scale: () => anime.random(1, 3),
                easing: "linear",
                duration: 10000,
                complete: animateBlocksAfter, // Loop animation
            });
        }

        animateBlocks(); // Start the animation