// Application Layer: src/application/personService.ts
import { CreatePerson } from '../core/useCases/CreatePerson';
import { GetAllPersons } from '../core/useCases/GetAllPersons';
import { PersonRepository } from '../infrastructure/repositories/PersonRepository';

class PersonService {
  private createPerson: CreatePerson;
  private getAllPersons: GetAllPersons;

  constructor() {
    const personRepository = new PersonRepository();
    this.createPerson = new CreatePerson(personRepository);
    this.getAllPersons = new GetAllPersons(personRepository);
  }

  async createUser(name: string, birthdate: Date) {
    return this.createPerson.execute(name, birthdate);
  }

  async getAllUsers() {
    return this.getAllPersons.execute();
  }
}

export { PersonService };
