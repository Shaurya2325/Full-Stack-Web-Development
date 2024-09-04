/*let marks = [94,64,32,46,99,86];

let toppers = marks.filter((val) => {
    return val > 90;
})
console.log(toppers)*/

let n = prompt("enter a number : ");

let arr = [];

for(let i=1; i <=n; i++){
    arr[i-1] = i;//1(0),2(1),3(2),4(3)
}
console.log(arr);

let sum = arr.reduce((res,curr) => {
    return res + curr;
})
console.log("sum",sum);

let factorial = arr.reduce((res,curr) => {
    return res*curr;
});
console.log("factorial = ", factorial);