import Validation from './base-validation';

export default class DuplicateDomainValidation extends Validation {
  constructor() {
    super();
    this.errorMessage = 'Duplicate Domain validation error'
    this.errorKey = 'duplicateDomain'
  }

  applyRule(entryA, entryB) {
    if (entryA.domain === entryB.domain && entryA.range !== entryB.range) {
      this.markWithError(entryA);
      this.markWithError(entryB);
    }
  }

  static check(dictionary) {
    const validator = new DuplicateDomainValidation();
    return validator.applyTo(dictionary);
  }
}
