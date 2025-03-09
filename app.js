const net = require('net');

class CustomParser {
  static parse(data) {
    const parts = data.toString().trim().split(/\s+/);
    return parts.length > 0 ? parts : null;
  }
}

const store = {};

const server = net.createServer((connection) => {
  console.log('Client connected');

  connection.on('data', (data) => {
    const reply = CustomParser.parse(data);
    if (!reply) return;

    const command = reply[0].toLowerCase();

    switch (command) {
      case 'ping':
        connection.write('+PONG\r\n');
        break;

      case 'set':
        if (reply.length < 3) {
          connection.write('-ERR wrong number of arguments for SET\r\n');
          return;
        }
        const setKey = reply[1];
        const setValue = reply.slice(2).join(' '); // Supports values with spaces
        store[setKey] = setValue;
        connection.write('+OK\r\n');
        break;

      case 'get':
        if (reply.length < 2) {
          connection.write('-ERR wrong number of arguments for GET\r\n');
          return;
        }
        const getKey = reply[1];
        const value = store[getKey];

        if (value === undefined) {
          connection.write('$-1\r\n');
        } else {
          connection.write(`$${value.length}\r\n${value}\r\n`);
        }
        break;

      default:
        connection.write('-ERR unknown command\r\n');
    }
  });

  connection.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
