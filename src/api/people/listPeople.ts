import * as yup from 'yup';
import { Request, Response } from 'express';
import { getPeople } from 'storage/people';
import { Person } from 'types';
import { validateSchema } from 'api/utils/validation';
import { sortPeopleByKey } from './utils';

type PeopleQuery = {
  sortBy: keyof Person;
  sortDir: 'asc' | 'desc'
};

const querySchema = yup.object({
  sortBy: yup.mixed().oneOf(['name', 'favoriteFood', 'favoriteMovie', 'status', 'date']).required(),
  sortDir: yup.mixed().oneOf(['asc', 'desc']).optional(),
});

const listPeople = async (
  req: Request<unknown, unknown, unknown, PeopleQuery>,
  res: Response,
) => {
  const query = await validateSchema(querySchema, req.query);

  if (query.errors) {
    return res.sendInvalid(query.errors);
  }

  const list = getPeople();
  const people = sortPeopleByKey(list, req.query.sortBy, req.query.sortDir);
  const activePeople = people.filter((person) => person.status === 'Active');

  if (!activePeople.length) {
    return res.sendNotFound('No records found');
  }

  const data = activePeople.map((person) => ({
    name: person.name,
    favoriteMovie: person.favoriteMovie,
    date: person.date,
  }));

  res.sendSuccess(data);
};

export default listPeople;
