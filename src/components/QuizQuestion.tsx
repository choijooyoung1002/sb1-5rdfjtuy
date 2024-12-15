import React from 'react';
import type { Question } from '../data/questions';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (index: number) => void;
}

const colors = [
  'bg-red-500 hover:bg-red-600',
  'bg-blue-500 hover:bg-blue-600',
  'bg-green-500 hover:bg-green-600',
  'bg-yellow-500 hover:bg-yellow-600'
];

export const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">{question.question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={`${colors[index]} text-white p-6 rounded-lg text-lg font-semibold transition-transform hover:scale-105`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};