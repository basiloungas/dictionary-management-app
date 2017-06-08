import ValidatotionsList from './validations';

export default class Validator {
  validations = ValidatotionsList;

  taskGenerator = Validator => dictionary => Validator.check(dictionary);

  constructor() {
    this.taskQueue = [];
    this.generateTasks();
  }

  generateTasks(validationList) {
    this.taskQueue = this.validations.map(this.taskGenerator);
  }

  validate(dictionary) {
    // TODO: refactor with requestIdleCallback or requestAnimationFrame or move to webworker
    return this.taskQueue.reduce((dictionary, task) => task(dictionary), dictionary)
  }
}
