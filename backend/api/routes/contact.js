'use strict';

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const contactController = require('../controllers/contactController');

// Define validation rules for the contact form
const contactValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
  body('message').notEmpty().withMessage('Message is required')
];

// Route for creating a new contact
router.post('/create', contactValidationRules, contactController.createContact);

// Route for getting all contacts
router.get('/', contactController.getContacts);

module.exports = router;