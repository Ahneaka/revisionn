// console.log("sqrt():", Math.sqrt(36));

//return middle value
// let data = [9, 3, 1, "Peter", 5];
// let size = data.length -1;
// console.log("Array size: ",size);
// console.log("Element ",data[size]);
// console.log("at() ", data.at(-1));

// let middleIndex = (data.length -1)/2;
// let middleIndex = Math.trunc((data.length -1)/2);
// if (data.length  % 2 == 0){
//     console.log(data.slice (middleIndex, middleIndex + 2));

// } else{
//     console.log(data [middleIndex]);
// }
// console.log("middleIndex", middleIndex);
// // console.log ("middle element", data [middleIndex])
// console.log ("middle element", data.slice (middleIndex, middleIndex +2))

// let myDate = new Date();
// console.log("My date:", myDate.toLocaleDateString());
// let myTime = new Time();

// onsole.log("time: ", myTime.toLocaleTimeString());

// let age = 17;
// let salary = 5000;
// if (age > 17){
//     if (salary >= 5000){
//         console.log("well done");
//     }
// } else{
//     console.log("you are not qualified");
// }

//correct if statment

// if ((age > 17) && (salary >= 5000)){
//     console.log("well done");
// } else{
//     console.log("Thank you, for coming.");
// }

// let montInt = 1;
// switch (montInt) {
//     case 1:
//         console.log("Jan");
//     case 2:
//         console.log("Feb");
//     break;
// }

// let grade = 75;
// switch(grade){

// }

// let grade = -1;
// switch(true) {
//     case grade == 100:
//         console.log("You're awesome");
//     break;
//     case (grade >= 90) && (grade <= 99):
//         console.log("Well done");
//     break;
//     case (grade >= 75) && (grade <= 89):
//         console.log("Distinction");
//     break;
//     case (grade >= 50) && (grade <= 74):
//         console.log("Pass");
//     break;
//     case (grade <=49) && (Math.sign(grade) !=-1 ):
//         console.log("Fail");
//     break;
//     default:
//         console.log("Out of range");
// }

//01/12/2022

//CONDITIONALS
// let x;
// if ((x >= 10 && x <= 20 )|| (x = undefined) ){
//     console.log('something');
// }

//SWITCH

// let marks = 50;

// switch (marks) {
//     case 50:
//         console.log(`You have outdone yourself`);
//         break;

//     default:
//         break;
// }

// const myCars = [
//     'toyota',
//     'bmw',
//     'mazda',
//     'merc'
// ];
// for (let i = 0; i < myCars.length; i++ ){
//     console.log(myCars[0]);
// }

// let myCar1 = {
//     make: 'toyota',
//     model: 'corolla',
//     year: '1996',
//     colors:[
//         'red',
//         'blue',
//         'white'
//     ]
// }
// for (const key in myCar1){
//     console.log( myCar1 [key]);
// }

// const myCars = [
//         'toyota',
//         'bmw',
//         'mazda',
//         'merc'
//     ];

//     for (const y of cars) {
//         console.log(y);
//     }

//while loop
// let cnt = 0;
// while (cnt < 10){
//     console.log(cnt);
//     cnt++;
// }

// do while

// let cnt = 0;
// let numbers = [8, 5, 3, 6];
// do {
//     console.log(numbers [cnt]);
//     cnt++;
// }while (cnt < numbers.length);

// let x = 10;
// let y = 9;

// function add() {
//     console.log(x+y);
// }

// add();

// function add(e) {
//     e.preventDefault();
//     let numb1 = document.querySelector('#numb1').value
//     let numb2 = document.querySelector('#numb2').value
//     let output = document.querySelector('#output');
//     output.innerText = eval (`${numb1} + ${numb2}`);
// }

// let output = document.querySelector('button');
// output.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let numb1 = document.querySelector('#numb1').value
//         let numb2 = document.querySelector('#numb2').value
//         let output = document.querySelector('#output');
//         output.innerText = eval (`${numb1} + ${numb2}`);
// })

////////////////////////////////////////////////////////////////////////////////////////////////////

//REDUCE
// let numbers = [1, 2, 3, 4, 5];
// let sum= numbers.reduce((a, b)=>{
//     return a + b;
// })
// console.log(`Sum: ${sum}`);

///////////////////////////////////////////////////////////////////////////////////////////////////

//MAPPING
// let numbers = [1, 2, 3, 4, 5];
// let double = numbers.map((item)=>{
//     return item *2;
// })
// console.log("current array:", numbers);
// console.log("Double:", double);

//FOR OF
// let numbers = [1, 2, 3, 4, 5];
// for (let numb of numbers) {
//     console.log(numb);
// }

// let people = [
//     {
//         id:1,
//         firstName:'J.f',
//         surname:'ken'
//     },
//     {
//         id:2,
//         firstName:'James',
//         surname:'frank'
//     }
// ]

// console.table(people);

// let peopleFirstName =
// people.map((item)=>{
//     return item.firstName;
// })
// console.log(peopleFirstName);

///////////////////////////////////////////////////////////////////////////////////////////////////

//HOISTING

// addition(5, 8);
// function addition (...arg) {
//     // let sum = arg.reduce
//     console.log(arg);
// }

// addition(5, 8, 3);

////////////////////////////////////////////////////////////////////////////

//SMALL EXERCISE

// function addition(...arg){
//     let sum = arg.filter(Number).reduce((a, b)=> {
//         return a + b;
//     })
// console.log("Sum:",   sum);
// }

// addition(1, 2, 3,"Ani", 6);

///////////////////////////////////////////////////////////////////////

//FETCH API

// fetch('../data/data.json')
// .then((res)=>{
//     return res.json();
// })

// .then((data)=>{
//     let results = data.results;
//     console.table(results);
// })

// async function fetchData(){
//     let data = await fetch ();
//     return data;
// }

// async function display({
//     let result =await fetchData
// })

// fetch('https://api.chucknorris.io/jokes/random')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     let tbody = document.querySelector('tbody');
//     Object.keys(data).forEach( (item)=>{
//         if(data[item].length){
//             console.log(`${item}: ${data[item]}`);
//             tbody.innerHTML +=
//             `
//                 <tr>
//                     <td>${item}</td>
//                     <td>${data[item]}</td>
//                 </tr>
//             `
//         }
//     } )
// })

let people = [];
//submit button
let submit = document.querySelector("button");

//add event listener

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let firstName = document.querySelector("#firstName").value;
  let surname = document.querySelector("#surname").value;
  let email = document.querySelector("#email").value;

  //push an object into an array
  people.push({
    firstName,
    surname,
    email,
  });
  console.log(people);
  localStorage.setItem("data"), JSON.stringify(people);
});
