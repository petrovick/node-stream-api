// // import { Model, DataTypes, Sequelize } from 'sequelize';
// // import { QueryStream } from 'node-sequelize-stream';

// // // Define the custom class ModelWithStream that combines Model and SequelizeStream
// // class ModelWithStream extends Model {
// //   // Extend the Model constructor to include any additional properties/methods you need
// //   // Here, we define a custom method that returns a QueryStream for a given query
// //   static createQueryStream(query: string, options: any, sequelize: Sequelize) {
// //     return sequelize.query(new QueryStream(query, options));
// //   }
// // }

// // export { ModelWithStream };
// import { Model, Sequelize } from 'sequelize';
// import QueryStream from 'node-sequelize-stream';
// import { Readable } from 'stream';

// class ModelWithStream extends Model {
//   static createQueryStream(query: string, options?: any): Readable {
//     const sequelizeInstance = this.sequelize as Sequelize;
//     return sequelizeInstance.query(new QueryStream(query, options)) as Readable;
//   }
// }

// export { ModelWithStream };
