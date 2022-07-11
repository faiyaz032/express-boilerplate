import dotenv from 'dotenv';
import express from 'express';
import { defaultErrorHandler, notFoundHandler } from './middlewares/errorHandler.js';

const app = express();
dotenv.config();

//root route
app.get('/', (req, res) => {
  res.status(200).json({ status: 'success', message: 'ROOT ROUTE OF HELLO THERE' });
});

app.all('*', notFoundHandler);
app.use(defaultErrorHandler);

export default app;
