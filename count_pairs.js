var iptVar = "0110111011110";
var counter = 0;

for (var i=0; i<iptVar.length; i++) { // looping through the string
    if (iptVar[i] == '1' && iptVar[i+1] == '1') { // check for pairs
        counter++; // count each pair
        i++; // avoid repeatation of previously visited pair
    }
}
console.log(counter) // number of pairs of 1s