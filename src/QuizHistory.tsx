import React from 'react';
import { DayRecord } from './hooks/useQuiz';

interface QuizHistoryProps {
  history: DayRecord[];
}

const QuizHistory: React.FC<QuizHistoryProps> = ({ history }) => {
  if (history.length === 0) {
    return <p>Você ainda não completou nenhum quiz.</p>;
  }

  function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString();
}
  return (
    <ul>
      {history.map((record) => (
        <li key={record.date}>
          {formatDate(record.date)}: {record.score} de {record.total}
        </li>
      ))}
    </ul>
  );
};

export default QuizHistory;