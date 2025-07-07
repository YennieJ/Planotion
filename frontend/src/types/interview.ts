export type QuestionCategory = 
  | 'goal_definition'
  | 'current_situation' 
  | 'technical_skills'
  | 'timeline_constraints'
  | 'preferences'
  | 'learning_style';

export type QuestionType = 'text' | 'select' | 'multiselect' | 'scale' | 'textarea';

export interface InterviewQuestion {
  id: string;
  category: QuestionCategory;
  question: string;
  description?: string;
  type: QuestionType;
  options?: string[];
  placeholder?: string;
  required: boolean;
  order: number;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
}

export interface InterviewAnswer {
  questionId: string;
  answer: string | string[];
  answeredAt: Date;
  timeSpent?: number; // seconds
}

export interface InterviewSession {
  id: string;
  category: PlanCategory;
  answers: InterviewAnswer[];
  startedAt: Date;
  completedAt?: Date;
  status: 'not_started' | 'in_progress' | 'completed' | 'abandoned';
  currentQuestionIndex: number;
  totalQuestions: number;
}

export type PlanCategory = 'career' | 'study' | 'side-project' | 'health' | 'business';