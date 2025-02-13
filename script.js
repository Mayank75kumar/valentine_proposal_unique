document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bg-music");
    bgMusic.play();
});

function openGift() {
    document.getElementById("gift-box").style.display = "none";
    document.getElementById("proposal").classList.remove("hidden");
}

function acceptProposal() {
    startConfetti();
    alert("Yay! ❤️ Love You Forever!");
}

function rejectProposal() {
    alert("Oh no! 😢 But I'll always love you!");
}

// Confetti Effect
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;
let confetti = [];

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 5 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`
        });
    }
    requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confetti.forEach((c, i) => {
        c.y += c.d;
        if (c.y > confettiCanvas.height) c.y = 0;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
    });
    requestAnimationFrame(updateConfetti);
}
