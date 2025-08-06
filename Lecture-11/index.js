const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.get('/users',(req,res)=>{
    res.send("This is Users Page");
})

app.get('/blogs',(req,res)=>{
    res.send("<h1>This is Blog Page</h1>");
})

app.get('/posts',(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname+"/index.html");
})

app.get('/allusers',(req,res)=>{
    let allusers=[{id:1,name:"samarth"},{id:2, name:"Shalok"}];
    res.json(allusers);

})

//Path Variable
//1.Query Parameter
app.get('/profile',(req,res)=>{
    let pathVariableId=req.query.id;
    let pathVariableName=req.query.name;
    res.send("Profile of ID: "+ pathVariableId+"\nName-->"+pathVariableName);
})

app.listen(3000,()=>{
    console.log("Server is Running at 3000");
})

