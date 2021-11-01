import { Question } from './types.js';
export default class Creator {
    defaultQuestion: Question;
    questions: Question[];
    constructor();
    getAllQuestions(): Question[];
}
