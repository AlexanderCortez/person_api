# How to start

Make sure to have typescript installed global.

`npm install -g typescript`

Installing deps,

`npm install`

Create a `.env` file in the root of the project with your desired values using `env-example` as reference.

## Available scripts

#### Build the project:

`npm run build`

#### Run project in development mode:

`npm run dev`

#### Running built code:

`npm start`

#### Tests:

`npm run test`

#### Linter:

`npm run lint`

## API

GET - `/api/people`

queryParams:

`sortBy`: name, favoriteFood, favoriteMovie, status, date

`sortDir`: asc, desc