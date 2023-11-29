import express from 'express';
import cors from 'cors';
import responses from 'middlewares/responses';
import env from 'config/env';
import routes from 'routes';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(responses);
app.use(env.apiPrefix, routes);

export default app;