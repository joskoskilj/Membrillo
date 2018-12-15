var x = 1;
var y;
var firstname = "Lj";
var lastname = "JJ";
var num1 = 100;
var num2 = 20;
function addNumbers(n1, n2, n3) {
    var result = n1 + n2 + n3;
    var msg = "Sum is = " + result;
    console.log(msg);
}
addNumbers(x, num1, lastname); /// this will pass the string from lastname and it will concatonate with the rest of the num values.
