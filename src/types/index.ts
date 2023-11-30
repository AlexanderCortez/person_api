export interface Env {
  PORT: number
}

export type Person = {
  name: string;
  favoriteFood: string;
  favoriteMovie: string;
  status: 'Inactive' | 'Active';
  date?: Date;
};