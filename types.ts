export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number; // 0-3 corresponding to a-d
  category?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: (number | null)[]; // User's selected index for each question
  isFinished: boolean;
}

export enum AIStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ExplanationResponse {
  explanation: string;
}

export interface PracticalTask {
  id: string;
  title: string;
  description: string;
  timeLimitMinutes: number;
  content: string; // HTML string for the job sheet content
}