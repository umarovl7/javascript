// const btn = document.querySelector("button");

// function random(number) {
   // return Math.floor(Math.random() * (number + 1));
// }
// btn.addEventListener("click", () => {
   // const rndcol = `rgb(${random(235)} ${random(235)} ${random(235)})`;
   // document.body.style.backgroundColor = rndcol;
// });
// const sneakers1 = {
   // firstName: "New Balance",
    //lastName: "Converse",
    // price: 300, 
  //  color: "brown"
//};

//const sneakers2 = { firstName: "Nike", lastName: "Jordan" }; 

//Object.assign(sneakers1, sneakers2);


//let text = Object.values(sneakers1); 

//document.getElementById("advent").innerHTML = text;

//function Person(first, last, age, hair) {
 // this.firstname = first;
  // this.lastname = last;
  // this.age = age;
  // this.hair = hair;
//}

//Person.prototype.gender = "female";

//const sister = new Person("Nairobi", "Gaztambide", "29", "dark");

//document.getElementById("spirit").innerHTML = 
  //"The age of my sister is " + sister.age;



  //function Meal(name, origin, century) {
   //this.name = name;
   //this.origin = origin;
   //this.century = century;
//}


//Meal.prototype.ingredients = ["rice", "carrots", "onions", "water"];

//const meal = new Meal("Palov", "Uzbekistan", "10th");

//document.getElementById("meal").innerHTML =
  //"The origin of the meal is " + meal.origin;



  //   const car = {
//   Name: "Porsche"
  // model: "S Turbo 911",
 //  year: 2024,
 //  color: "black"
// };

// document.getElementById("demo").innerHTML =
// car.Name + " is " + car.color + " car. ";


//const message=alert('Hello World');
//console.log(message);

//const age=confirm("are you above 18?");
//console.log(age);

//const message=+prompt("son kiritng");
//console.log(typeof(message));

//let a=prompt("birinchi son");
//a=Number(a);
//let b=prompt("ikkinchi son");
//b=Number(b);
//let c=a+b;
//console.log(c);


//let userName = prompt("Ismingizni kiriting:");
//if (userName !== null) {
  //alert("Salom, " + userName + "!");
//} else {
 // alert("Ism kiritilmadi.");
//}


//let isConfirmed = confirm("Siz haqiqatdan ham davom etishni xohlaysizmi?");
//if (isConfirmed) {
  //alert("Siz davom etishni tanladingiz.");
//} else {
// alert("Siz bekor qildingiz.");
//}

//alert("Bu ogohlantirish!");


//let n=prompt("son kirit");
//n=Number(n);
//let s=prompt("2-son kirit");
//s=Number(s);
//let d=n/s;
//console.log(d);

//const message=alert("Do not enter this website");
//console.log(message);

//const age=confirm("are you a male?");
//console.log(age);

const university = {
  name: "Leland Stanford Junior University",
  founded: 1885,
  type: "Private research university",
  website: "	stanford.edu"
};
document.getElementById("demo").innerHTML =
university.name + " is " + university.type + ".";