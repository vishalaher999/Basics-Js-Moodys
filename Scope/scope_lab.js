// global scope

var a = "global var scope";
let b = "Global let scope";
const c = "Global const scope";

{
    var aa = "block var scope";
let bb = "Block let scope";
const cc = "Block const scope";
}
// Global scope
//console.log(a); // Output: "I'm a global variable"
//console.log(b); // Output: "I'm also global, but scoped with let"
//console.log(c); // Output: "I'm a global constant"

//Block Scope
//console.log(aa);
//console.log(bb);


function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError

