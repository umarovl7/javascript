const btn = document.querySelector("button");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
btn.addEventListener("click", () => {
    const rndcol = `rgb(${random(235)} ${random(235)} ${random(235)})`;
    document.body.style.backgroundColor = rndcol;
});