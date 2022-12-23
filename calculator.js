const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = Number(req.body.num1);
    var height = Number(req.body.num2);
    var result = (weight)/(height*height);

    res.send("Your BMI is "+ result);
});

app.get("/", function(req, res){
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2); 

    var result = num1 + num2; 

    res.send("The result of this calculation is "+ result);
});

app.listen(3000, function(){
    console.log("Server is listening to port 3000");
});

