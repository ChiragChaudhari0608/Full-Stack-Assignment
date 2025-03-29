# Frontend - Login System

This is the frontend part of the login system built with React, TypeScript, and modern web technologies.

## Tech Stack

- **React** - A JavaScript library for building user interfaces
- **TypeScript** - For type-safe JavaScript
- **React Query** - For efficient server state management
- **React Hook Form** - For form handling and validation
- **Zod** - For schema validation
- **Axios** - For making HTTP requests
- **React Router** - For client-side routing

## Project Structure

```
frontend/
├── src/
│   ├── api/           # API related functions
│   ├── components/    # React components
│   │   └── LoginForm.tsx
│   ├── hooks/        # Custom React hooks
│   │   └── useLogin.ts
│   ├── types/        # TypeScript type definitions
│   ├── App.tsx       # Main application component
│   ├── index.tsx     # Application entry point
│   ├── styles.css    # Global styles
│   └── index.css     # Base styles
├── public/           # Static assets
├── package.json      # Project dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```
   REACT_APP_API_URL=http://localhost:3001
   ```

## Running the Project

1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Features

- User authentication (login)
- Form validation using Zod
- Error handling
- Responsive design
- Type-safe development
- Modern UI with custom styling

## Development

- The project uses Create React App with TypeScript
- ESLint and Prettier are configured for code quality
- TypeScript is strictly configured for better type safety

## Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `build` directory.

## Testing

```bash
npm test
# or
yarn test
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
