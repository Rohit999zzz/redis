# Custom Redis-like Server README

## Introduction
This repository contains the setup and usage instructions for a custom Redis-like server implemented in Node.js.

## Prerequisites
- Node.js 14 or higher
- npm (Node Package Manager)

## Installation

### Cloning the Repository
```sh
git clone https://github.com/yourusername/redis-like-server.git
cd redis-like-server
```

### Installing Dependencies
```sh
npm install
```

## Usage

### Starting the Server
```sh
node app.js
```

### Connecting to the Server
You can use any TCP client to connect to the server on port 8000. For example, using `netcat`:
```sh
nc localhost 8000
```

## Commands
The server supports the following commands:

- `PING`: Checks the server's responsiveness.
  ```sh
  PING
  ```

- `SET key value`: Sets the value for a given key.
  ```sh
  SET mykey myvalue
  ```

- `GET key`: Retrieves the value for a given key.
  ```sh
  GET mykey
  ```

## Contributing
Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## Acknowledgments
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [net Module Documentation](https://nodejs.org/api/net.html)
- [Redis Protocol Specification](https://redis.io/topics/protocol)
