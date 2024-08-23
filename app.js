// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//importing routes
const homeRoutes = require('./routes/homeRoutes');
const loRoutes = require('./routes/learningObectiveRoutes');


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Static Files Middleware
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(homeRoutes);
app.use(loRoutes);

// // Home Route
// app.get('/', (req, res) => {
//   res.render('home');
// });

// Start Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
