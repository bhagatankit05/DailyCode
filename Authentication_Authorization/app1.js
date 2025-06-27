
const express = require('express');
const bcrypt = require('bcrypt'); //for hashing passwords encryption and decryption

const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser())



app.get('/', (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash("ankit2505", salt, function (err, hash) {
            // Store hash in your password DB.

        });
    });
})

app.get('/compare', (req, res) => {
    bcrypt.compare("ankit2505", "$2b$10$GYt8u6e75R7V1flLYKueCOlYdn3QHXu2Cix1uaYCi9HB567KlDS66", function (err, result) {
        console.log(result);
    });
})

app.get('/token', (req, res) => {
    const token = jwt.sign({ email: "bhagatankit82@gmail.com" }, "secret")
    res.cookie("token",token)
    console.log("done");
})
app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send("read cookies");
})

app.get('/verify',(req,res)=>{
    let data=jwt.verify(req.cookies.token, "secret")
    console.log(data)
})

app.listen(3000);


