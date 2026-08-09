import React from 'react';
import { DayRecord } from './hooks/useQuiz';

interface QuizHistoryProps {
  history: DayRecord[];
}

const QuizHistory: React.FC<QuizHistoryProps> = ({ history }) => {
  if (history.length === 0) {
    return <p>Você ainda não completou nenhum quiz.</p>;
  }

  return (
    <ul>
      {history.map((record) => (
        <li key={record.date}>
          {record.date}: {record.score} de {record.total}
        </li>
      ))}
    </ul>
  );
};

export default QuizHistory;