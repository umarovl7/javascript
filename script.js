// const btn = document.querySelector("button");

// function random(number) {
   // return Math.floor(Math.random() * (number + 1));
// }
// btn.addEventListener("click", () => {
   // const rndcol = `rgb(${random(235)} ${random(235)} ${random(235)})`;
   // document.body.style.backgroundColor = rndcol;
// });
const sneakers1 = {
    firstName: "New Balance",
    lastName: "Converse",
    price: 300, 
    color: "brown"
};

const sneakers2 = { firstName: "Nike", lastName: "Jordan" }; 

Object.assign(sneakers1, sneakers2);


let text = Object.values(sneakers1); 

document.getElementById("advent").innerHTML = text;
