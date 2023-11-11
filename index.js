const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send("Welcome to inventry app");
});

server.listen(3000, () => console.log("Server is listening on port 3000"));
