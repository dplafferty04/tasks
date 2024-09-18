import { Question, QuestionType } from "./interfaces/question";

export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    return {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
}

export function isCorrect(question: Question, answer: string): boolean {
    return question.expected.trim().toLowerCase() === answer.trim().toLowerCase();
}

export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question") {
        return true; // Any answer is valid for short answer questions.
    }
    if (question.type === "multiple_choice_question") {
        return question.options.includes(answer); // Answer must be one of the options.
    }
    return false;
}

export function toShortForm(question: Question): string {
    return `${question.id}: ${question.name.slice(0, 10)}`;
}

export function toMarkdown(question: Question): string {
    let markdown = `# ${question.name}\n${question.body}`;
    if (question.type === "multiple_choice_question") {
        markdown += "\n" + question.options.map(option => `- ${option}`).join("\n");
    }
    return markdown;
}

export function renameQuestion(question: Question, newName: string): Question {
    return { ...question, name: newName };
}

export function publishQuestion(question: Question): Question {
    return { ...question, published: !question.published };
}

export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {
        ...oldQuestion,
        id: id,
        name: `Copy of ${oldQuestion.name}`,
        published: false
    };
}

export function addOption(question: Question, newOption: string): Question {
    return {
        ...question,
        options: [...question.options, newOption]
    };
}

export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    return {
        ...contentQuestion,
        id: id,
        name: name,
        points: points,
        published: false
    };
}