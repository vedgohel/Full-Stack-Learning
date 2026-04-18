// first video


// let div = document.querySelector("div");
// let ul= document.querySelector("ul");
// let li = document.querySelectorAll("li");


// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });


// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });


// for(li of lis){    
//    li.addEventListener("click", function(event){
//     event.stopPropagation();
//       console.log("li was clicked");
//  });
// }


// second video


let inp = document.querySelector("input");
let btn = document.querySelector("button");

let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");



btn.addEventListener("click", function(){
    let text = inp.value;
    let newLi = document.createElement("li");
    newLi.textContent = text;
    ul.appendChild(newLi);
});


// let delBtns = document.querySelectorAll(".delbtn");

// for (let btn of delBtns) {
//     btn.addEventListener("click", function () {
//       let par = btn.parentElement;
//         par.remove();

//     });
// }



// third video


// event delegation

// let ul = document.querySelector("ul");

ul.addEventListener("click", function(event){
    if(event.target.nodeName === "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
});