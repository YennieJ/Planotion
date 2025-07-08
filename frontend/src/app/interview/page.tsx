import { InterviewFlow } from '@/components/features/InterviewFlow';

export default function InterviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            💼 개발자 성향 인터뷰
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            당신의 개발 경험과 목표를 바탕으로 맞춤형 학습 계획을 생성해드립니다.
          </p>
        </div>
        <InterviewFlow />
      </div>
    </div>
  );
}
