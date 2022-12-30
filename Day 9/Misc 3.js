let John = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {
        let imAFunctionNotAMethod = () => console.log(this)
        imAFunctionNotAMethod()
        console.log(this.firstName + " " + this.lastName + " is driving a car.")
    }
}

John.driveCar()