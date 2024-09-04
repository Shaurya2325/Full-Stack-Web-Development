// let marks = [97,82 ,75, 64 ,36];
// console.log(marks);
// console.log(marks.length);  //property

//looping overn an aray
let heroes = ["ironmen", "thor", "hulk", "shaktiman", "spidermen", "akshay"];
//for loop
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}

//for-off
for(let hero of heroes) {
    console.log(hero);
}
//aray cities
let cities = ["delhi","pune", "mumbai", "hyderabad","gurgaon"];

for(let city of cities){
    console.log(city.toUpperCase());
}

