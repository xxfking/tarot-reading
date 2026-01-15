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
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-subtle">
      <div className="max-w-2xl w-full">
        <div className="bg-white border border-border rounded-lg p-10 md:p-12 shadow-lg">
          <h2 className="text-4xl font-display mb-4 text-text-primary text-center font-semibold">
            你在想什么问题？
          </h2>

          <p className="text-text-secondary text-center mb-10 font-sans text-base leading-relaxed max-w-md mx-auto">
            告诉我你抽牌时思考的问题，我会根据牌面为你解答
            <br />
            <span className="text-sm opacity-70">也可以跳过此步骤获得通用解读</span>
          </p>

          <div className="mb-8">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value.slice(0, maxLength))}
              placeholder="在此输入你的问题..."
              className="w-full h-40 px-6 py-4 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none bg-surface text-text-primary font-sans text-base transition-all placeholder:text-text-secondary/50"
              maxLength={maxLength}
            />

            <div className="flex justify-end items-center mt-3">
              <span className="text-xs text-text-secondary font-sans tracking-wide">
                {question.length} / {maxLength}
              </span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={onSkip}
              className="px-8 py-3 border border-border hover:border-accent rounded-md text-text-secondary hover:text-accent transition-all font-sans hover:shadow-md"
            >
              跳过
            </button>

            <button
              onClick={handleSubmit}
              className="px-10 py-3 bg-accent text-white hover:bg-accent/90 rounded-md font-sans font-medium transition-all shadow-md hover:shadow-lg"
            >
              开始解读
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
