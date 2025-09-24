// src/App.tsx
import React, { useState } from 'react';

// 🧩 Componentes
import Header from './Header';
import HeroSection from './HeroSection';
import LessonList from './LessonList';
import AboutCourse from './AboutCourse';
import Question from './Question';
import Footer from './Footer';

// 🎨 Estilos
import './App.css';

// 📚 Dados
import { questions } from './data';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

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
      alert(`Fim do quiz! Você acertou ${score + (isCorrect ? 1 : 0)} de ${questions.length}`);
    }
  };

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutCourse />
      <LessonList />

      <div id='licoes' style={{ padding: '2rem' }}>
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
