// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from Apna College Students";

let divs = document.querySelectorAll(".box");
//console.log(divs[1]);

let idx = 1;
for(div of divs) {
    div.innerText =`new unique value ${idx}`;
    idx++;
}
/*divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";*/
