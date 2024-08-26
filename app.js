// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Sequelize } = require('sequelize');
const config = require('./config/config.js'); // Import the Sequelize configuration

const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = config[env]; // Get the config for the current environment
const sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, {
  host: sequelizeConfig.host,
  dialect: sequelizeConfig.dialect,
});

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
