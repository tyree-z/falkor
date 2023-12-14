
# Falkor API

## Introduction
Welcome to the Falkor API, a custom-built API using the Adonis framework and TypeScript. This API is designed for personal use, providing a range of functionalities to enhance productivity and streamline tasks.

## Features
- **Built with Adonis:** Leverages the robustness of the Adonis framework.
- **TypeScript Support:** Ensures type safety and enhances development experience.
- **Customizable Endpoints:** Tailored endpoints to suit varied personal requirements.
- **Security:** Implements industry-standard security protocols.
- **Efficient Data Handling:** Optimized for fast and reliable data processing.

# Getting Started
To start using the Falkor API, follow these steps:

## 1. Clone the Repository
   ```
   git clone https://github.com/tyree-z/falkor.git
   cd falkor
   ```


## 2. Set up the Environment

Follow the instructions to set up your local development environment for Falkor. Once the setup is complete, you need to configure environment variables. These variables are crucial for the proper functioning of Falkor.

Here's an example of the necessary environment variables:

```markdown
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=
DRIVE_DISK=local
```

### Explanation of Variables

1. **PORT**: Defines the port number on which your AdonisJS server will listen. Default is `3333`.
2. **HOST**: The host address for your server. Typically set to `0.0.0.0` to accept requests from all IPs.
3. **NODE_ENV**: Determines the environment in which your Node.js application is running (`development`, `production`, `test`).
4. **APP_KEY**: A unique key used by AdonisJS for encryption and hashing. Generate it using `adonis key:generate`.
5. **DRIVE_DISK**: Specifies the storage disk

Remember to replace these values with your specific configurations and never share sensitive data such as your `APP_KEY` publicly.

## 3. Install Dependencies:
   ```
   npm install
   ```

# Usage
### Development Mode
Run in Development Mode (Hot Reloads On File Changes)

```
node ace serve --watch
```

### Production Mode
Run in Production Mode

```
node ace build --production

cd build
node server.js
```

## Documentation
For more detailed documentation on the API endpoints and their functionalities, refer to [API Documentation](#).

## Contributing
We welcome contributions to Falkor API. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
