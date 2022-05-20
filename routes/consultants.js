const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');
// CRUD  get post put delete


// Get all products
router.get('/', permission('admin' , 'client'), async (req, res) => {
    const consultants = await sequelize.models.consultants.findAndCountAll()
    return res.status(200).json({ data: consultants });
});


// Create a new product
router.post('/',  permission('admin'), async (req, res) => {
    const { body } = req;
    const consultant = await sequelize.models.consultants.create({
        name: body.name,
        email: body.email,
        password: body.password,
        image: body.image,
        title: body.title,
        descriptionshort: body.descriptionshort,
        price: body.price,
        description: body.description,
        availability: body.availability,
        communications: body.communications,
        webpage: body.webpage,
        phone: body.phone,
        curricullum: body.curricullum,
        cedula: body.cedula,
        address: body.address,
    })
    await consultant.save();
    return res.status(201).json({ data: consultant })
});


// Update a product by id
router.put('/:id', permission('admin'), async (req, res) => {
    const { body, params: { id } } = req;
    const consultant = await sequelize.models.consultants.findByPk(id);
    if (!consultant) {
        return res.status(404).json({ code: 404, message: 'Consultant not found' });
      }

      const updatedConsultant = await consultant.update({
        email: body.email,
        password: body.password,
        image: body.image,
        title: body.title,
        descriptionshort: body.descriptionshort,
        price: body.price,
        description: body.description,
        availability: body.availability,
        communications: body.communications,
        webpage: body.webpage,
        phone: body.phone,
        curricullum: body.curricullum,
        cedula: body.cedula,
        address: body.address,
      });
    
      return res.json({ data: updatedConsultant });
});


// Delete a product by id
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const consultant = await sequelize.models.consultants.findByPk(id);
  if (!consultant) {
    return res.status(404).json({ code: 404, message: 'Consultant not found' });
  }
  await consultant.destroy();
  return res.json();

});


module.exports = router;