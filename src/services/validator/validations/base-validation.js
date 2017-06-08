export const Severities = {
  Normal: 'NORMAL',
  High: 'HIGH',
}

export default class Validation {
  constructor() {
    this.severity = Severities.Normal;
    this.hasErrors = false;
  }

  applyRule() {
    throw new Error('You have to implement this on your class');
  }

  generateErrorDetails() {
    return {
      severity: this.severity,
      message: this.errorMessage,
    }
  }

  isAlreadyMarked(entry) {
    try {
      return !!entry.errors[this.errorKey];
    } catch (ign) {
      return false;
    }
  }

  markWithError(entry) {
    this.hasErrors = true;

    entry.errors = entry.errors || {};
    entry.errors[this.errorKey] = this.generateErrorDetails();
  }

  iterate(list) {
    const length = list.length;

    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {

        if (this.isAlreadyMarked(list[i]) && this.isAlreadyMarked(list[j])) {
          return;
        }

        this.applyRule(list[i], list[j]);
      }
    }

    return list;
  }

  applyTo(dictionary) {
    const entries = this.iterate(dictionary.entries);

    return {
      ...dictionary,
      hasErrors: this.hasErrors,
      entries,
    };
  }
}
