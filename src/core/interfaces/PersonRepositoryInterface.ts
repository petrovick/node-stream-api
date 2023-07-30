import { Readable } from 'stream';
import { Person } from '../entities/Person';

interface PersonRepositoryInterface {
  create(name: string, birthdate: Date): Promise<Person>;
  getAllStream(): Promise<Readable>;
  getAll(): Promise<Person[]>;
}

export { PersonRepositoryInterface };
