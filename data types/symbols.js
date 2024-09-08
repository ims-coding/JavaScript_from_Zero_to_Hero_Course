
let mySymbol = Symbol("description");

let user = {
    name : "John Deo",
    [mySymbol] : "uniqeID" 
}

console.log(user[mySymbol])

let sym1 = Symbol('id');
let sym2 = Symbol('id');

console.log(sym1 === sym2)
