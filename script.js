// const btn = document.querySelector("button");

// function random(number) {
   // return Math.floor(Math.random() * (number + 1));
// }
// btn.addEventListener("click", () => {
   // const rndcol = `rgb(${random(235)} ${random(235)} ${random(235)})`;
   // document.body.style.backgroundColor = rndcol;
// });
const sneakers1 = {
    firstName: "Puma",
    lastName: "Reebok",
    price: "$500",
    color: "black"
}

const sneakers2 = {firstName: "Puma" , lastname: "Fashion"};

Object.assign(sneakers1, sneakers2);

let text = Object.entries(sneakers1);
document.getElementById("sirit").innerHTML = text;