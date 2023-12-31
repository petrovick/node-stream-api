import { Readable } from 'stream';
import { PersonRepository } from '../../infrastructure/repositories/PersonRepository';
import { Person } from '../entities/Person';

class GetAllPersons {
  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  async execute(): Promise<Person[]> {
    // Add business logic if needed
    try
    {
      return await this.personRepository.getAll();
    }
    catch(err) {
      console.log(err)
      throw err;
    }

  }
}

export { GetAllPersons };
