import React, { useState, useEffect } from 'react';
import { PracticalTask } from '../types';

interface PracticalTaskViewProps {
  tasks: PracticalTask[];
  onBack: () => void;
}

const PracticalTaskView: React.FC<PracticalTaskViewProps> = ({ tasks, onBack }) => {
  const [selectedTask, setSelectedTask] = useState<PracticalTask | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(60 * 60); // Default 60 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (timerActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const handleSelectTask = (task: PracticalTask) => {
    setSelectedTask(task);
    // Reset timer to task specific or default 60 min
    setTimeLeft(task.timeLimitMinutes * 60);
    setTimerActive(false);
  };

  const toggleTimer = () => setTimerActive(!timerActive);
  const resetTimer = () => {
     setTimerActive(false);
     if(selectedTask) setTimeLeft(selectedTask.timeLimitMinutes * 60);
  };

  const handlePrint = () => {
    window.print();
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!selectedTask) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <button onClick={onBack} className="mb-6 text-slate-500 hover:text-blue-600 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Menu
        </button>
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Practical Question Papers (PQ)</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {tasks.map(task => (
            <button
              key={task.id}
              onClick={() => handleSelectTask(task)}
              className="text-left bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-slate-200 hover:border-blue-300 transition-all group"
            >
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 mb-2">{task.title}</h3>
              <p className="text-slate-500 text-sm mb-4">{task.description}</p>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Time: {task.timeLimitMinutes} Mins
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 flex flex-col md:flex-row gap-6 items-start print:p-0 print:block">
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #printable-content, #printable-content * {
              visibility: visible;
            }
            #printable-content {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              margin: 0;
              padding: 20px;
              border: none;
              box-shadow: none;
            }
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>
      
      {/* Document View */}
      <div id="printable-content" className="flex-1 bg-white shadow-2xl md:min-h-[29.7cm] p-8 md:p-12 border border-slate-200 relative print:shadow-none print:border-none">
        
        <div className="no-print mb-8 border-b pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-slate-900">{selectedTask.title}</h1>
          </div>
          <div className="flex gap-3">
            <button 
                onClick={handlePrint} 
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors text-sm font-medium"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download PDF
            </button>
            <button onClick={() => setSelectedTask(null)} className="text-slate-400 hover:text-red-500 px-2">
                Close
            </button>
          </div>
        </div>

        <div 
          className="prose prose-slate max-w-none font-serif text-slate-900 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: selectedTask.content }}
        />
        
        <div className="mt-12 pt-6 border-t text-center text-slate-400 text-xs italic print:text-black">
          End of Job Sheet
        </div>
      </div>

      {/* Sidebar / Timer (Hidden in Print) */}
      <div className="w-full md:w-72 shrink-0 sticky top-24 space-y-6 no-print">
        <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Time Remaining</h3>
          <div className={`text-5xl font-mono font-bold mb-4 ${timeLeft < 300 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
            {formatTime(timeLeft)}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={toggleTimer}
              className={`py-2 px-4 rounded font-bold transition-colors ${timerActive ? 'bg-yellow-500 hover:bg-yellow-600 text-yellow-900' : 'bg-green-600 hover:bg-green-700'}`}
            >
              {timerActive ? 'Pause' : 'Start'}
            </button>
            <button 
              onClick={resetTimer}
              className="py-2 px-4 rounded font-bold bg-slate-700 hover:bg-slate-600"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border border-slate-200">
           <h4 className="font-bold text-slate-800 mb-3">Instructions</h4>
           <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
             <li>Read the requirements carefully.</li>
             <li>Manage your time using the timer.</li>
             <li>Create the folders and files as specified.</li>
             <li>Check "Resources Required" before starting.</li>
           </ul>
        </div>
      </div>

    </div>
  );
};

export default PracticalTaskView;
