import express from 'express';

const routes = express.Router();

routes.use('*', (_, res) => {
  res.sendNotFound();
});

export default routes;
