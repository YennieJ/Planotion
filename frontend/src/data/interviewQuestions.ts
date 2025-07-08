// data/interviewQuestions.ts
import { InterviewQuestion } from '@/types/interview';

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  // 🎯 개발 현황 파악 (4개)
  {
    id: 'experience',
    type: 'select',
    question: '현재 개발 경력은?',
    options: ['신입', '1-2년', '3년 이상'],
    required: true,
    category: 'development'
  },
  {
    id: 'tech-stack',
    type: 'multiselect',
    question: '주력 기술 스택은?',
    options: [
      'React', 'Vue', 'Angular', 'Next.js', 'Svelte',
      'Node.js', 'Python', 'Java', 'Spring', 'Django',
      'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
      'AWS', 'Docker', 'Kubernetes', 'TypeScript'
    ],
    required: true,
    category: 'development'
  },
  {
    id: 'weakness',
    type: 'select',
    question: '가장 자신 없는 영역은?',
    options: ['백엔드', '배포', '테스트', '프론트엔드', '데이터베이스'],
    required: true,
    category: 'development'
  },
  {
    id: 'previous-projects',
    type: 'select',
    question: '이전에 만든 프로젝트가 있나요?',
    options: ['없음', '토이프로젝트만', '실제 서비스 경험'],
    required: true,
    category: 'development'
  },
  
  // 🏢 목표 설정 (3개)
  {
    id: 'target-role',
    type: 'select',
    question: '목표 직무는?',
    options: ['프론트엔드', '풀스택', '백엔드'],
    required: true,
    category: 'career'
  },
  {
    id: 'company-size',
    type: 'select',
    question: '관심 있는 회사 규모는?',
    options: ['스타트업', '중견기업', '대기업'],
    required: true,
    category: 'career'
  },
  {
    id: 'domain',
    type: 'select',
    question: '관심 있는 도메인이 있나요?',
    options: ['핀테크', '이커머스', 'B2B SaaS', '상관없음'],
    required: true,
    category: 'career'
  },
  
  // ⏰ 현실적 제약 (3개)
  {
    id: 'timeline',
    type: 'select',
    question: '프로젝트 완성 목표 기간은?',
    options: ['1개월', '2-3개월', '6개월 이상'],
    required: true,
    category: 'constraints'
  },
  {
    id: 'weekly-hours',
    type: 'select',
    question: '주당 투자 가능 시간은?',
    options: ['5시간 미만', '10시간', '20시간 이상'],
    required: true,
    category: 'constraints'
  },
  {
    id: 'learning-attitude',
    type: 'select',
    question: '새로운 기술 학습 의향은?',
    options: ['기존 기술만', '조금 도전', '적극적으로'],
    required: true,
    category: 'constraints'
  }
];