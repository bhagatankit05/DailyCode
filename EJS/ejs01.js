const express = require('express');
const app = express();

app.use(express.json()); // to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded bodies
app.set('view engine', 'ejs'); // set EJS as the templating engine

app.get('/', function (req,res) {
    res.render("index"); // Render the index.ejs file
}
);

app.listen(3000, function () {
    console.log("Server is running on port 3000");
}
);