import React, { useState, useEffect } from 'react';
import { getExplanation } from '../services/geminiService';
import { AIStatus, Question } from '../types';

interface AIHelperProps {
  question: Question;
  userSelectedAnswerIndex: number | null;
  isVisible: boolean;
}

const AIHelper: React.FC<AIHelperProps> = ({ question, userSelectedAnswerIndex, isVisible }) => {
  const [explanation, setExplanation] = useState<string>("");
  const [status, setStatus] = useState<AIStatus>(AIStatus.IDLE);

  // Reset when question changes
  useEffect(() => {
    setExplanation("");
    setStatus(AIStatus.IDLE);
  }, [question.id]);

  const handleExplain = async () => {
    if (userSelectedAnswerIndex === null) return;
    
    setStatus(AIStatus.LOADING);
    const userAnswer = question.options[userSelectedAnswerIndex];
    const correctAnswer = question.options[question.correctAnswerIndex];

    const result = await getExplanation(question.text, correctAnswer, userAnswer);
    setExplanation(result);
    setStatus(AIStatus.SUCCESS);
  };

  if (!isVisible) return null;

  return (
    <div className="max-w-2xl mx-auto mt-6">
      {status === AIStatus.IDLE && (
        <button
          onClick={handleExplain}
          className="flex items-center justify-center w-full gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-indigo-200/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM6.967 13.392l-.011.038c-.566 2.265-2.366 4.065-4.632 4.632a.75.75 0 000 1.442c2.266.566 4.066 2.366 4.632 4.632a.75.75 0 001.442 0c.566-2.266 2.366-4.066 4.632-4.632a.75.75 0 000-1.442c-2.266-.567-4.066-2.367-4.632-4.632a.75.75 0 00-1.432-.038z" clipRule="evenodd" />
          </svg>
          Ask AI to Explain
        </button>
      )}

      {status === AIStatus.LOADING && (
        <div className="p-6 bg-white rounded-xl shadow-md border border-indigo-100 animate-pulse">
          <div className="h-4 bg-slate-200 rounded w-3/4 mb-3"></div>
          <div className="h-4 bg-slate-200 rounded w-1/2"></div>
        </div>
      )}

      {status === AIStatus.SUCCESS && explanation && (
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6 shadow-inner relative overflow-hidden">
           <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-indigo-200 rounded-full opacity-20 blur-xl"></div>
           <h3 className="text-indigo-900 font-bold mb-2 flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-indigo-600">
                <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM6.967 13.392l-.011.038c-.566 2.265-2.366 4.065-4.632 4.632a.75.75 0 000 1.442c2.266.566 4.066 2.366 4.632 4.632a.75.75 0 001.442 0c.566-2.266 2.366-4.066 4.632-4.632a.75.75 0 000-1.442c-2.266-.567-4.066-2.367-4.632-4.632a.75.75 0 00-1.432-.038z" clipRule="evenodd" />
             </svg>
             Gemini Explanation
           </h3>
           <p className="text-slate-700 leading-relaxed">
             {explanation}
           </p>
        </div>
      )}
    </div>
  );
};

export default AIHelper;
