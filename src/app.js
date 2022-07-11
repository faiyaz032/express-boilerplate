import dotenv from 'dotenv';
import express from 'express';
import { defaultErrorHandler, notFoundHandler } from './middlewares/errorHandler.js';
import apiRouter from './routes/index.js';

const app = express();
dotenv.config();

app.use(express.json());

//root route
app.get('/', (req, res) => {
  res.status(200).json({ status: 'success', message: 'ROOT ROUTE OF HELLO THERE' });
});

//routes for apis
app.use('/api', apiRouter);

app.all('*', notFoundHandler);
app.use(defaultErrorHandler);

export default app;
