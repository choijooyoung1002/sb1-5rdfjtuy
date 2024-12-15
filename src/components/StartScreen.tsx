import React from 'react';
import { Play } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  React.useEffect(() => {
    const handleKeyPress = () => {
      onStart();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onStart]);

  return (
    <div className="text-center">
      <Play className="w-16 h-16 mx-auto mb-6 text-indigo-600" />
      <h1 className="text-4xl font-bold mb-4">Welcome to the Quiz Game!</h1>
      <p className="text-xl text-gray-600 mb-8">Press any key to start</p>
      <button
        onClick={onStart}
        className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 transition-colors"
      >
        Start Quiz
      </button>
    </div>
  );
};