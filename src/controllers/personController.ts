import { Request, Response } from 'express';
import { PersonService } from '../application/personService';

const personService = new PersonService();

class PersonController {
  async createPerson(req: Request, res: Response) {
    try {
      const { name, birthdate } = req.body;
      const createdPerson = await personService.createUser(name, new Date(birthdate));
      res.status(201).json(createdPerson);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllPersons(req: Request, res: Response) {
    try {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Disposition', 'attachment; filename="people.json"'); // Change the filename if needed
  
      const stream = await personService.getAllUsers();
  
      // Log when the stream starts piping
      console.log('Piping stream to response...');
  
      // Pipe the Readable stream to the response object
      stream.pipe(res);

      stream.on('data', (row: any) => {
        console.log('Not empty')
        console.log(row)
        console.log('Not empty 2')
      });
  
      // Handle any errors that might occur during the streaming process
      stream.on('error', (error: any) => {
        console.error('Error streaming data:', error);
        res.status(500).end(); // Set an appropriate HTTP status code and end the response
      });
  
      // Log when the stream has finished piping
      stream.on('end', () => {
        console.log('Streaming completed.');
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  
  }
}

export { PersonController };
