const { Sequelize } = require('sequelize');

// Importing models
const Consultant = require('./models/Consultant');
const Review = require('./models/Review');
const User = require('./models/User');
const Appointment = require('./models/Appointment');

// Database connection
const sequelize = new Sequelize('heroku_5524c97dc1fb649', 'b0295727c6494e', 'd20a8458', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
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
