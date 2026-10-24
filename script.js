
const hero = document.querySelector(".hero");
const heroArt = document.querySelector(".hero-art");

// 1. Mouse glow and 3D artwork movement
if (hero && heroArt) {
    hero.addEventListener("mousemove", (event) => {
        const rect = hero.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const percentX = x / rect.width;
        const percentY = y / rect.height;

        hero.style.setProperty("--mouse-x", `${x}px`);
        hero.style.setProperty("--mouse-y", `${y}px`);

        const rotateY = (percentX - 0.5) * 12;
        const rotateX = (0.5 - percentY) * 12;

        heroArt.style.transform =
            `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    hero.addEventListener("mouseleave", () => {
        heroArt.style.transform =
            "perspective(800px) rotateX(0deg) rotateY(0deg)";

        hero.style.setProperty("--mouse-x", "-300px");
        hero.style.setProperty("--mouse-y", "-300px");
    });
}

// 2. Reveal sections as visitors scroll
const sections = document.querySelectorAll(
    "section:not(.hero)"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
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


