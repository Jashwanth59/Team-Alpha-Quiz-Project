export class Quiz {
    ownerId;
    id;
    items = [];
    timerLength;
    numQuestions;
    studentScores = [];
    constructor(ownerId, id, items, timerLength, numQuestions, studentScores) {
        this.ownerId = ownerId;
        this.id = id;
        this.items = items;
        this.timerLength = timerLength;
        this.numQuestions = numQuestions;
    }
    getQuizId() {
        return this.id;
    }
    getQuestionCount() {
        return this.numQuestions;
    }
    getOwnerId() {
        return this.ownerId;
    }
    getTimerLength() {
        return this.timerLength;
    }
}