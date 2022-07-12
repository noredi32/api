const { Sequelize } = require('sequelize');

// Importing models
const Consultant = require('./models/Consultant');
const Review = require('./models/Review');
const User = require('./models/User');
const Appointment = require('./models/Appointment');

// Database connection
const sequelize = new Sequelize('heroku_0934279acadb2ff', 'b62d42f0eb10ff', 'beca043a', {
    host: 'us-cdbr-east-06.cleardb.net',
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
