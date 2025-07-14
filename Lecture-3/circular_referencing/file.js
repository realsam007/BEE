let file2=require('./file2.js');
console.log(file2);
let food="fish";
function cat(){
    console.log("meoww...");
}
module.exports={
    food,
    cat,
    file2
};