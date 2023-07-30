import express from 'express';
import bodyParser from 'body-parser';
import { PersonController } from './controllers/personController';
import { sequelize } from './database';
const sequelizeStream = require('node-sequelize-stream');

console.log(sequelize.models)
console.log('sequelize.models 2')

sequelizeStream(sequelize, 10, true);

const app = express();
const port = 3000; // Choose your desired port number

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Create an instance of the PersonController
const personController = new PersonController();

// Define your routes
app.post('/person', personController.createPerson);
app.get('/person', personController.getAllPersons);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
