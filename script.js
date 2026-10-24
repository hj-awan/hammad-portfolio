console.log("Hammad Portfolio JavaScript is connected!");

const hero = document.querySelector(".hero");
const heroArt = document.querySelector(".hero-art");

if (hero && heroArt) {
    hero.addEventListener("mousemove", (event) => {
        const rect = hero.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX = (x / rect.width - 0.5) * 20;
        const moveY = (y / rect.height - 0.5) * 20;

        heroArt.style.transform =
            `translate(${moveX}px, ${moveY}px)`;
    });

    hero.addEventListener("mouseleave", () => {
        heroArt.style.transform = "translate(0, 0)";
    });
}
