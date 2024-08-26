const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('learning_management_db', 'casey', 'plmPLM11##', {
    host: 'localhost',  // or try the actual IP address
    dialect: 'mysql',
    port: 3306,
  });

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
