import Creator from './Creator.js';
import { Choice, Question } from './types.js';

export default class ModuleAPI {
  private creator: Creator;
  constructor(creator) {
    this.creator = creator;
  }
  injectOption(feature: Choice) {
    this.creator.defaultQuestion.choices.push(feature);
  }
  injectQuestion(prompt: Question) {
    this.creator.questions.push(prompt);
  }
}
