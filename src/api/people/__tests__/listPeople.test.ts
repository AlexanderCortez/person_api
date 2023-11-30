import supertest from 'supertest';
import server from 'server';
import { Person } from 'types';

const mockPeopleList: Person[] = [
  {
    name: 'Rocky',
    favoriteFood: 'Sushi',
    favoriteMovie: 'Back to The Future',
    status: 'Active',
  },
  {
    name: 'Matt',
    favoriteFood: 'Brisket Tacos',
    favoriteMovie: 'The Princess Bride',
    status: 'Active',
  },
];

const mockGetPeople = jest.fn();

jest.mock('storage/people', () => ({
  getPeople: () => mockGetPeople(),
}));


describe('People', () => {
  let api: supertest.SuperTest<supertest.Test>;

  beforeAll(() => {
    mockGetPeople.mockReturnValueOnce(mockPeopleList);
    api = supertest(server);
  });

  it('should return a list of active people', async () => {
    const response = await api.get('/api/people?sortBy=name');
    const { data } = JSON.parse(response.text);
    expect(data).toHaveLength(2);
    expect(response.statusCode).toBe(200);
  });

  it('should throw error when missing query params', async () => {
    const response = await api.get('/api/people');
    const { message } = JSON.parse(response.text);
    expect(response.statusCode).toBe(400);
    expect(message).toStrictEqual(['sortBy is a required field']);
  });

  it('should throw error when unknown query params value', async () => {
    const response = await api.get('/api/people?sortBy=name&sortDir=none');
    const { message } = JSON.parse(response.text);
    expect(response.statusCode).toBe(400);
    expect(message).toStrictEqual(['sortDir must be one of the following values: asc, desc']);
  });

  it('should throw an error when no active records', async () => {
    mockGetPeople.mockReturnValueOnce([]);
    const response = await api.get('/api/people?sortBy=name&sortDir=asc');
    const { message } = JSON.parse(response.text);
    expect(response.statusCode).toBe(404);
    expect(message).toStrictEqual(['No records found']);
  });
});
