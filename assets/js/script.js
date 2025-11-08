AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const videoBoxes = document.querySelectorAll(".articleBoxMedia");

    videoBoxes.forEach((box) => {
        const video = box.querySelector("video");
        const playBtn = box.querySelector(".videoPlayBtn");

        if (!video || !playBtn) return;

        playBtn.addEventListener("click", function (e) {
            e.stopPropagation();

            document.querySelectorAll(".articleBoxMedia video").forEach((v) => {
                if (v !== video) {
                    v.pause();
                    v.closest(".articleBoxMedia").classList.remove("active");
                    const btn = v.closest(".articleBoxMedia").querySelector(".videoPlayBtn");
                    if (btn) btn.style.opacity = "1";
                }
            });

            if (video.paused) {
                video.play();
                box.classList.add("active");
                playBtn.style.opacity = "0";
            } else {
                video.pause();
                box.classList.remove("active");
                playBtn.style.opacity = "1";
            }
        });

        video.addEventListener("play", () => (playBtn.style.opacity = "0"));
        video.addEventListener("pause", () => (playBtn.style.opacity = "1"));
        video.addEventListener("ended", () => (playBtn.style.opacity = "1"));
    });
});
