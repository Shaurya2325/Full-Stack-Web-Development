//practice qs 2 - js Program

let score = prompt("enter a score (0 - 100):");
let grade;

if (score >= 90 && sco22re <= 100) {
    grade = "A";
}else if ( score >= 70 && score <= 89){
    grade = "B";
}else if ( score >= 60 && score <= 69){
    grade = "C";
}else if ( score >= 50 && score <= 59){
grade ="d";
}else if ( score >= 0 && score <= 49) {
    grade = "f";
}

console.log("according to your scores, your grade was :" , grade);