let myName = "Brad"

function amazingFunction() {
    let myName = "Brad Junior"
    if (2 + 2 == 4) {
        let myName = "Brad the 3rd"
        consolo.log("inside the if statement", myName)
    }
    console.log("inside our function", myName)
}

amazingFunction()
console.log("in the global scope", myName)
