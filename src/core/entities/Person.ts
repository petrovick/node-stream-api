class Person {
  public id: number;
  public name: string;
  public birthdate: Date;

  constructor(id: number, name: string, birthdate: Date) {
    this.id = id;
    this.name = name;
    this.birthdate = birthdate;
  }
}

export { Person };
