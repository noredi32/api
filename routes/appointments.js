const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

// Get all appointments
router.get('/', permission('admin'), async (req, res) => {
  const appointments = await sequelize.models.appointments.findAndCountAll();
  return res.status(200).json({ data: appointments });
});

// Creating a new appointment
router.post('/', permission('admin', 'client'), async (req, res) => {
  const { body } = req;
  const appointment = await sequelize.models.appointments.create({
    userId: body.userId,
    consultantId: body.consultantId,
    date: body.date,
    time: body.time,
  });
  await appointment.save();
  return res.status(201).json({ data: appointment });
});

// Update a appointment by id
router.put('/:id', permission('admin', 'client'), async (req, res) => {
  const { body, params: { id } } = req;
  const appointment = await sequelize.models.appointments.findByPk(id);
  if (!appointment) {
    return res.status(404).json({ code: 404, message: 'Appointment not found' });
  }
  const updatedAppointment = await appointment.update({
    userId: body.userId,
    consultantId: body.consultantId,
    date: body.date,
    time: body.time,
  });
  return res.json({ data: updatedAppointment });
});

// Delete an appointment by id
router.delete('/:id', permission('admin', 'client'), async (req, res) => {
  const { params: { id } } = req;
  const appointment = await sequelize.models.appointments.findByPk(id);
  if (!appointment) {
    return res.status(404).json({ code: 404, message: 'Appointment not found' });
  }
  await appointment.destroy();
  return res.json();
});

module.exports = router;