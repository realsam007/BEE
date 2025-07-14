let file1=require('./file');
console.log(file1);

let food="pedigree";
function dog(){
    console.log("Bark....");
}

module.exports={
    food,
    dog,
    file1
}