var frndsArrVar = {"School":"ABC", "PU":"XYZ", "Engg":"PQR"}

// CRUD operations: Create, Read, Update, Delete
frndsArrVar["Training"] = "Dev" // create operation: add a key and corresponding value

frndsArrVar["Engg"] = "Rocky" // update operation: upadte a value for a key

delete frndsArrVar["PU"] // delete operation: delete a value for a key

// read operation: read all keys and corresponding values
console.log(Object.keys(frndsArrVar), Object.values(frndsArrVar)) // get keys and values