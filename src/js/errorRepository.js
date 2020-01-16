export default class ErrorRepository {
  constructor(errors) {
    this.errors = new Map(errors);
  }

  translate(code) {
    return (this.errors.has(code)) ? this.errors.get(code) : 'Unknown error';
  }
}
