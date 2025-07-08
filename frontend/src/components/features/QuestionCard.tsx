// components/interview/QuestionCard.tsx
import { InterviewQuestion } from '@/types/interview';

interface QuestionCardProps {
  question: InterviewQuestion;
  value: any;
  onChange: (value: any) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  value,
  onChange
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'development':
        return '🎯';
      case 'career':
        return '🏢';
      case 'constraints':
        return '⏰';
      default:
        return '📋';
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'development':
        return '개발 현황 파악';
      case 'career':
        return '목표 설정';
      case 'constraints':
        return '현실적 제약';
      default:
        return '질문';
    }
  };

  const renderInput = () => {
    switch (question.type) {
      case 'text':
        return (
          <textarea
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="답변을 입력해주세요..."
            rows={3}
          />
        );
      
      case 'select':
        return (
          <div className="space-y-2">
            {question.options?.map((option) => (
              <label
                key={option}
                className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={value === option}
                  onChange={(e) => onChange(e.target.value)}
                  className="mr-3"
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        );
      
      case 'multiselect':
        return (
          <div className="grid grid-cols-2 gap-2">
            {question.options?.map((option) => (
              <label
                key={option}
                className="flex items-center p-2 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={value?.includes(option) || false}
                  onChange={(e) => {
                    const currentValue = value || [];
                    if (e.target.checked) {
                      onChange([...currentValue, option]);
                    } else {
                      onChange(currentValue.filter((v: string) => v !== option));
                    }
                  }}
                  className="mr-2"
                />
                <span className="text-xs">{option}</span>
              </label>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="text-xl mr-2">{getCategoryIcon(question.category)}</span>
          <span className="text-sm text-gray-500 font-medium">
            {getCategoryTitle(question.category)}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">
          {question.question}
        </h3>
      </div>
      {renderInput()}
    </div>
  );
};