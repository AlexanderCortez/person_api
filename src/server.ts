import express from 'express';
import cors from 'cors';
import responses from 'middlewares/responses';
import env from 'config/env';
import api from 'api';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(responses);
app.use(env.apiPrefix, api);

export default app;