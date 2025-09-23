// src/components/Question.tsx
import React from 'react';

interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((opt, index) => (
        <button key={index} onClick={() => onAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
};

export default Question;
