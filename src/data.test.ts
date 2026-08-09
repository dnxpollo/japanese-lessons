import { questions } from './data';

describe('questions data', () => {
  test('cada pergunta tem uma resposta que existe entre as opções', () => {
    questions.forEach((question) => {
      expect(question.options).toContain(question.answer);
    });
  });
});