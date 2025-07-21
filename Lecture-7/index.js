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


const users = [
    { id: 1, name: "Samarth", age: 19 },
    { id: 2, name: "Yash", age: 17 },
    { id: 3, name: "Anya", age: 22 }
];

function isAllowed(id) {
    return new Promise((resolve, reject) => {
        let user = null;

        for (let i = 0; i < users.length; i++) {
            console.log(users[i]);
            if (users[i].id === id) {
                user = users[i];
                break;
            }
        }

        if (!user) return reject("No user found");
        if (user.age < 18) return reject("Age is less than 18");

        resolve("Allowed");
    });
}

// Call the function and handle the result
isAllowed(1)
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((err) => {
        console.log("Error:", err);
    });

