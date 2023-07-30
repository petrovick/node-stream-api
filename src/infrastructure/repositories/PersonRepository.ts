import { Readable } from 'stream';
import { Person } from '../../core/entities/Person';
import { PersonRepositoryInterface } from '../../core/interfaces/PersonRepositoryInterface';
import { Person as PersonModel } from '../../models/person'; 
import { CustomReadableStream } from '../../utils/CustomReableStream';

class PersonRepository implements PersonRepositoryInterface {
  async create(name: string, birthdate: Date): Promise<Person> {
    const personModel = await PersonModel.create({
      name,
      birthdate
    });

    return new Person(personModel.id, personModel.name, personModel.birthdate)
  }

  async getAll(): Promise<Readable> {
    try {
      // Create a custom Readable stream
      const stream = new CustomReadableStream({ objectMode: true });

      // Create a QueryStream with your custom query
      const query = 'SELECT * FROM person'; // Replace with your custom SQL query
      console.log('Antes do PersonModel.createQueryStream')
      // @ts-ignore
      const queryStream = PersonModel.findAllWithStream(query);
      console.log('Depois do PersonModel.createQueryStream')

      // // When the query stream emits a 'data' event, push the data to our custom Readable stream
      queryStream.on('data', (rows: any) => {
        console.log('data CustomReadableStream:', rows )
        // Transform the raw result into the desired format (e.g., Person entity)

        rows.map((row: any) => stream.push(JSON.stringify(new Person(row.id, row.name, row.birthdate))));
        // Push the transformed entity to the custom stream
        ;
      });

      // // When the query stream emits an 'end' event, signal the end of our custom Readable stream
      queryStream.on('end', () => {
        console.log('ended CustomReadableStream')
        stream.push(null); // Signal the end of the stream
      });
      // // Implement the _read() method to control when to read more data from the database
      // queryStream._read = (a: any, b:any) => {
      //   console.log('Called _read()')
      //   console.log(a)
      //   console.log(b)
      //   console.log('Called _read() 2')
      //   // This method is called when the consumer wants to read more data
      //   // You can leave it empty for now, as the data is already being pushed in the 'data' event handler
      // };

      // Return the custom Readable stream to the caller
      return stream;
    } catch (error) {
      console.log('Error here')
      console.error(error)
      console.log('Error here 2')
      // Handle any errors
      throw error;
    }
  }
}

export { PersonRepository };
