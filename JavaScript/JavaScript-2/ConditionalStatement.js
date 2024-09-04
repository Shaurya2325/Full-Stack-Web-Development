//Conditional statement
// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "black";
// }

// if (mode === "light") {
//     color = "white";
// }
// console.log(color);


//if-else Condition
// let mode = "light";
// let color;

// if(mode === "dark"){
//     color="white";
// }else{
//     color = "black";
// }
// console.log(color);

// let age=14;
// if(age >=18){
//     console.log(" vote");
// }else{
//     console.log("NOT vote")
// }


//ODD or EVEN
// let num =9;

// if(num%2 === 0){
//     console.log(num,"is even");
// }else{
//     console.log(num," is odd");
// }/

//syntex -> rules

// else-if condition
let mode = "dark";
let color;

if(mode === "dark"){
    color = "black"
}else if (mode === "blue"){
    color = "blue";
}else if( mode === "pink"){
    color = "pink";
}else{
    color = "white";
}
console.log(color);


if(mode === "dark")  {
    console.log(mode);
}

//Ternary Operator
let age = 25;
age >= 18 ? console.log("adult") : console.log("not adult");//simpler, compact if-else


