import { Model, DataTypes, Sequelize, QueryTypes } from 'sequelize';
import { sequelize } from '../database';
// import { ModelWithStream } from './ModelWithStream';
// import { addCreateQueryStreamToModel } from './createQueryStream';
import QueryStream from 'node-sequelize-stream';
import { Readable } from 'stream';

class Person extends Model {
  public id!: number;
  public name!: string;
  public birthdate!: Date;

  // static createQueryStream(query: string, options?: any): Readable {
  //   const sequelizeInstance = this.sequelize as Sequelize;
  //   const queryStream = new QueryStream(query, options);
  //   const queryOptions = { type: QueryTypes.SELECT };
  //   const stream = sequelizeInstance.query(queryStream, queryOptions);

  //   // Convert the promise-based stream to a Readable stream
  //   const readableStream = new Readable({
  //     objectMode: true,
  //     read() {},
  //   });

  //   stream.then((results: any) => {
  //     for (const row of results) {
  //       readableStream.push(row);
  //     }
  //     readableStream.push(null);
  //   });

  //   return readableStream;
  // }
}

Person.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize, // Use the Sequelize instance here
    modelName: 'Person',
    tableName: 'person', // Replace with your actual table name
    timestamps: false
  }
);

// Apply the ModelWithStream mixin to the Person class
// Object.assign(Person, ModelWithStream);
// addCreateQueryStreamToModel(Person);

export { Person };
