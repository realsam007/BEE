const fs = require('fs');
const { resolve, rejects } = require('path');

// Function to read a file and return a Promise
function myread(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, "utf-8", (err, data) => {
            if (err) {
                reject(err);  // Reject promise if there's an error
            } else {
                resolve(data); // Resolve promise with file contents
            }
        });
    });
}

// Function to write to a file and return a Promise
function mywrite(filepath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, "utf-8", (err) => {
            if (err) {
                reject(err);  // Reject promise if there's an error
            } else {
                resolve("File written successfully"); // Resolve on success
            }
        });
    });
}

async function task() {
    try {
        let data1 = await myread("../userdata1.json");
        let data2 = await myread("../userdata2.json");
        let res = [...data1, ...data2];
        let message = await mywrite("../alluserdata.json", res);
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    myread,
    mywrite
};

task();
console.log("hi");