console.log("hey there");
let input = document.getElementById("input");
let c = document.getElementById("c");
let f = document.getElementById("f");
let output = document.getElementById("output");
let converter = document.getElementById("converter");
let clear = document.getElementById("clear");



function toCelsius(c) {
    // c = (c.value - 32) / (9 / 5);
    console.log("C runs")
    let cValue = (input.value - 32) * (5 / 9);
    outputTemp(cValue, "C&deg;");



}


function toFahrenheit(f) {
    console.log("F runs")
    let fValue = (input.value * (9 / 5)) + 32;
    outputTemp(fValue, "F&deg;");






}


function clearEverything() {
    input.value = "";
    output.innerHTML = "";
    f.checked = false;
    c.checked = false;
clearColorClasses();
};

function outputTemp(temp, degree) {

clearColorClasses();
    output.innerHTML = `${temp}${degree}`
colors(temp, degree);
}

function clearColorClasses() {
    output.classList.remove("red", "green", "blue");


}
function checkInput() {
    if (input.value && (c.checked || f.checked)) {
        determineConverter()
    }
}


function colors(t, d) {
	console.log("color works");
    switch (d) {


        case "F&deg;":
            if (t > 90) {
            	console.log("> 90");
                output.classList.add("red");
            } else if (t < 32) {
                output.classList.add("blue");
            } else {
                output.classList.add("green");
            }
            break;
        case "C&deg;":
            if (t > 32) {
            	console.log("> 32");
                output.classList.add("red");
            } else if (t < 0) {
                output.classList.add("blue");
            } else {
                output.classList.add("green");
            }
            break;
    }
}



// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(clickEvent) {
    console.log("clickEvent", clickEvent);
    if (c.checked) {
        toCelsius();
    } else if (f.checked) {
        toFahrenheit();

    }
}

// Assign a function to be executed when the button is clicked
converter.addEventListener("click", checkInput);
clear.addEventListener("click", clearEverything);
input.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        checkInput()
    }
});