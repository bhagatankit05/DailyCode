// 1) Import the Express library and create an app instance.
const express = require('express');
const path = require('path');
const app = express();

// 2) MIDDLEWARE  -----------------------------------------------------------
// Parse JSON bodies (e.g., from fetch/axios with a JSON payload)
app.use(express.json());

// Parse URL-encoded bodies (typical HTML <form> submissions)
//   • extended: true  → allows rich objects (qs library)
//   • extended: false → simple query-string parsing (querystring lib)
app.use(express.urlencoded({ extended: true }));

// 3) ROUTES  ---------------------------------------------------------------

// Serve the static HTML form.
//   __dirname = current folder; we join it with "index.html".
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle the POST request when the form is submitted.
app.post('/submit', (req, res) => {
  /*  Because of express.urlencoded() above, all <input name="...">
      fields are now available under req.body as key–value pairs. */
  const { name, email } = req.body;

  // >>> Here you could: validate, save to DB, send email, etc. <<<

  // Send a friendly response back to the browser.
  res.send(`
    <h2>Thanks for contacting us!</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><a href="/">← back to form</a></p>
  `);
});

// 4) START THE SERVER  -----------------------------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
