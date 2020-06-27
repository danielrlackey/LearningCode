const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("hi there!");
});

app.get("/bye", function(req, res){
    res.send("goodbyee")
});

app.get("/dogs", function(req, res){
    res.send("meow!")
    console.log("someone made a request to /dog!")
});

app.get("/r/:subredditName", function(req, res){
    res.send("welcome to subreddit!");
})

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    res.send("welcome to the comments page!");
})

app.get("*", function(req, res){
    res.send("you are a star")
});






app.listen(3000, function(){
    console.log("server has started...")
});