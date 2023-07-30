import { Request, Response } from 'express';
import { PersonService } from '../application/personService';

const personService = new PersonService();

class PersonController {
  async createPerson(req: Request, res: Response) {
    try {
      const { name, birthdate } = req.body;
      for(var i = 0 ; 0 < 150000 ; i++) {
        await personService.createUser(`name ${i}`, new Date());

      }
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllPersons(req: Request, res: Response) {
    try {
      const { name, birthdate } = req.body;
      const persons = await personService.getAllUsers();
      res.status(200).json(persons);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }

  }

  async getAllPersonsStream(req: Request, res: Response) {
    try {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Disposition', 'attachment; filename="people.json"'); // Change the filename if needed
  
      const stream = await personService.getAllUsersStream();
  
      let isEmpty = true;
      let isFirstItem = true;
      // Log when the stream starts piping
      console.log('Piping stream to response...');
  
      // Pipe the Readable stream to the response object
      // stream.pipe(res);

      stream.on('data', (data: any) => {
        if (!isFirstItem) {
          res.write(',');
        }

        isEmpty = false;
        // Mark that we've written at least one item, so the next ones need commas
      isFirstItem = false;
        res.write(data);
      });
  
      // Handle any errors that might occur during the streaming process
      stream.on('error', (error: any) => {
        console.error('Error streaming data:', error);
        res.status(500).end(); // Set an appropriate HTTP status code and end the response
      });
  
      // Log when the stream has finished piping
      stream.on('end', () => {
        console.log('Streaming completed.');
        if (isEmpty) {
          res.status(404).json({ error: 'Data not found' });
        } else {
          res.end(); // End the response once the stream finishes
        }
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  
  }
}

export { PersonController };
