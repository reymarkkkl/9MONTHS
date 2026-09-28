const intro = document.getElementById("intro");
const envelopeSection = document.getElementById("envelopeSection");
const envelope = document.querySelector(".envelope");
const loveLetter = document.getElementById("loveLetter");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");


function openEnvelope() {

    
    intro.classList.add("hide");

    
    setTimeout(() => {

        envelopeSection.classList.add("show");

    }, 700);


    
    setTimeout(() => {

        envelope.classList.add("open");

    }, 1200);


    
    setTimeout(() => {

        envelopeSection.classList.remove("show");

        loveLetter.classList.add("show");

        document.body.style.background = "#fff8f5";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 3000);

}




let playing = false;

function toggleMusic() {

    if (!playing) {

        music.play()
            .then(() => {

                playing = true;

                musicBtn.innerHTML = "❚❚";

            })
            .catch(() => {

                alert(
                    "Lagyan muna ng music.mp3 ang folder ng website."
                );

            });

    } else {

        music.pause();

        playing = false;

        musicBtn.innerHTML = "♪";

    }

}




const particles = document.querySelector(".particles");

for (let i = 0; i < 35; i++) {

    const particle = document.createElement("span");

    particle.style.position = "fixed";
    particle.style.width = "2px";
    particle.style.height = "2px";
    particle.style.borderRadius = "50%";
    particle.style.background = "rgba(255,220,230,0.7)";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.animation = `
        twinkle ${2 + Math.random() * 4}s ease-in-out infinite
    `;

    particle.style.animationDelay =
        Math.random() * 4 + "s";

    particles.appendChild(particle);
}




const style = document.createElement("style");

style.innerHTML = `

@keyframes twinkle {

    0%, 100% {
        opacity: 0.1;
        transform: scale(0.5);
    }

    50% {
        opacity: 1;
        transform: scale(1.5);
    }

}

`;

document.head.appendChild(style);
