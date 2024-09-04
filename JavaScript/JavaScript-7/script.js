/*let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id)

let name = div.getAttribute("name");
console.log(name)*/

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));


// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

//style  .node.style

/*let div = document.querySelector("div");

div.style.backgroundColor = "green"
div.style.backgroundColor = "purple"
//div.style.visibility = "hidden"

div.style.fontSize = "26px"
div.innerText = "hello"*/

//crete a button  insert el
/*let newBtn =  document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let p = document.querySelector("p");
p.after(newBtn);*/

//new heading create
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi ,I am new!</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();