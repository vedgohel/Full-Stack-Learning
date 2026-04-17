// Dom Events : Events are actions that occur in the browser, such as a user clicking a button, submitting a form, or resizing the window. 
// We can use JavaScript to listen for these events and respond to them by executing specific code.


// Onclick event : The onclick event is triggered when a user clicks on an element, such as a button or a link. 
// We can use the onclick event to execute a function when the user clicks on the element.
// Example of onclick event

// function showAlert() {
//     alert("Button Clicked!");
// }

// let btn = document.querySelector(".btn");

// btn.onclick = function(){
//     console.log("Button Clicked!");
// }

// Onmouseover event : The onmouseover event is triggered when a user moves the mouse pointer over an element.
// We can use the onmouseover event to change the appearance of an element or display additional information when the user hovers over it.

// function changeColor(element) {
//     element.style.backgroundColor = "yellow";
// }


// function sayHello() {
//     console.log("Hello,world!");
// }

// btn.onclick = sayHello; // Assigning the function to the onclick event of the button
// btn.onmouseover = function() {
//     console.log("Mouse is over the button!");
// }



// Event Listeners : Event listeners are a more flexible way to handle events in JavaScript.

// function sayHello() {
//     console.log("Hello, world!");
// }

// btn.addEventListener("click", sayHello); // Adding a click event listener to the button
// btn.addEventListener("mouseover", function() {
//     console.log("Mouse is over the button!");
// });

// Event Object : When an event occurs, an event object is created that contains information about the event, 
// such as the type of event, the target element, and the coordinates of the mouse pointer.

// btn.addEventListener("click", function(event) {
//     console.log("Button Clicked!");
//     console.log("Event Type: " + event.type);
//     console.log("Target Element: " + event.target);
//     console.log("Mouse Coordinates: (" + event.clientX + ", " + event.clientY + ")");
// });




// let btn = document.querySelector("button");



// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     let div = document.querySelector("div");
//     h3.innerText = `${randomColor}`;
//     div.style.backgroundColor = randomColor;
// });


// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let colour = (`rgb(${red}, ${green}, ${blue})`);
//     return colour;
// }





// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log(this.innerText); // this refers to the element that triggered the event, which is the button in this case
//     this.style.backgroundColor = "blue"; // changing the background color of the button to blue when it is clicked
// });



// keyboard events 


// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event){
//     console.log("code = " , event.code); // logging the key that was pressed
//     if(event.code === "ArrowUp"){
//         console.log("arrowup key was pressed"); // logging a message when the Enter key is pressed
//     } else if(event.code === "ArrowDown"){
//         console.log("arrowdown key was pressed"); // logging a message when the Enter key is pressed
//     } else if(event.code === "Enter"){
//         console.log("enter key was pressed"); // logging a message when the Enter key is pressed
//         }
//});


// inp.addEventListener("keyup", function(){
//     console.log("key was released"); // logging the key that was released
// });

// let form = document.querySelector("form");


// form.addEventListener("submit", function(event){
//     let inp = document.querySelector("input");
//     console.log(inp.value); // logging the value of the input field when the form is submitted
//     event.preventDefault(); // preventing the default form submission behavior
//     alert("Form Submitted!"); // displaying an alert when the form is submitted
// });



// let form = document.querySelector("form");


// let username = document.querySelector("#username");
// let password = document.querySelector("#password");

// form.addEventListener("submit", function(event){
//         event.preventDefault(); // preventing the default form submission behavior
//     console.log("Username: " + username.value); // logging the value of the username input field when the form is submitted
//     console.log("Password: " + password.value); // logging the value of the password input field when the form is submitted
// });