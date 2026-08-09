import { useState } from 'react';
import { questions } from '../data';
import useLocalStorage from './useLocalStorage';
import { calculateStreak } from './streak';

export interface DayRecord {
  date: string;
  score: number;
  total: number;
}

export function useQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useLocalStorage<DayRecord[]>('quizHistory', []);
  const streak = calculateStreak(history);

  const quizFinished = currentIndex >= questions.length;
  const currentQuestion = questions[currentIndex];

  const saveTodayResult = (finalScore: number) => {
    const today = new Date().toISOString().slice(0, 10);

    setHistory(prev => {
      const withoutToday = prev.filter(record => record.date !== today);
      return [...withoutToday, { date: today, score: finalScore, total: questions.length }];
    });
  };

  const handleAnswer = (selected: string) => {
    const isCorrect = selected === currentQuestion.answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      const finalScore = score + (isCorrect ? 1 : 0);
      saveTodayResult(finalScore);
      setCurrentIndex(nextIndex);
    }
  };

  const restartAttempt = () => {
    setScore(0);
    setCurrentIndex(0);
  };

  return {
    currentQuestion,
    quizFinished,
    score,
    history,
    streak,
    handleAnswer,
    restartAttempt,
  };
}