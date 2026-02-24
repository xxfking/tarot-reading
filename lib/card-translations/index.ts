import { jaCardTranslations } from './ja';
import { koCardTranslations } from './ko';
import { frCardTranslations } from './fr';

export interface CardTranslation {
  name: string;
  keywords: {
    upright: string[];
    reversed: string[];
  };
  description: {
    upright: string;
    reversed: string;
  };
}

const translationMaps: Record<string, Record<number, CardTranslation>> = {
  ja: jaCardTranslations,
  ko: koCardTranslations,
  fr: frCardTranslations,
};

export function getCardTranslation(id: number, locale: string): CardTranslation | undefined {
  return translationMaps[locale]?.[id];
}
