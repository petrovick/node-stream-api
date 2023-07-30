import { Readable } from 'stream';

class CustomReadableStream extends Readable {
  // ... Any additional properties or methods for your custom stream

  // Implement the _read() method to control when to read more data from the source
  _read(size: number) {
    console.log('Custom readable:', size);
    // In this implementation, you can leave it empty as you are pushing data directly in the 'data' event handler.
    // The data will be consumed as it's available from the source (e.g., the database).
  }
}

// Export your custom Readable stream
export { CustomReadableStream };
