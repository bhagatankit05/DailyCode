const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    fs.readdir(`./files`, function (err, files) {
        res.render("index", { files: files });
    });
})

app.get('/file/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf8', function (err, data) {
        if (err) {
            return res.status(404).send('File not found');
        }
        res.render("show" , {filename: req.params.filename, data: data});
    });
})

app.get('/edit/:filename', (req, res) => {
    res.render("edit", { filename: req.params.filename });
});

app.post('/edit', (req, res) => {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function (err) {
        if (err) {
            return res.status(500).send('Error renaming file');
        }
        res.redirect('/');
    })
})

app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details,function(err){
        res.redirect('/');
});
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});