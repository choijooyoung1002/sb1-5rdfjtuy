import React, { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { QuizQuestion } from './components/QuizQuestion';
import { questions } from './data/questions';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setGameStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (answerIndex: number) => {
    if (questions[currentQuestionIndex].correctAnswer === answerIndex) {
      setScore(score + 1);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameStarted(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
        {!gameStarted ? (
          score > 0 ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
              <p className="text-xl mb-6">Your score: {score}/{questions.length}</p>
              <button
                onClick={handleStart}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 transition-colors"
              >
                Play Again
              </button>
            </div>
          ) : (
            <StartScreen onStart={handleStart} />
          )
        ) : (
          <QuizQuestion
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
}

export default App;