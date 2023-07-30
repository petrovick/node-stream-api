import { Readable } from 'stream';
import { PersonRepository } from '../../infrastructure/repositories/PersonRepository';
import { Person } from '../entities/Person';

class GetAllPersonsStream {
  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  async execute(): Promise<Readable> {
    // Add business logic if needed
    try
    {
    return await this.personRepository.getAllStream();
    }
    catch(err) {
      console.log(err)
      throw err;
    }

  }
}

export { GetAllPersonsStream };
