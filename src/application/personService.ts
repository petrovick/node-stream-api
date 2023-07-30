// Application Layer: src/application/personService.ts
import { CreatePerson } from '../core/useCases/CreatePerson';
import { GetAllPersons } from '../core/useCases/GetAllPersons';
import { GetAllPersonsStream } from '../core/useCases/GetAllPersonsStream';
import { PersonRepository } from '../infrastructure/repositories/PersonRepository';

class PersonService {
  private createPerson: CreatePerson;
  private getAllPersons: GetAllPersons;
  private getAllPersonsStream: GetAllPersonsStream;

  constructor() {
    const personRepository = new PersonRepository();
    this.createPerson = new CreatePerson(personRepository);
    this.getAllPersons = new GetAllPersons(personRepository);
    this.getAllPersonsStream = new GetAllPersonsStream(personRepository);
  }

  async createUser(name: string, birthdate: Date) {
    return this.createPerson.execute(name, birthdate);
  }

  async getAllUsersStream() {
    return this.getAllPersonsStream.execute();
  }

  async getAllUsers() {
    return this.getAllPersons.execute();
  }
}

export { PersonService };
