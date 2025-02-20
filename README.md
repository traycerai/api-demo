# api-demo

A RESTful API demo built with Express.js

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd api-demo
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with nodemon
- `npm test`: Run the test suite

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
NODE_ENV=development
```

## API Endpoints

### Health Check
- **URL**: `/health`
- **Method**: `GET`
- **Success Response**:
  - **Code**: 200
  - **Content**: `{ "status": "OK", "message": "Server is healthy" }`

## Development

To run the server in development mode with hot-reload:

```bash
npm run dev
```

The server will start on `http://localhost:3000`

## Testing

To run the test suite:

```bash
npm test
```

## Curl to create user
```bash
 curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"username": "dummy_user", "email": "dummy@example.com", "password": "dummy_password"}'
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
