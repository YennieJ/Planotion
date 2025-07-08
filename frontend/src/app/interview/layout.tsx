import React from 'react';

export default function InterviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl">📋</span>
              <span className="font-semibold text-gray-800">Planotion Interview</span>
            </div>
            <button className="text-gray-600 hover:text-gray-800">
              ← 홈으로
            </button>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
