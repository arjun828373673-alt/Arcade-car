const heroImages = [
    "image/amg1.jpg",
    "image/range rover.jpg",
    "image/defender.avif",
    "image/Thar-IMG_1.webp"
];

function rotateHeroImage() {
    const heroImageElement = document.getElementById("hero-image");
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % heroImages.length;
        heroImageElement.src = heroImages[currentIndex];
    }, 3000);
}
document.getElementById("explore-button").addEventListener("click", () => showView('hero-section'));