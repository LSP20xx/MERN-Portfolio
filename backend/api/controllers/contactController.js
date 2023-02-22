'use strict';

const xss = require('xss');
const Contact = require('../models/Contact');

exports.createContact = async (req, res, next) => {
  try {
    const {
      name,
      email,
      message
    } = req.body;

    // Sanitize the inputs to prevent XSS attacks
    const sanitizedName = xss(name);
    const sanitizedEmail = xss(email);
    const sanitizedMessage = xss(message);

    const contact = await Contact.create({
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage
    });

    res.status(201).json({
      success: true,
      data: contact
    });
  } catch (err) {
    next(err);
  }
};

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (err) {
    next(err);
  }
};