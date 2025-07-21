let age = 17; 

let p = new Promise((resolve, reject) => {
    if (age > 18) {
        resolve("User is allowed to vote");
    } else {
        reject("User is underage!!");
    }
});


p.then((data) => {
    console.log("First then block");
    console.log(data);
}).catch((err) => {
    console.log("Catch block");
    console.log(err);
});
