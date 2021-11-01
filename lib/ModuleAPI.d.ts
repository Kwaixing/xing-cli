import { Choice, Question } from './types.js';
export default class ModuleAPI {
    private creator;
    constructor(creator: any);
    injectOption(feature: Choice): void;
    injectQuestion(prompt: Question): void;
}
