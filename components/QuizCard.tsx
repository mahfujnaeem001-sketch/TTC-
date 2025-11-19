import React from 'react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  selectedOptionIndex: number | null;
  onSelectOption: (index: number) => void;
  isSubmitted: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedOptionIndex,
  onSelectOption,
  isSubmitted
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-2xl w-full mx-auto transition-all duration-300">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
          {question.text}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium relative ";
          
          if (isSubmitted) {
            if (index === question.correctAnswerIndex) {
              buttonClass += "bg-green-50 border-green-500 text-green-800 shadow-sm";
            } else if (index === selectedOptionIndex && index !== question.correctAnswerIndex) {
              buttonClass += "bg-red-50 border-red-500 text-red-800 shadow-sm";
            } else {
              buttonClass += "bg-slate-50 border-transparent text-slate-400 opacity-60";
            }
          } else {
            if (selectedOptionIndex === index) {
              buttonClass += "bg-indigo-50 border-indigo-600 text-indigo-700 shadow-md transform scale-[1.01]";
            } else {
              buttonClass += "bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:bg-slate-50";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !isSubmitted && onSelectOption(index)}
              disabled={isSubmitted}
              className={buttonClass}
            >
              <span className="inline-block w-6 font-bold mr-2 opacity-60">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
              
              {isSubmitted && index === question.correctAnswerIndex && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
              )}
               {isSubmitted && index === selectedOptionIndex && index !== question.correctAnswerIndex && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizCard;
