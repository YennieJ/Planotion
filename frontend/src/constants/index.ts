export const APP_CONFIG = {
    name: 'planotion',
    description: 'AI-powered personal planning tool',
    version: '1.0.0',
    author: 'Your Name',
    url: 'https://planotion.vercel.app',
  } as const;
  
  export const CLAUDE_CONFIG = {
    model: 'claude-3-sonnet-20240229',
    maxTokens: 3000,
    temperature: 0.7,
    apiUrl: 'https://api.anthropic.com/v1/messages',
    version: '2023-06-01',
  } as const;
  
  export const STORAGE_KEYS = {
    interview: 'planotion_interview',
    apiKey: 'planotion_api_key',
    plans: 'planotion_plans',
    settings: 'planotion_settings',
  } as const;
  
  export const ROUTES = {
    home: '/',
    interview: '/interview',
    plan: '/plan',
    planDetail: (id: string) => `/plan/${id}`,
  } as const;
  
  export const QUESTION_LIMITS = {
    minQuestions: 5,
    maxQuestions: 20,
    textMinLength: 10,
    textMaxLength: 500,
  } as const;
  
  export const PLAN_LIMITS = {
    minMonths: 1,
    maxMonths: 12,
    minWeeks: 4,
    maxWeeks: 52,
    minHoursPerWeek: 1,
    maxHoursPerWeek: 40,
  } as const;