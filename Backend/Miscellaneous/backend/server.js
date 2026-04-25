const express = require("express");
const app = express();
const port = 8080;

// Middleware for POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET request
app.get("/register", (req, res) => {
    let { username, password } = req.query;
    res.send(`Welcome ${username} (GET method)`);
});

// POST request
app.post("/register", (req, res) => {
    let { username, password } = req.body;
    res.send(`Welcome ${username} (POST method)`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});