import React from 'react';

interface LessonCardProps {
  title: string;
  description: string;
  onClick: (title: string) => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ title, description, onClick }) => {
  return (
    <div className="lesson-card">
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => onClick(title)}>Ver lição</button>
    </div>
  );
};

export default LessonCard;
