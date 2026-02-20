const marvel_heroes = ["Iron Man", "Thor", "Hulk", "Black Widow", "Spider-Man"];

const dc_heroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);

// const allHeros = marvel_heroes.concat(dc_heroes);
// console.log(allHeros);

const allnewHeros = [...marvel_heroes, ...dc_heroes];

// console.log(allnewHeros); 


// flat() method
const another_array = [1, 2, 3, [4, 5], 6, 7, [8, 9]]; 

// flat() method is used to flatten nested arrays

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

// console.log(Array.isArray("ved")); // false

// console.log(Array.from("ved")); // [ 'v', 'e', 'd' ]

// length of an array
console.log(Array.from({ length: 5 }, (_, i) => i + 1)); // [1, 2, 3, 4, 5]


let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3)); // [100, 200, 300]