const express=require('express');
const router =express.Router();
// models
const Role = require('../models/role.model');
//Ajoute de role
router.post('/roles/Add', async (req, res) => {
    const { name } = req.body;
    const role = new Role({ name });
  
    try {
      await role.save();
      res.send(role);
    } catch (error) {
      res.status(500).send(error);
    }
});
//Affichage de role
router.get('/roles/Show', async (req, res) => {
    try {
      const roles = await Role.find();
      res.send(roles);
    } catch (error) {
      res.status(500).send(error);
    }
  });