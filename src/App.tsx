import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './Header';
import HeroSection from './HeroSection';
import LessonList from './LessonList';
import AboutCourse from './AboutCourse';
import Question from './Question';
import Footer from './Footer';
import './App.css';
import { questions } from './data';

interface DayRecord {
  date: string;
  score: number;
  total: number;
}

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useLocalStorage('quizScore', 0);
  const [history, setHistory] = useLocalStorage<DayRecord[]>('quizHistory', []);
  const quizFinished = currentIndex >= questions.length;

  const saveTodayResult = (finalScore: number) => {
    const today = new Date().toISOString().slice(0, 10);

    setHistory(prev => {
      const withoutToday = prev.filter(record => record.date !== today);
      return [...withoutToday, { date: today, score: finalScore, total: questions.length }];
    })
  };

  const handleAnswer = (selected: string) => {
    const currentQuestion = questions[currentIndex];
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
      setCurrentIndex(nextIndex); // Move to the "quiz finished" state
    }
  };

  const restartAttempt = () => {
    setScore(0);
    setCurrentIndex(0);
  };

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutCourse />
      <LessonList />

      <div  id="Licoes" style={{ padding: '2rem' }}>
        <h1>Quiz de Cultura Japonesa 🇯🇵</h1>
        <Question
          question={questions[currentIndex].question}
          options={questions[currentIndex].options}
          onAnswer={handleAnswer}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;
