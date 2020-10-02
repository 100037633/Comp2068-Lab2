'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    //i added these declarations to avoid some errors i was getting taht were confusing me.  
    let equation = "";
    let num1 = 0;
    let num2 = 0;
    var symbol = "";
    var answer = 0;
    function calc(method, x, y)
    {
        //convert the strings in the url into numbers
        num1 = parseFloat(x);
        num2 = parseFloat(y);
       
        //check for each possible operator and then pretend that i planned for errors.
        if (req.query.method == "add") {
            symbol = "+";
            answer = num1 + num2;
        }
        else if(req.query.method == "subtract"){
            symbol = "-";
            answer = num1 - num2;
        }
        else if (method == "multiply") {
            symbol = "*";
            answer = num1 * num2;
        }
        else if (method == "divide") {
            symbol = "/";
            answer = num1 / num2;
        }
        else {
            res.render('error');
        }
    }
    calc(req.query.method, req.query.x, req.query.y);
    if (req.query.method == undefined) {
        equation = "Add some paramaters to the url"

    }
    else {
        equation = num1 + " " + symbol + " " + num2 + " = " + answer;
    }
 
    res.render('index', { title: 'Calculating', equation: equation });
});

module.exports = router;
