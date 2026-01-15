'use client';

import { useState } from 'react';

interface QuestionInputProps {
  onSubmit: (question: string) => void;
  onSkip: () => void;
}

export default function QuestionInput({ onSubmit, onSkip }: QuestionInputProps) {
  const [question, setQuestion] = useState('');
  const maxLength = 150;

  const handleSubmit = () => {
    onSubmit(question.trim());
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-surface rounded-lg p-8 md:p-12 shadow-lg border border-border">
        <h2 className="text-3xl font-serif mb-4 text-text-primary text-center">
          你在想什么问题？
        </h2>
        <p className="text-text-secondary text-center mb-8">
          告诉我你抽牌时思考的问题，我会根据牌面为你解答。也可以跳过此步骤获得通用解读。
        </p>

        <div className="mb-6">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value.slice(0, maxLength))}
            placeholder="在此输入你的问题..."
            className="w-full h-32 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none bg-background text-text-primary"
            maxLength={maxLength}
          />
          <div className="text-right text-sm text-text-secondary mt-2">
            {question.length} / {maxLength}
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={onSkip}
            className="px-6 py-3 border border-border rounded-lg text-text-secondary hover:border-accent hover:text-accent transition-colors"
          >
            跳过
          </button>
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-lg"
          >
            开始解读
          </button>
        </div>
      </div>
    </div>
  );
}
