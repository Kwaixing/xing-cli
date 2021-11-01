import { Question } from './types.js';

export default class Creator {
  defaultQuestion: Question;
  questions: Question[];
  constructor() {
    this.defaultQuestion = {
      name: 'features',
      message: 'check feature of your repo',
      pageSize: 10,
      type: 'list',
      choices: [],
    };
    this.questions = [];
  }
  getAllQuestions() {
    this.questions.forEach((item) => {
      const originalWhen = item.when || (() => true);
      item.when = (ans) => originalWhen(ans);
    });
    return [this.defaultQuestion, ...this.questions];
  }
}
