'use client';

// components/interview/InterviewFlow.tsx
import { useState } from 'react';
import { InterviewQuestion } from '@/types/interview';
import { QuestionCard } from './QuestionCard';
import { INTERVIEW_QUESTIONS } from '@/data/interviewQuestions';

export const InterviewFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [questions] = useState<InterviewQuestion[]>(INTERVIEW_QUESTIONS);

  const handleAnswer = (questionId: string, value: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // 인터뷰 완료
      handleCompleteInterview();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleCompleteInterview = () => {
    // 임시로 콘솔에 출력 (나중에 Claude API로 전송)
    console.log('인터뷰 완료:', answers);
    // TODO: Claude API로 맞춤 계획 생성 요청
  };

  const isCurrentAnswerValid = () => {
    const currentQuestion = questions[currentStep];
    const currentAnswer = answers[currentQuestion.id];
    
    if (!currentQuestion.required) return true;
    
    if (currentQuestion.type === 'multiselect') {
      return currentAnswer && currentAnswer.length > 0;
    }
    
    return currentAnswer && typeof currentAnswer === 'string' && currentAnswer.trim() !== '';
  };

  const getProgressText = () => {
    const currentCategory = questions[currentStep].category;
    const categoryProgress = {
      development: '개발 현황 파악',
      career: '목표 설정',
      constraints: '현실적 제약'
    };
    return categoryProgress[currentCategory] || '질문';
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* 진행률 표시 */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-600 font-medium">
            {getProgressText()}
          </span>
          <span className="text-sm text-gray-600">
            {currentStep + 1} / {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
        <div className="text-right mt-1">
          <span className="text-xs text-gray-500">
            {Math.round(((currentStep + 1) / questions.length) * 100)}% 완료
          </span>
        </div>
      </div>

      {/* 질문 카드 */}
      <QuestionCard
        question={questions[currentStep]}
        value={answers[questions[currentStep].id]}
        onChange={(value) => handleAnswer(questions[currentStep].id, value)}
      />

      {/* 네비게이션 버튼 */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
        >
          이전
        </button>
        
        <button
          onClick={handleNext}
          disabled={!isCurrentAnswerValid()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          {currentStep === questions.length - 1 ? '계획 생성' : '다음'}
        </button>
      </div>
    </div>
  );
};