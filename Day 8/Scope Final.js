let John = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {
        function imAFunctionNotAMethod() {
            console.log(this)
        }
        imAFunctionNotAMethod()
        console.log(this.firstName + " " + this.lastName + " is driving a car.")
    }
}

John.driveCar()

function breathe() {
    console.log(this.firstName + " " + this.lastName + " just inhaled and exhaled.")
}

breathe.call(john)