// src/data/questions.ts
export interface QuestionData {
  question: string;
  options: string[];
  answer: string;
}

export const questions: QuestionData[] = [
  {
    question: "Qual a capital do Japão?",
    options: ["Osaka", "Toyama", "Tokio", "Hiroshima"],
    answer: "Tokio"
  },
  {
    question: "Como falar 'eu te amo' em japonês?",
    options: ["Aishteru", "Arigatou", "Ohayo", "Omedeto"],
    answer: "Aishteru"
  },
  {
    question: "Qual componente principal do tofu?",
    options: ["Peixe", "Soja", "Carne", "Arroz"],
    answer: "Soja"
  },
  {
    question: "Qual nome da máfia do Japão?",
    options: ["Hayabuza", "Yakuza", "Samurais", "Ninjas"],
    answer: "Yakuza"
  },
  {
    question: "Qual anime é considerado o maior anime no Japão?",
    options: ["Naruto", "Dragon Ball", "Pokemon", "One Piece"],
    answer: "Pokemon"
  },
  {
    question: "?",
    options: ["Naruto", "Dragon Ball", "Pokemon", "One Piece"],
    answer: "Pokemon"
  },
  {
    question: "Qual o estilo musical tradicional do Japão?",
    options: ["J-POP", "Rock", "Salsa", "Enka"],
    answer: "Enka"
  }
];
