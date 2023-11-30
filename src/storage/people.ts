import { Person } from 'types';

const peopleList: Person[] = [
  {
    name: 'Rocky',
    favoriteFood: 'Sushi',
    favoriteMovie: 'Back to The Future',
    status: 'Inactive',
  },
  {
    name: 'Miroslav',
    favoriteFood: 'Sushi',
    favoriteMovie: 'American Psycho',
    status: 'Active',
  },
  {
    name: 'Donny',
    favoriteFood: 'Singapore chow mei fun',
    favoriteMovie: 'The Princess Bride',
    status: 'Inactive',
  },
  {
    name: 'Matt',
    favoriteFood: 'Brisket Tacos',
    favoriteMovie: 'The Princess Bride',
    status: 'Active',
  },
];

const getPeople = () => {
  return peopleList.map((person) => ({ ...person, date: new Date() }));
};

export { getPeople };
