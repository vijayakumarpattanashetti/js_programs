function minMaxFunc(intArrVar) { // function to return an array of minimum and maximum values

    var minVar = intArrVar[0], maxVar = intArrVar[0] // initialize
    for (var i=1; i<intArrVar.length; i++) { // looping through the array
        minVar < intArrVar[i] ? minVar : minVar = intArrVar[i]; // check if minimum and update
        maxVar > intArrVar[i] ? maxVar : maxVar = intArrVar[i]; // check if maximum and update
    }
    return [minVar, maxVar] // return an array of minimum and maximum
}

var numArrVar = [35,64,23,75,14]
console.log("Minimum is " + minMaxFunc(numArrVar)[0] + " and Maximum is " + minMaxFunc(numArrVar)[1]); // call function