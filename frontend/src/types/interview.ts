// types/interview.ts
export interface InterviewQuestion {
  id: string;
  type: 'text' | 'select' | 'multiselect' | 'slider';
  question: string;
  options?: string[];
  required: boolean;
  category: 'development' | 'career' | 'constraints';
}

export interface InterviewSession {
  id: string;
  userId: string;
  answers: {
    // 🎯 개발 현황 파악
    experience: 'junior' | '1-2years' | '3plus';
    techStack: string[];
    weakness: 'backend' | 'deployment' | 'testing' | 'frontend' | 'database';
    previousProjects: 'none' | 'toy-projects' | 'real-projects';
    
    // 🏢 목표 설정
    targetRole: 'frontend' | 'fullstack' | 'backend';
    companySize: 'startup' | 'midsize' | 'enterprise';
    domain: 'fintech' | 'ecommerce' | 'b2b-saas' | 'any';
    
    // ⏰ 현실적 제약
    timeline: '1month' | '2-3months' | '6plus-months';
    weeklyHours: 'under5' | 'around10' | 'over20';
    learningAttitude: 'existing-only' | 'some-challenge' | 'aggressive';
  };
  status: 'pending' | 'completed';
  createdAt: Date;
}