// //⬇️console.log
// console.log("Ritik");

// //⬇️ alert 
// alert("Confirm");

// //⬇️ prompt
// prompt("Enter a value");

// Questions
// // 🙋🏻‍♂️ Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
/*
const input = prompt("Enter a number:");
if(input % 5 == 0){
    console.log(`${input} is a multiple of 5.`);
}else{
    console.log(`${input} is NOT a multiple of 5.`);
    // alert(`${input} is NOT a multiple of 5.`);
}
*/

// //⬇️ Variables
// name = "Ritik Kumar";
// age = 21;
// price = 95.99;
// a = null;
// y = undefined;
// isOnline = false;
// console.log(age);
// console.log(name);
// // OR we can also print like this👇🏻
// console.log(name,age,price,a,y,isOnline);

// // ⬇️Data types
// 1. Primitive -> string,number,boolean,null,undefined,Bigint,Symbol
// 2. Non-Primitive -> Object,Arrays

// // ⬇️Object
// const student = {
//     fullName : "Ritik",
//     age : 21,
//     marks : 95.24,
//     isPass : true,
// }
// two types to update data of an object
// student.age = 25;
// student["age"] = 30

// two types to print data of an object
// console.log(student.age);
// console.log(student["age"]);

// // ⬇️ Loops
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for of (mostly used in Arrays,Strings)
// 5. for in (mostly used in Objects)

// //⬇️ Template Literals
// let output = `This is a template literal`;

// //⬇️ Esc character
// \n (to print in a new line)
// console.log("My name is Ritik. \nI'm a software developer.");

// \t (to add a tab space) (it takes 1 character length)
// console.log("My name is Ritik. \tI'm a software developer.");


// // ⬇️ String (Immutable)
// let str = "Ritik"
// //🔻some String functions
// console.log(str.length);
// console.log(str[2]);
// console.log(str.charAt(2));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// str = "  Ritik   "
// console.log(str.trim());
// console.log(str.slice(1,4));
// let str2 = "Kumar"
// console.log(str.concat(str2));
// console.log(str.replace("k","K"));

// //⬇️ String Interpolation
// `String text ${expression} string text`

// //🙋🏻‍♂️ Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

// const fullName = prompt("Enter your Full Name:");
// const userName = `@${fullName}${fullName.length}`;
// console.log(`Your Username is ${userName}`);

// //⬇️ Arrays (Mutable)
// Collections of items
// typeof array -> 'Object'

// let heroes = ["Hanuman","Krishna","Krrish","Shaktiman","Bheem"];
// let marks = [95,56,68,87,75];
// let info = ["Ram",75,"goa"];

// console.log(heroes[1]);
// console.log(marks[1]);
// console.log(heroes[2],marks[3],info[2]);

// Questions
// //🙋🏻‍♂️ print an array using for loop and for of loop.
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }

// for(let hero of heroes){
//     console.log(hero);
// }

// //🙋🏻‍♂️ For a given array with marks of students, find the average marks of the entire class.
// let arrOfMarks = [85,97,86,45,83];
// let sum = 0;
// for(let mark of arrOfMarks){
//     sum += mark;
// }
// let avgMarks = sum/arrOfMarks.length;
// console.log(`Average marks of class is ${avgMarks}`);

// //🙋🏻‍♂️ For a given array with price of 5 items, All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// let items = [250,645,300,900,50];

// for(let i=0;i<items.length;i++){
//     let offer = items[i] * 10/100
//     items[i] -= offer; 
// }
// console.log(items);


// //🔻some Array Methods
// Push() : add to end
// Pop() : delete from end & return
// toString() : converts array to string
// slice() : returns a piece of the array
    // slice(startIdx,endIdx)
// Splice() : change original array(add,remove,replace)
    // splice(startIdx,delCount,newEl1...)

// // 🙋🏻‍♂️ Create an array to store compaines -> "Bloomberg", "Microsoft", "Uber", "Google","IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

// let compaines = ["Bloomberg", "Microsoft", "Uber", "Google","IBM", "Netflix"];

// compaines.shift();  //a
// compaines.splice(1,1,"Ola");    //b
// compaines.push("Amazon");   //c
// console.log(compaines);


// ⬇️ Funcation
// Block of code that performs a specific tast,can be invoked whenever needed.