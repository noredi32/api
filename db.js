const { Sequelize } = require('sequelize');

// Importing models
const Consultant = require('./models/Consultant');
const Review = require('./models/Review');
const User = require('./models/User');
const Appointment = require('./models/Appointment');

// Database connection
const sequelize = new Sequelize('askmesapi', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
  });

// Getting models
const models = [
  Consultant,
  Review,
  User,
  Appointment,
];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

// Configuring relations
const { consultants, reviews, users, appointments } = sequelize.models;
reviews.belongsTo(consultants); 
appointments.belongsTo(users);
appointments.belongsTo(consultants); 

module.exports = sequelize;
