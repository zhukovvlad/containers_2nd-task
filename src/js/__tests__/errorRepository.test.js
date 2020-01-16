import ErrorRepository from '../errorRepository';

test.each([
  ['good case', 404, 'Not found'],
  ['bad case, ', 1234, 'Unknown error'],
])(
  ('should calculate %s'),
  (userCase, code, expected) => {
    const errorsLog = [
      [404, 'Not found'],
      [500, 'Internal server error'],
      [301, 'Redirect'],
    ];
    const errors = new ErrorRepository(errorsLog);
    const result = errors.translate(code);

    expect(result).toEqual(expected);
  },
);
