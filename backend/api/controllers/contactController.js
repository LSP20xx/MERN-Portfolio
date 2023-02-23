'use strict';

const dotenv = require('dotenv');
dotenv.config();

const xss = require('xss');
const Contact = require('../models/Contact');
const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: 'sandboxeb4459006235495cabc9738cc8cfa9c2.mailgun.org'
});

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

    // Send email via Mailgun
    const data = {
      from: process.env.MAILGUN_FROM,
      to: process.env.MAILGUN_TO,
      subject: 'New Contact Form Submission',
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage: ${sanitizedMessage}`
    };
    mailgun.messages().send(data, (error, body) => {
      if (error) {
        console.log(error);
      }
      console.log(body);
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