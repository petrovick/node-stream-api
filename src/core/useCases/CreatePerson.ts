import { PersonRepository } from '../../infrastructure/repositories/PersonRepository';
import { Person } from '../entities/Person';

class CreatePerson {
  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  async execute(name: string, birthdate: Date): Promise<Person> {
    // Add business logic if needed
    return this.personRepository.create(name, birthdate);
  }
}

export { CreatePerson };
