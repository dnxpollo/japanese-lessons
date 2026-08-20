import React, { useEffect } from 'react';
import  { useQuiz } from './hooks/useQuiz';
import { useToasts } from './hooks/useToasts';
import QuizHistory from './QuizHistory';
import ToastContainer from './ToastContainer';
import Header from './Header';
import HeroSection from './HeroSection';
import LessonList from './LessonList';
import AboutCourse from './AboutCourse';
import Question from './Question';
import Footer from './Footer';
import './App.css';


const App: React.FC = () => {
  const { currentQuestion, handleAnswer, history, streak, quizFinished, restartAttempt } = useQuiz();
  const { toasts, addToast } = useToasts();
      
  useEffect(() => {
    if(quizFinished) {
      addToast('Quiz concluido! Seu resultado foi salvo!');
    }
  }, [quizFinished]);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutCourse />
      <LessonList />

      <div id="Licoes" style={{ padding: '2rem' }}>
        <h1>Quiz de Cultura Japonesa 🇯🇵</h1>
        {quizFinished ? (
          <div>
            <p>Quiz concluído! Resultado salvo no seu histórico de hoje.</p>
            <button onClick={restartAttempt}>Jogar novamente</button>
          </div>
        ) : (
          <>
            <Question
              question={currentQuestion.question}
              options={currentQuestion.options}
              onAnswer={handleAnswer}
            />
            <button onClick={restartAttempt} style={{ marginTop: '1rem' }}>
              Recomeçar tentativa
            </button>
          </>
        )}
        <h2>Seu Histórico</h2>
        <p>Sequência atual: {streak} {streak === 1 ? 'dia' : 'dias'}</p>
        <QuizHistory history={history} />
      </div>

      <Footer />
      <ToastContainer toasts={toasts} />
    </div>
  );
};

export default App;
