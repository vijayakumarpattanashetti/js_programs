function getSumFunc(intArrVar) { // pass an a array to a function 

    var arrSumVar = 0 // declare and initialize
    for (var i=0; i<intArrVar.length; i++) { // looping through an array
        arrSumVar += intArrVar[i]; // adding current element to the previous sum
    }
    return arrSumVar // return sum of an array
}

var userArrVar = [14,64,23,75,35]
console.log(getSumFunc(userArrVar)) // call function