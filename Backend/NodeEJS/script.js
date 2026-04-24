// Templating 
// EJS => Embedded Javascript templates
// EJS is a simple templating language that lets you generate HTML markup with plain Javascript.


const express = require("express");
const app = express();
const path = require("path");

const port = 8080;


app.use(express.static(path.join(__dirname,"public")));

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname,"/views"));

// app.get("/", (req, res) => {
//     res.render("home", { name: "Ved" }); // pass data
// });

// route
app.get("/", (req, res) => {
    res.render("home", {
        username: "Ved",

        stories: [
            { name: "alex", img: "https://i.pravatar.cc/60?img=1" },
            { name: "john", img: "https://i.pravatar.cc/60?img=2" },
            { name: "emma", img: "https://i.pravatar.cc/60?img=3" }
        ],

        posts: [
            {
                username: "alex",
                userImg: "https://i.pravatar.cc/40?img=1",
                postImg: "https://picsum.photos/400/300?1",
                caption: "Beautiful day 😍"
            },
            {
                username: "john",
                userImg: "https://i.pravatar.cc/40?img=2",
                postImg: "https://picsum.photos/400/300?2",
                caption: "Travel vibes ✈️"
            }
        ],

        suggestions: ["mike", "sara", "david"]
    });
});


app.listen(port, ()=>{
   console.log(`listening the port ${port}`);
});

// Interpolation syntax
// interpolation refers to embedding expression into marked up text.
// ejs page tags making website dynamic => ejs.co