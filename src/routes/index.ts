import express, { Router } from 'express';
import transactionRouter from './transaction.routes';

const routes = Router();

routes.use(express.json());

routes.use('/transactions', transactionRouter);

export default routes;
