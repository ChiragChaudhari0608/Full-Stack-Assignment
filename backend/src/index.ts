import express from 'express';
import cors from 'cors'; // Import cors middleware
import userRoutes from './routes/userRoutes';

const app = express();

// Enable CORS for requests from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from the frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow all necessary methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
}));

app.use(express.json());

app.use('/api', userRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});