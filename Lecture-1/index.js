//Create a function which return a promise to multiply two number
//a and b if a>10;

function mul(a,b){
    return new Promise((resolve,reject)=>{
        if(a>b){
            return resolve(a*b);
         
        }
      else{
            reject("A is less than 10");
            }
            
    })
}

mul(5,6).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})