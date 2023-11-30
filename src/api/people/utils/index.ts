import { Person } from 'types';

const sortPeopleByKey = (
  people: Person[],
  key: keyof Person,
  dir: 'asc' | 'desc' = 'desc',
) =>
  people.sort((a, b) => {
    const direction = dir === 'asc' ? -1 : 1;
    return (a[key] || 0) > (b[key] || 0) ? 1 * direction : -1 * direction;
  });

export { sortPeopleByKey };