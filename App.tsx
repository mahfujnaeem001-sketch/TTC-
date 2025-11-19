import React, { useState, useMemo } from 'react';
import { INITIAL_QUESTIONS, PRACTICAL_TASKS } from './constants';
import { Question, AIStatus } from './types';
import QuizCard from './components/QuizCard';
import AIHelper from './components/AIHelper';
import PracticalTaskView from './components/PracticalTaskView';
import { generateNewQuestions } from './services/geminiService';

const App: React.FC = () => {
  const [activeSet, setActiveSet] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [genStatus, setGenStatus] = useState<AIStatus>(AIStatus.IDLE);

  const availableCategories = useMemo(() => {
    const cats = new Set(INITIAL_QUESTIONS.map(q => q.category || 'General'));
    return Array.from(cats);
  }, []);

  const startQuiz = (category: string | 'ALL') => {
    setActiveSet(category);
    
    if (category === 'Graphic Design PQ') {
      return;
    }

    const filtered = category === 'ALL' 
      ? INITIAL_QUESTIONS 
      : INITIAL_QUESTIONS.filter(q => q.category === category);
    
    setQuestions(filtered);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setGenStatus(AIStatus.IDLE);
  };

  const handleBackToMenu = () => {
    setActiveSet(null);
    setQuestions([]);
    setScore(0);
    setCurrentIndex(0);
  };

  const currentQuestion = questions[currentIndex];
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    setIsSubmitted(true);
    if (selectedOption === currentQuestion.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  const handleGenerateMore = async () => {
    try {
      setGenStatus(AIStatus.LOADING);
      const newQuestions = await generateNewQuestions(questions);
      if (newQuestions.length > 0) {
        setQuestions(prev => [...prev, ...newQuestions]);
        setGenStatus(AIStatus.SUCCESS);
        setCurrentIndex(questions.length);
        setSelectedOption(null);
        setIsSubmitted(false);
      } else {
        setGenStatus(AIStatus.ERROR);
      }
    } catch (e) {
      setGenStatus(AIStatus.ERROR);
    }
  };

  const handleRestart = () => {
    if (activeSet && activeSet !== 'Graphic Design PQ') {
      startQuiz(activeSet);
    }
  };

  // Graphic Design Branding Component
  const GraphicDesignLogo = ({ large = false }: { large?: boolean }) => (
    <div className={`flex items-center gap-2 ${large ? 'flex-col' : ''}`}>
      <div className={`flex items-center justify-center ${large ? 'w-20 h-20 rounded-2xl' : 'w-10 h-10 rounded-lg'} bg-gradient-to-br from-pink-500 to-orange-400 shadow-lg`}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${large ? 'w-10 h-10' : 'w-6 h-6'} text-white`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
         </svg>
      </div>
      <span className={`${large ? 'text-3xl' : 'text-xl'} font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600`}>
        Graphic Design
      </span>
    </div>
  );

  // Render Selection Screen if no set is active
  if (!activeSet) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-5xl w-full text-center space-y-8 flex-grow flex flex-col justify-center">
          <div className="space-y-4 flex flex-col items-center">
            <div className="mb-4 transition-all duration-500">
              <GraphicDesignLogo large />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Technical Training Center Barlekha
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Select a topic to begin your practice. Master graphic design fundamentals, tools, and principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {/* Standard MCQ Categories */}
            {availableCategories.map((cat) => {
               const count = INITIAL_QUESTIONS.filter(q => q.category === cat).length;
               return (
                <button
                  key={cat}
                  onClick={() => startQuiz(cat)}
                  className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 text-left flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-125 group-hover:bg-blue-100"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">{cat}</h3>
                    <p className="text-slate-500 mt-2">{count} Questions</p>
                  </div>
                  <div className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    Start Quiz 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </button>
              );
            })}

            {/* Practical Task Category */}
            <button
              onClick={() => startQuiz('Graphic Design PQ')}
              className="group relative p-8 bg-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:border-indigo-300 text-left flex flex-col justify-between overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-125 group-hover:bg-indigo-200"></div>
               <div className="relative z-10">
                  <h3 className="text-xl font-bold text-indigo-900 group-hover:text-indigo-700 transition-colors flex items-center gap-2">
                    Graphic Design PQ
                  </h3>
                  <p className="text-indigo-600 mt-2 font-medium">Practical Job Sheets</p>
                  <p className="text-slate-500 text-sm mt-1">{PRACTICAL_TASKS.length} Papers Available</p>
               </div>
               <div className="mt-6 flex items-center text-indigo-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    Open Papers
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
               </div>
            </button>

            {/* Exam Paper PDF Link */}
            <a
              href="https://drive.google.com/drive/folders/18RmMIFC4Fy1LjzEi0VOhUenb5KztRclx?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 bg-emerald-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 text-left flex flex-col justify-between overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-125 group-hover:bg-emerald-200"></div>
               <div className="relative z-10">
                  <h3 className="text-xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                    Graphic Design Exam Paper PDF
                  </h3>
                  <p className="text-emerald-700 mt-2 font-medium">External Resources</p>
                  <p className="text-slate-500 text-sm mt-1">Access Drive Folder</p>
               </div>
               <div className="mt-6 flex items-center text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    Open Google Drive
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
               </div>
            </a>
            
            {/* Mix All Button */}
            <button
              onClick={() => startQuiz('ALL')}
              className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between overflow-hidden col-span-1 md:col-span-2 lg:col-span-3"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  Mix All MCQ Sets
                </h3>
                <p className="text-slate-400 mt-2">Challenge yourself with random questions from all categories.</p>
              </div>
              <div className="mt-6 flex items-center text-blue-300 font-semibold">
                Start Comprehensive Quiz
              </div>
            </button>
          </div>
        </div>
        <footer className="py-6 text-center text-slate-400 text-sm font-medium mt-8">
          <a href="https://preview--mahfuz-portfolio-pro.lovable.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            Mahfuz Alom
          </a>
        </footer>
      </div>
    );
  }

  // Render Practical View
  if (activeSet === 'Graphic Design PQ') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
             <div className="flex items-center gap-4">
              <button 
                onClick={handleBackToMenu}
                className="text-slate-400 hover:text-blue-600 transition-colors p-1 rounded-lg hover:bg-blue-50"
                title="Back to Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <div className="flex items-center gap-3">
                 <GraphicDesignLogo />
                <span className="text-lg font-bold text-slate-800 hidden sm:inline border-l border-slate-300 pl-3 ml-1">Practical Tasks</span>
              </div>
             </div>
             <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold uppercase">
               PQ Mode
             </div>
          </div>
        </header>
        <div className="flex-grow">
          <PracticalTaskView tasks={PRACTICAL_TASKS} onBack={handleBackToMenu} />
        </div>
        <footer className="py-6 text-center text-slate-400 text-sm font-medium print:hidden bg-slate-50">
          <a href="https://preview--mahfuz-portfolio-pro.lovable.app/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
            Mahfuz Alom
          </a>
        </footer>
      </div>
    );
  }

  // Render Standard Quiz View (Safe guard if questions are empty)
  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleBackToMenu}
              className="text-slate-400 hover:text-blue-600 transition-colors p-1 rounded-lg hover:bg-blue-50"
              title="Back to Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <GraphicDesignLogo />
              <span className="text-lg font-bold text-slate-800 tracking-tight hidden sm:inline border-l border-slate-300 pl-3 ml-1">TTC Barlekha</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="hidden md:block text-slate-500 bg-slate-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              {activeSet === 'ALL' ? 'Mixed Mode' : activeSet}
            </div>
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">
              {score} / {currentIndex + (isSubmitted ? 1 : 0)} Correct
            </span>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="h-1 w-full bg-slate-100">
          <div 
            className="h-full bg-blue-600 transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 py-8 md:py-12 flex flex-col items-center">
        
        <div className="w-full max-w-2xl mb-4 flex justify-between items-end text-slate-500 text-sm uppercase tracking-wider font-semibold">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          {genStatus === AIStatus.SUCCESS && <span className="text-green-600 normal-case bg-green-50 px-2 py-1 rounded">New AI questions added!</span>}
        </div>

        <QuizCard 
          question={currentQuestion}
          selectedOptionIndex={selectedOption}
          onSelectOption={handleSelectOption}
          isSubmitted={isSubmitted}
        />

        {/* Actions Area */}
        <div className="w-full max-w-2xl mt-8 space-y-6">
          
          {/* Primary Navigation Buttons */}
          <div className="flex gap-4">
            {!isSubmitted ? (
              <button 
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-lg shadow-lg transition-all transform
                  ${selectedOption === null 
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0'
                  }`}
              >
                Check Answer
              </button>
            ) : (
              <button 
                onClick={isLastQuestion ? handleGenerateMore : handleNext}
                disabled={genStatus === AIStatus.LOADING}
                className="flex-1 py-3.5 px-6 rounded-xl font-bold text-lg bg-slate-800 text-white shadow-lg hover:bg-slate-900 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex justify-center items-center gap-2"
              >
                {genStatus === AIStatus.LOADING ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : isLastQuestion ? (
                   <>Generate More Questions <span className="text-blue-300 text-xs font-normal border border-blue-500 px-1.5 rounded ml-1">AI</span></>
                ) : (
                  "Next Question"
                )}
              </button>
            )}
          </div>

          {/* AI Explanation Section */}
          <AIHelper 
            question={currentQuestion} 
            userSelectedAnswerIndex={selectedOption} 
            isVisible={isSubmitted} 
          />

          {/* End of Quiz Options */}
          {isLastQuestion && isSubmitted && genStatus !== AIStatus.LOADING && (
             <div className="text-center pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
               <button 
                 onClick={handleRestart} 
                 className="py-3 px-4 rounded-lg bg-white border border-slate-200 text-blue-600 font-semibold hover:bg-blue-50 hover:border-blue-200 transition-colors"
               >
                 Restart This Set
               </button>
               <button 
                 onClick={handleBackToMenu} 
                 className="py-3 px-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-md"
               >
                 Choose Another Set
               </button>
             </div>
          )}

        </div>
      </main>
      <footer className="py-6 text-center text-slate-400 text-sm font-medium">
        <a href="https://preview--mahfuz-portfolio-pro.lovable.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
          Mahfuz Alom
        </a>
      </footer>
    </div>
  );
};

export default App;