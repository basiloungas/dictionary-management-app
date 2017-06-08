import Validation from './base-validation';

export default class DuplicateDomainRangeValidation extends Validation {
  constructor() {
    super();
    this.errorMessage = 'Duplicate Domain Range validation error'
    this.errorKey = 'duplicateDomainRange'
  }

  applyRule(entryA, entryB) {
    if (this.isAlreadyMarked(entryA) && this.isAlreadyMarked(entryB)) {
      return;
    }

    if (entryA.domain === entryB.domain && entryA.range === entryB.range) {
      this.markWithError(entryA);
      this.markWithError(entryB);
    }
  }

  static check(dictionary) {
    const validator = new DuplicateDomainRangeValidation();
    return validator.applyTo(dictionary);
  }
}
