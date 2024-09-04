//forEach loop method
/*let nums = [67,65];

let calcSquare = (num) => {
    console.log(num * num);//num**2
};
nums.forEach(calcSquare);*/

//map method
// let nums = [67,65,33];

// let newArr = nums.map((val) => {
//     return val*val;
// });
// console.log(newArr)
// let calcSquare = (num) => {
//     console.log(num * num);//num**2
// };


//Filter method

/*let arr = [1,2,3,4,5,6,7];

let evenArr = arr.filter((val) => {
return val > 3;
})
console.log(evenArr)*/

//
let arr = [1,2,3,4];
const output = arr.reduce((prev,curr) => {
    // return res + curr;
    return prev > curr ? prev : curr;
});

console.log(output); //10