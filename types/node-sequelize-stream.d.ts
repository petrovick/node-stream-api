// declare module 'node-sequelize-stream' {
//   import { Stream } from 'stream';
//   import { QueryStream } from 'node-sequelize-stream';

//   class QueryStream extends Stream {
//     constructor(text: string, values?: any, options?: any);
//   }

//   export = QueryStream;
// }
declare module 'node-sequelize-stream' {
  import { QueryStream } from 'node-sequelize-stream';

  export = QueryStream;
}
