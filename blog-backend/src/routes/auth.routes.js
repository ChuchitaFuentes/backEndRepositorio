const express = require('express');
const router = express.Router();
const authController = require ('../controllers/auth.controller');

router.post('/register', authController.register); //enpoint =  http://localhost:3000/register
router.post('/login', authController.login); //enpoint =  http://localhost:3000/register

module.exports =router;