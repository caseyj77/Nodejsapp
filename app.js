// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./util/database'); // Import the Sequelize instance

const app = express();

// Importing routes
const homeRoutes = require('./routes/homeRoutes');
const loRoutes = require('./routes/learningObjectiveRoutes');
const authRoutes = require('./routes/auth');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Static Files Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use Routes
app.use('/', homeRoutes); // Home routes
app.use('/learning-objectives', loRoutes); // Learning Objectives routes
app.use(authRoutes); // Authentication routes like /login, /signup, etc.

// Error Handling Middleware (Optional)
app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
});


console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);



// Syncing Database and Starting the Server
sequelize
  .sync() // Use .sync({ force: true }) during development to reset the database
  .then(result => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Failed to connect to the database:', err);
  });


