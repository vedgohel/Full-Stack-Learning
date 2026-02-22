let a = 40
// const b = 20
// var c = 30

if(true){
    let a = 10
    const b = 20
    console.log("INNER : " , a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }




// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "ved"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}
one()

if (true){
    const username = "ved"
    if(username === "ved"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(addone(5));

function addone(num){
    return num + 1
}

addTwo(5)

function addTwo(num){
    return num + 2
}



 