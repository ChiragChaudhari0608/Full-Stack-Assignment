# Backend - Login System

This is the backend part of the login system built with Node.js, Express, and TypeScript.

## Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework
- **TypeScript** - For type-safe JavaScript
- **Prisma** - Database management
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables management

## Project Structure

```
backend/
├── src/
│   ├── controllers/   # Business logic and route controllers
│   ├── routes/        # API routes
│   └── index.ts       # Main application file
├── prisma/            # Database schema and migrations
├── .env               # Environment variables
├── package.json       # Project dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up Prisma:
   ```bash
   npx prisma migrate dev --name init
   ```

4. Create a `.env` file in the root directory:
   ```
   PORT=3001
   JWT_SECRET=your_jwt_secret_key
   DATABASE_URL="your_database_url"
   ```

## Running the Project

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. The server will start on `http://localhost:3001`

## API Endpoints

### Authentication
- `POST /login` - User login
  - Request body:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Login successful",
      "data": {
        "token": "jwt_token"
      }
    }
    ```
  - Error Response (401):
    ```json
    {
      "success": false,
      "message": "Invalid uid or password"
    }
    ```

### Response Format
```json
{
  "success": true/false,
  "message": "Response message",
  "data": {} // Optional data object
}
```

## Features

- User authentication
- JWT-based authorization
- Password hashing with bcrypt
- Input validation
- Error handling
- CORS enabled
- Environment configuration
- TypeScript support
- Database management with Prisma

## Development

- The project uses TypeScript for type safety
- ESLint is configured for code quality
- Environment variables are managed with dotenv
- Prisma for database operations

## Testing

```bash
npm test
# or
yarn test
```

## Security Features

- Password hashing with bcrypt
- JWT for authentication
- CORS protection
- Input validation
- Error handling
- Secure headers

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Error Handling

The API returns appropriate HTTP status codes:
- 200: Success
- 400: Bad Request
- 401: Unauthorized (Invalid credentials)
- 404: Not Found
- 500: Internal Server Error

## Logging

The application logs important events and errors to the console. In production, you might want to use a proper logging service. 