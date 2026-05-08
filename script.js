const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const video = card.querySelector(".player-highlight");

    card.addEventListener("mouseenter", () => {
        video.play();
    });

    card.addEventListener("mouseleave", () => {
        video.pause();
    });
});

