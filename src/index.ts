var os = require('os');
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
app.get('/person/stream', personController.getAllPersonsStream);
app.get('/person', personController.getAllPersons);
app.get('/healthcheck', (req: any, res: any) => {
  const formatMemoryUsage = (data: any) => `${Math.round(data / 1024 / 1024 * 100) / 100} MB`
  const memoryData = process.memoryUsage();

  res.status(200).json({
    rss: `${formatMemoryUsage(memoryData.rss)} -> Resident Set Size - total memory allocated for the process execution`,
    heapTotal: `${formatMemoryUsage(memoryData.heapTotal)} -> total size of the allocated heap`,
    heapUsed: `${formatMemoryUsage(memoryData.heapUsed)} -> actual memory used during the execution`,
    external: `${formatMemoryUsage(memoryData.external)} -> V8 external memory`,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
