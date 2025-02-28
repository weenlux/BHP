document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
    const button = document.getElementById("music-toggle");

    // Start muted, let user toggle it
    audio.pause();

    button.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            button.textContent = "Pause Music";
        } else {
            audio.pause();
            button.textContent = "Play Music";
        }
    });
});