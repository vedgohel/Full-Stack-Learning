// Dom (Document Object Model) : 
// The Document Object Model (DOM) is a programming interface for web documents.
//  It represents the structure of a document as a tree of objects, allowing developers to manipulate and interact with the content and structure of a webpage using JavaScript.


// getElementById() :
// The getElementById() method is a JavaScript function that allows you to access an HTML element by its unique ID attribute.

// Example:

// // HTML:
// // <div id="myElement">Hello, World!</div>
// // JavaScript:
// const element = document.getElementById("myElement");
// console.log(element.textContent); // Output: Hello, World!



// // getElementsByClassName() :
// // The getElementsByClassName() method is a JavaScript function that allows you to access all HTML elements that have a specific class name. It returns a live HTMLCollection of elements.
// // Example:
// // HTML:
// // <div class="myClass">Element 1</div>
// // <div class="myClass">Element 2</div>
// // JavaScript:
// const elements = document.getElementsByClassName("myClass");
// for (let i = 0; i < elements.length; i++) {
//     console.log(elements[i].textContent);
// }

// // getElementsByTagName() :
// // The getElementsByTagName() method is a JavaScript function that allows you to access all HTML elements with a specific tag name. It returns a live HTMLCollection of elements.
// // Example:
// // HTML:
// // <p>Paragraph 1</p>
// // <p>Paragraph 2</p>
// // JavaScript:
// const paragraphs = document.getElementsByTagName("p");
// for (let i = 0; i < paragraphs.length; i++) {
//     console.log(paragraphs[i].textContent);
// }


// 1. querySelector()

// Selects the first matching element

// document.querySelector("h1");       // selects first <h1>
// document.querySelector(".box");     // selects first class="box"
// document.querySelector("#title");   // selects id="title"



// 2. querySelectorAll()

// Selects all matching elements
// document.querySelectorAll("p");       // all <p> tags
// document.querySelectorAll(".item");   // all class="item"


// let items = document.querySelectorAll(".item");

// items.forEach((item) => {
//     item.style.color = "blue";
// });


//  innerText

//  Gets only the visible text (what user sees)

// let el = document.querySelector("p");
// console.log(el.innerText);



// 2. textContent

//  Gets all text, even hidden ones

// let el = document.querySelector("p");
// console.log(el.textContent);


// 3. innerHTML

//  Gets HTML inside element (tags + text)

// let el = document.querySelector("div");
// console.log(el.innerHTML);


// innerText → what user sees
// textContent → all text
// innerHTML → HTML + text




// getAttribute(attr)

// Used to get (read) the value of an attribute

// let link = document.querySelector("a");

// let hrefValue = link.getAttribute("href");
// console.log(hrefValue);



// setAttribute(attr, value)

//  Used to set or change an attribute

// let img = document.querySelector("img");

// img.setAttribute("src", "new-image.jpg");




// What is obj.style?

// 👉 It accesses the inline CSS of an element

// let el = document.querySelector("p");
// el.style.color = "red";


//classList is used to add, remove, or manage CSS classes of an element in JavaScript

// What is classList?

// 👉 It is a property that lets you work with classes easily

// let el = document.querySelector("div");
// console.log(el.classList);



// 1. add()

// 👉 Adds a class

// el.classList.add("active");
// ✅ 2. remove()

// 👉 Removes a class

// el.classList.remove("active");
// ✅ 3. toggle()

// 👉 Adds if not present, removes if present

// el.classList.toggle("dark");

// 💡 Very useful for buttons, dark mode, menus

// ✅ 4. contains()

// 👉 Checks if class exists

// el.classList.contains("active"); // true / false



// Adding elements to the DOM

// 1. createElement()
// let newDiv = document.createElement("div");
// newDiv.textContent = "I am a new
//    div!";
// document.body.appendChild(newDiv); // adds to end of body

// 2. insertAdjacentHTML()
// document.body.insertAdjacentHTML("beforeend", "<p>New paragraph</p>");


// Removing elements from the DOM

// 1. remove()
// let el = document.querySelector("p");
// el.remove(); // removes the element
// 2. removeChild()
// let parent = document.querySelector("div");
// let child = document.querySelector("p");
// parent.removeChild(child); // removes child from parent
