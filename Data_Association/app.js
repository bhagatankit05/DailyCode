const express = require('express');

const userModel = require('./models/user');
const postModel = require('./models/post');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/create', async (req, res) => {
   await  res.send("Create kiya");
});

app.get('/post/create',async (req,res)=>{
    let post = await postModel.create({
        postdata: "This is a post",
        
    })

    res.send(post);

})

app.listen(3000)