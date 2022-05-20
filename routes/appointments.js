const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');
// Reto Permisos 

// Get all orders
router.get('/', permission('admin'), async (req, res) => {
  const appointments = await sequelize.models.appointments.findAndCountAll();
  return res.status(200).json({ data: appointments });
});

// Creating a new order
router.post('/', permission('admin', 'client'), async (req, res) => {
  const { body } = req;
  const appointment = await sequelize.models.appointments.create({
    day: body.day,
    time: body.time,
    userId: body.userId,
    consultantId: body.consultantId,
    
  });
  await appointment.save();
  return res.status(201).json({ data: appointment });
});

// Update a order by id
router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const appointment = await sequelize.models.appointment.findByPk(id);
  if (!appointment) {
    return res.status(404).json({ code: 404, message: 'appointment not found' });
  }
  const updatedAppointment = await appointment.update({
    day: body.day,
    time: body.time,
    userId: body.userId,
    consultantId: body.consultantId,
  });
  return res.json({ data: updatedAppointment });
});

// Delete a order by id
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const appointment = await sequelize.models.appointments.findByPk(id);
  if (!appointment) {
    return res.status(404).json({ code: 404, message: 'appointment not found' });
  }
  await appointment.destroy();
  return res.json();
});

module.exports = router;