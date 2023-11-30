import express from 'express';
import listPeople from './listPeople';

const router = express.Router();

router.get('/', listPeople);

export default router;