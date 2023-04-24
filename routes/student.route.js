const express = require('express')
const route = express.Router()
const std = require('../controllers/student.controller')
const auth = require("../middleware/auth");
route.get('/',auth, std.findAll);

route.get('/:id', std.findOne);

route.post('/Add', std.create);

route.patch('/:id',std.update);

route.delete('/:id',std.delete);

 

module.exports = route;