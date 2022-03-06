var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// app.get("/url", (req, res, next) => {
//   res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
// });
app.get("/users",function(req,res){
    res.send("hello")
});

// var books=require("express");
// var book=books();
// book.listen(4000, () => {
//     console.log("server running on port 4000")
// });
app.get("/books",function(req,res){
    res.json(["ikigai","The shinning","Harry Potter","Rising apes"])
});