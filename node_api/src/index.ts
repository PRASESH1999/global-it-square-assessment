import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';
import connectdDB from './config/db';
import productsRouter from './routes/products.route';
import swaggerSpec from './swagger';

dotenv.config();
const app = express();

// DATABASE CONNECTION
connectdDB();

// CORS
app.use(cors());

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SWAGGER
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ROUTES
app.use('/api/products', productsRouter);

// HANDELLING ROOT
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// ANONYMOUS ROUTES HANDELLING
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// START SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
