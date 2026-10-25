
const hero = document.querySelector(".hero");
const heroArt = document.querySelector(".hero-art");

// 1. Interactive hero glow and artwork movement
if (hero && heroArt) {
    hero.addEventListener("mousemove", (event) => {
        const rect = hero.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        hero.style.setProperty("--mouse-x", `${x}px`);
        hero.style.setProperty("--mouse-y", `${y}px`);

        const moveX = (x / rect.width - 0.5) * 24;
        const moveY = (y / rect.height - 0.5) * 24;

        heroArt.style.translate = `${moveX}px ${moveY}px`;
    });

    hero.addEventListener("mouseleave", () => {
        heroArt.style.translate = "0px 0px";
        hero.style.setProperty("--mouse-x", "-300px");
        hero.style.setProperty("--mouse-y", "-300px");
    });
}

// 2. Reveal sections when they enter the screen
const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach((section) => {
        section.classList.add("reveal");
        observer.observe(section);
    });
} else {
    sections.forEach((section) => {
        section.classList.add("visible");
    });
}


const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const detailsId = button.getAttribute("aria-controls");
        const details = document.getElementById(detailsId);

        if (!details) return;

        const isOpening = details.hidden;

        details.hidden = !isOpening;
        button.setAttribute("aria-expanded", String(isOpening));

        button.querySelector("span").textContent =
            isOpening ? "−" : "＋";

        button.firstChild.textContent =
            isOpening ? "Hide Details " : "Explore Details ";
    });
});

