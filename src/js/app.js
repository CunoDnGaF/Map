export default class ErrorRepository {
    constructor () {
      this.errors = new Map([
        [500, 'Internal Server Error'],
        [501, 'Not Implemented'],
        [502, 'Bad Gateway'],
        [503, 'Service Unavailable'],
        [400, 'Bad Request'],
        [404, 'Not Found'],
        [406, 'Not Acceptable']
      ]);
    }

    translate(code) {
      if (!this.errors.has(code)) {
        throw new Error('Uncnown error');
      }
      return this.errors.get(code);
    }
}