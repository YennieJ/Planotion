import { PlanCategory } from "./interview";

export interface GeneratedPlan {
    id: string;
    sessionId: string;
    title: string;
    description: string;
    category: PlanCategory;
    duration: {
      months: number;
      weeks: number;
      totalHours: number;
    };
    phases: PlanPhase[];
    createdAt: Date;
    updatedAt: Date;
    status: 'draft' | 'active' | 'completed' | 'paused';
  }
  
  export interface PlanPhase {
    id: string;
    month: number;
    title: string;
    description: string;
    goals: string[];
    keyMilestones: string[];
    weeklyTasks: WeeklyTask[];
    estimatedHours: number;
    difficulty: 'easy' | 'medium' | 'hard';
  }
  
  export interface WeeklyTask {
    id: string;
    week: number;
    title: string;
    description: string;
    tasks: TaskItem[];
    priority: 'low' | 'medium' | 'high' | 'critical';
    estimatedHours: number;
    category: string;
    prerequisites?: string[];
  }
  
  export interface TaskItem {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    estimatedMinutes: number;
    resources?: Resource[];
    notes?: string;
  }
  
  export interface Resource {
    type: 'link' | 'book' | 'video' | 'course' | 'tool';
    title: string;
    url?: string;
    description?: string;
    free: boolean;
  }