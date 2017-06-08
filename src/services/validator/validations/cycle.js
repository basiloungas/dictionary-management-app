import Validation, {Severities} from './base-validation';

export default class CycleValidation extends Validation {
  constructor() {
    super();

    this.severity = Severities.High;
    this.errorMessage = 'Cycle validation error'
    this.errorKey = 'cycle'
  }

  applyRule(entryA, entryB) {
    if (entryA.domain === entryB.range && entryA.range === entryB.domain) {
      this.markWithError(entryA);
      this.markWithError(entryB);
    }
  }

  static check(dictionary) {
    const validator = new CycleValidation();
    return validator.applyTo(dictionary);
  }
}
