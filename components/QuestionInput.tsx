'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface QuestionInputProps {
  onSubmit: (question: string) => void;
  onSkip: () => void;
}

export default function QuestionInput({ onSubmit, onSkip }: QuestionInputProps) {
  const t = useTranslations('questionInput');
  const [question, setQuestion] = useState('');
  const maxLength = 150;

  const handleSubmit = () => {
    onSubmit(question.trim());
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-subtle">
      <div className="max-w-4xl w-full">
        <div className="bg-white border-2 border-border rounded-2xl p-12 md:p-16 shadow-xl">
          <h2 className="text-5xl md:text-6xl font-display mb-6 text-text-primary text-center font-semibold">
            {t('title')}
          </h2>

          <p className="text-text-secondary text-center mb-12 font-sans text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
            {t('subtitle')}
            <br />
            <span className="text-base md:text-lg opacity-70 mt-2 inline-block">{t('skipHint')}</span>
          </p>

          <div className="mb-10">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value.slice(0, maxLength))}
              placeholder={t('placeholder')}
              className="w-full h-52 px-8 py-6 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none bg-surface text-text-primary font-sans text-lg md:text-xl transition-all placeholder:text-text-secondary/50"
              maxLength={maxLength}
            />

            <div className="flex justify-end items-center mt-4">
              <span className="text-sm md:text-base text-text-secondary font-sans tracking-wide">
                {question.length} / {maxLength}
              </span>
            </div>
          </div>

          <div className="flex gap-5 justify-center">
            <button
              onClick={onSkip}
              className="px-10 md:px-12 py-4 border-2 border-border hover:border-accent rounded-xl text-text-secondary hover:text-accent transition-all font-sans text-lg hover:shadow-md"
            >
              {t('skip')}
            </button>

            <button
              onClick={handleSubmit}
              className="px-12 md:px-16 py-4 bg-accent text-white hover:bg-accent/90 rounded-xl font-sans font-medium transition-all shadow-lg hover:shadow-xl text-lg"
            >
              {t('submit')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
