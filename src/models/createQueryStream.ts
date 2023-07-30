// import { Model, QueryTypes, Sequelize } from 'sequelize';
// import { QueryStream } from 'node-sequelize-stream';
// import { Readable } from 'stream';

// function addCreateQueryStreamToModel(model: typeof Model): void {
//   model.prototype.createQueryStream = function (query: string, options?: any): Readable {
//     const sequelizeInstance = this.sequelize;
//     const queryStream = new QueryStream(query, options);
//     const queryOptions = { type: QueryTypes.SELECT };
//     const stream = sequelizeInstance.query(queryStream, queryOptions);

//     // Convert the promise-based stream to a Readable stream
//     const readableStream = new Readable({
//       objectMode: true,
//       read() {},
//     });

//     stream.then((results: any) => {
//       for (const row of results) {
//         readableStream.push(row);
//       }
//       readableStream.push(null);
//     });

//     return readableStream;
//   };

// }

// export { addCreateQueryStreamToModel };
