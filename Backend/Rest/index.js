const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");   

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Posts with UUID
let posts = [
    {
        id: uuidv4(),
        username: "ved",
        content: "i am ved"
    },
    {
        id: uuidv4(),
        username: "raj",
        content: "hello world"
    }
];

// Show all posts
app.get("/posts", (req, res) => {
    res.render("index", { posts });
});

// New post form
app.get("/posts/new", (req, res) => {
    res.render("new");
});

//  Create post
app.post("/posts", (req, res) => {
    const { username, content } = req.body;

    const newPost = {
        id: uuidv4(),   
        username,
        content
    };

    posts.push(newPost);
    res.redirect("/posts");
});

// edit post
app.get("/posts/:id/edit", (req, res) => {
    const { id } = req.params;

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.render("edit", { post: null });
    }

    res.render("edit", { post });
});

// Update post
app.patch("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { username, content } = req.body;

    const post = posts.find(p => p.id === id);

    if (post) {
        post.username = username;
        post.content = content;
    }

    res.redirect("/posts");
});

// Delete post
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;

    posts = posts.filter(p => p.id !== id);

    res.redirect("/posts");
});


// Show single post
app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);

    if (!post) return res.status(404).send("Post not found");

    res.render("show", { post });
});





app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});