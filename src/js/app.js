// TODO: write your code here
import ErrorRepository from './errorRepository';

const errorsLog = [
  [404, 'Not found'],
  [500, 'Internal server error'],
  [301, 'Redirect'],
];

const errors = new ErrorRepository(errorsLog);
console.log(errors.translate(301));
