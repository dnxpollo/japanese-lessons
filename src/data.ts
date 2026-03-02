// src/data/questions.ts
export interface QuestionData {
  question: string;
  options: string[];
  answer: string;
}

export const questions: QuestionData[] = [
  {
    question: "Qual a capital do Japão?",
    options: ["Osaka", "Toyama", "Tokyo", "Hiroshima"],
    answer: "Tokio"
  },
  {
    question: "Como falar 'eu te amo' em japonês?",
    options: ["Aishiteru", "Arigatou", "Ohayo", "Omedeto"],
    answer: "Aishiteru"
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
  ,
  {
    question: "Como falar 'obrigado' em japonês?",
    options: ["Arigato", "Aishiteru", "Onegai", "Baka"],
    answer: "Arigato"
  }
  ,
  {
    question: "Qual árvore representa o Japão?",
    options: ["Laranjeira", "Mangueira", "Cerejeira", "Abacateiro"],
    answer: "Cerejeira"
  },
  {
    question: "Em qual cidade está localizado o Monte Fuji?",
    options: ["Yamanashi", "Yamaguchi", "Hokkaidou", "Toyama"],
    answer: "Yamanashi"
  }
];


