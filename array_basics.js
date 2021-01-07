var salaryArrVar = [18000, 25000, "37500", 45000, 58000] // define an array of integer datatypes, however mix of them is allowed
var nameArrVar = ["Alice", "Bob", "Charlie", "Dev", "Erin"] // define an array of string datatypes

for (var i=0; i<salaryArrVar.length; i++) {
    console.log("Hello " + nameArrVar[i] + ",\nYour a/c has been credited with your salary amount of Rs. " + salaryArrVar[i])
}

var frndsArrVar = {"School":"ABC", "PU":"XYZ", "Engg":"PQR"}
console.log(Object.keys(frndsArrVar), Object.values(frndsArrVar)) // get keys and values