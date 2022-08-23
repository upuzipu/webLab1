let x,y,r;
let check = true;

function getX() {
    try {
        x = document.querySelector('input[name="default-radio-x"]:checked').value.trim().replace(/,/, '.');
        return x;
    }
    catch (ex){
        alert("You have not put a X value. Try again!")
    }
};


function getY() {
    y = document.getElementById("y__").value.trim().replace(/,/, '.');
    if (y != ""){
        return y;
    }
    else{
        alert("You have not put an Y value. Try again!")
    }
};


function getR() {
    try{
        r = document.querySelector('input[name="default-radio-r"]:checked').value.trim().replace(/,/, '.');
        return r;
    }
    catch (ex){
        alert("You have not put a R value. Try again!")
    }
};


function submit() {
    if (document.getElementById("submit__").clicked == true) {
        var x_checker = document.getElementById("X_result")
        var y_checker = document.getElementById("Y_result")
        var r_checker = document.getElementById("R_result")
        x_checker.innerHTML = "X: " +  getX();
        y_checker.innerHTML = "Y: " +  getY();
        r_checker.innerHTML = "R: " +  getR();
       $.get("./php/data.php", {x : x_checker, y : y_checker, r : r_checker}, function (data) {
            let array = data.split("|");
            console.log(array);
        });
        
    }
}


function clear() {
    if(document.getElementById("clear__").clicked == true) {
        //some code
    }
}

function addElement() {
    if (document.getElementById("submit_-").clicked == true){
            //some code
    }
}

/*  TODO:
clear command
add command
connect sql
connect php
delete php
*/