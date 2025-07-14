function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}
//Common JS
console.log("util",module.exports);
module.exports.add=add;
module.exports.sub=sub;
module.exports.mul=mul;

//Another way to Export
// module.exports={
//     add:add,
//     sub:sub,
//     mul:mul
// }
console.log("util",module.exports);