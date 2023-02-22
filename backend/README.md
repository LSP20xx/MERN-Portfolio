# MERNPortfolio
Web portfolio backend.

## Technologies Used
Node.js
Express.js
MongoDB

## Getting Started
Follow the steps below to get the project up and running on your local machine.

## Prerequisites
Node.js (version X or higher)
MongoDB (version X or higher)

## Installing
Clone the repository.
Install the required packages by running npm install.
Start the server by running npm start.

## Running Tests
To run the test suite, use the following command:

### npm test

## Deployment
To deploy the app, follow the steps below:

Build the app for production by running npm run build.
Start the server in production mode by running npm run start:prod.

## API Documentation
This API provides the following endpoints:

POST /api/contacts/create: This endpoint is used to create a new contact. It requires a JSON payload with name, email, and message fields. Validation rules are defined in contactValidationRules using the express-validator library.

GET /api/contacts: This endpoint is used to retrieve all contacts. It does not require any parameters or payload.

## Authors
Lautaro Perrotti

## License
This project is licensed under the MIT License.