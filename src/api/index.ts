import express from 'express';
import people from './people';

const routes = express.Router();

routes.use('/people', people);

routes.use('*', (_, res) => {
  res.sendNotFound();
});

export default routes;
