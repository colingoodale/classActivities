var a = process.argv[2];
var b = process.argv[3];
var c = process.argv[4];

function add(b, c) {
    console.log(parseFloat(b) + parseFloat(c));
}

function subtract(b, c) {
    console.log(parseFloat(b) - parseFloat(c));
}

function divide(b, c) {
    console.log(parseFloat(b) / parseFloat(c));
}

function multiply(b, c) {
    console.log(parseFloat(b) * parseFloat(c));
}

function listener() {
    if (process.argv[2] === "add") {
        add();
    } else if (process.argv[2] === "subtract") {
        subtract();
    } else if (process.argv[2] === "divide") {
        divide();
    } else if (process.argv[2] === "multiply") {
        multiply();
    } else {
        console.log("You bipped and Bopped Plopped the Shopped!");
    }
};

listener();
