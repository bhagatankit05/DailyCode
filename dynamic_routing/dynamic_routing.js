const express = require('express');
const app = express();
const path = require('path');

app.use(express.json()); // to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public'))); // serve static files from the 'public' directory
app.set('view engine', 'ejs'); // set EJS as the templating engine

app.get('/', function (req,res) {
    res.render("index"); // Render the index.ejs file
}
);
app.get("profile/:ankit", function (req, res) {
    
    res.send("req.params.ankit;"); // Access the dynamic parameter from the URL
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
}
);