const intro = document.getElementById("intro");
const openBtn = document.getElementById("openLetter");

openBtn.addEventListener("click", () => {

    intro.style.transition = ".8s";
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.remove();
    }, 800);

});

/* CONTADOR */

const startDate = new Date("2023-06-12");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    document.getElementById(
        "relationshipTime"
    ).innerHTML = `
        ❤️ ${days} dias
    `;

}

updateCounter();

/* SLIDER */

const photos =
document.querySelectorAll(".slider img");

let current = 0;

setInterval(() => {

    photos[current].classList.remove("active");

    current++;

    if(current >= photos.length){
        current = 0;
    }

    photos[current].classList.add("active");

}, 3000);

/* CORAÇÕES */

document
.getElementById("heartBtn")
.addEventListener("click", () => {

    for(let i = 0; i < 20; i++){

        const heart =
        document.createElement("div");

        heart.innerHTML = "❤️";

        heart.className =
        "floating-heart";

        heart.style.left =
        Math.random() * 100 + "vw";

        heart.style.bottom = "0";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);

    }

});