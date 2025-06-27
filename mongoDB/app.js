const express = require('express');
const app = express()

const userModel = require('./usermodel')

app.get('/', (req, res) => {
    res.send("hello World")
})

app.get('/create', async (req, res) => {

    let createdUser = await userModel.create({
        name: "Ankit Bhagat",
        username: "ankitbhagat",
        email: "bhagatankit82@gmail.com"
    })
    res.send(createdUser);

})

app.get('/read', async (req,res)=>{
    let readUser  = await userModel.find();
    res.send(readUser);
})

app.get('/update', async (req,res)=>{
    let updatedUser = await userModel.findOneAndUpdate({username:"ankitbhagat"},{name: "Ankit R Bhagat"},{new : true})
    res.send(updatedUser);

    })

app.get('/delete', async (req,res)=>{
    let users = await userModel.findOneAndUpdate({username:"ankitbhagat"})
    res.send(users);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})