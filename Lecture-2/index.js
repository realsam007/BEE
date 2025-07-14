const fs=require('fs');
console.log("Start");
setImmediate(()=>{
    console.log("Immediate 1");
})
setTimeout(()=>{
    console.log("Timer 1");
},0);

fs.readFile("demo.txt","utf-8",(err,data)=>{
    if(err) return console.log(err);
    console.log(data);
})

function fun(){
    console.log("fun");

}
fun();
