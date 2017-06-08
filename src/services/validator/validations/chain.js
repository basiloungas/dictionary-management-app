import Validation from './base-validation';

export default class ChainValidation extends Validation {
  constructor() {
    super();
    this.errorMessage = 'Chain validation error'
    this.errorKey = 'chain'
  }

  applyRule(entryA, entryB) {
    if (entryA.range === entryB.domain && entryA.domain !== entryB.range) {
      this.markWithError(entryA);
      this.markWithError(entryB);
    }
  }

  static check(dictionary) {
    const validator = new ChainValidation();
    return validator.applyTo(dictionary);
  }
}
