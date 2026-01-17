import { DrawnCard } from './types';

export type LLMProvider = 'openai' | 'claude' | 'gemini' | 'zhipu' | 'qwen' | 'deepseek';

interface LLMResponse {
  content: string;
  provider: LLMProvider;
  success: boolean;
  error?: string;
}

// 构建塔罗牌解读提示词（支持多语言）
export function buildTarotPrompt(
  drawnCards: DrawnCard[],
  spreadName: string,
  question?: string,
  locale: string = 'zh'
): string {
  const isEnglish = locale === 'en';

  const cardDescriptions = drawnCards
    .map((dc) => {
      const position = dc.position;
      const cardName = dc.card.name;
      const orientation = dc.isReversed
        ? (isEnglish ? 'Reversed' : '逆位')
        : (isEnglish ? 'Upright' : '正位');
      const keywords = dc.isReversed
        ? dc.card.keywords.reversed.join(isEnglish ? ', ' : '、')
        : dc.card.keywords.upright.join(isEnglish ? ', ' : '、');
      const description = dc.isReversed
        ? dc.card.description.reversed
        : dc.card.description.upright;

      if (isEnglish) {
        return `**Position: ${position}**: ${cardName} (${orientation})
Keywords: ${keywords}
Meaning: ${description}`;
      } else {
        return `**位置${position}**：${cardName}（${orientation}）
关键词：${keywords}
牌义：${description}`;
      }
    })
    .join('\n\n');

  const questionPart = question
    ? (isEnglish ? `\n\nQuerent's Question: ${question}` : `\n\n问卜者的问题：${question}`)
    : '';

  if (isEnglish) {
    return `You are a professional tarot reader. Please provide an in-depth, detailed interpretation based on the following cards drawn.

Spread: ${spreadName}

${cardDescriptions}${questionPart}

Please structure your interpretation as follows (use plain text format, no Markdown syntax):

I. Overall Overview
Provide 2-3 sentences summarizing the general insights and direction based on all the cards.

II. Individual Card Analysis
For each card, explain:
- The specific meaning of this card in its position
- The influence and insights from its upright/reversed orientation
- Its relationship with other cards

III. Advice and Guidance
Provide 3-4 sentences of practical, actionable advice. Remind the querent of important things to pay attention to, and end with encouraging words.

Please use a warm, professional tone. Avoid overly mysterious or vague expressions. The interpretation should be specific and practical, helping the querent gain insights. Do not use **bold**, ##headings or other Markdown formatting - just use paragraphs and line breaks.`;
  } else {
    return `你是一位专业的塔罗占卜师，请根据以下抽牌结果为问卜者提供深入、细致的解读。

牌阵：${spreadName}

${cardDescriptions}${questionPart}

请按以下结构进行解读（使用纯文本格式，不要使用任何Markdown语法）：

一、整体概况
综合所有牌面，用2-3句话给出总体的洞察和方向。

二、逐牌解析
针对每一张牌，说明：
- 该牌在此位置的具体含义
- 正逆位的影响和启示
- 与其他牌的关联

三、建议与指引
用3-4句话给出实际可行的建议，提醒问卜者需要注意的事项，并以鼓励性的话语结束。

请用温暖、专业的语气，避免过于神秘或模糊的表达。解读应具体、实用，帮助问卜者获得启发。输出时不要使用**粗体**、##标题等Markdown格式，直接使用段落和换行即可。`;
  }
}

// OpenAI API 调用
async function callOpenAI(prompt: string): Promise<LLMResponse> {
  try {
    const response = await fetch(`${process.env.OPENAI_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      content: data.choices[0].message.content,
      provider: 'openai',
      success: true,
    };
  } catch (error) {
    return {
      content: '',
      provider: 'openai',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Anthropic Claude API 调用
async function callClaude(prompt: string): Promise<LLMResponse> {
  try {
    const response = await fetch(`${process.env.ANTHROPIC_BASE_URL}/v1/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || 'claude-3-5-sonnet-20241022',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 2000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      content: data.content[0].text,
      provider: 'claude',
      success: true,
    };
  } catch (error) {
    return {
      content: '',
      provider: 'claude',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Google Gemini API 调用
async function callGemini(prompt: string): Promise<LLMResponse> {
  try {
    const response = await fetch(
      `${process.env.GEMINI_BASE_URL}/v1beta/models/${process.env.GEMINI_MODEL || 'gemini-1.5-pro'}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2000,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      content: data.candidates[0].content.parts[0].text,
      provider: 'gemini',
      success: true,
    };
  } catch (error) {
    return {
      content: '',
      provider: 'gemini',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Zhipu AI API 调用
async function callZhipu(prompt: string): Promise<LLMResponse> {
  try {
    const response = await fetch(`${process.env.ZHIPU_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ZHIPU_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.ZHIPU_MODEL || 'glm-4',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      throw new Error(`Zhipu API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      content: data.choices[0].message.content,
      provider: 'zhipu',
      success: true,
    };
  } catch (error) {
    return {
      content: '',
      provider: 'zhipu',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Alibaba Qwen API 调用
async function callQwen(prompt: string): Promise<LLMResponse> {
  try {
    const response = await fetch(`${process.env.QWEN_BASE_URL}/services/aigc/text-generation/generation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.QWEN_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.QWEN_MODEL || 'qwen-turbo',
        input: {
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
        },
        parameters: {
          temperature: 0.7,
          max_tokens: 2000,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Qwen API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      content: data.output.text,
      provider: 'qwen',
      success: true,
    };
  } catch (error) {
    return {
      content: '',
      provider: 'qwen',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// DeepSeek API 调用（兼容 OpenAI 格式）
async function callDeepSeek(prompt: string): Promise<LLMResponse> {
  try {
    const response = await fetch(`${process.env.DEEPSEEK_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.DEEPSEEK_MODEL || 'deepseek-chat',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      content: data.choices[0].message.content,
      provider: 'deepseek',
      success: true,
    };
  } catch (error) {
    return {
      content: '',
      provider: 'deepseek',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// 统一的 LLM 调用接口（带主备切换）
export async function callLLM(prompt: string): Promise<LLMResponse> {
  const primaryProvider = (process.env.PRIMARY_LLM_PROVIDER || 'openai') as LLMProvider;
  const fallbackProvider = (process.env.FALLBACK_LLM_PROVIDER || 'claude') as LLMProvider;

  const providerMap: Record<LLMProvider, (prompt: string) => Promise<LLMResponse>> = {
    openai: callOpenAI,
    claude: callClaude,
    gemini: callGemini,
    zhipu: callZhipu,
    qwen: callQwen,
    deepseek: callDeepSeek,
  };

  // 尝试主模型
  console.log(`[LLM] Trying primary provider: ${primaryProvider}`);
  const primaryResponse = await providerMap[primaryProvider](prompt);

  if (primaryResponse.success) {
    console.log(`[LLM] Primary provider ${primaryProvider} succeeded`);
    return primaryResponse;
  }

  // 主模型失败，尝试备用模型
  console.log(`[LLM] Primary provider failed: ${primaryResponse.error}. Trying fallback: ${fallbackProvider}`);
  const fallbackResponse = await providerMap[fallbackProvider](prompt);

  if (fallbackResponse.success) {
    console.log(`[LLM] Fallback provider ${fallbackProvider} succeeded`);
    return fallbackResponse;
  }

  // 两个都失败
  console.error(`[LLM] Both providers failed. Primary: ${primaryResponse.error}, Fallback: ${fallbackResponse.error}`);
  return {
    content: '',
    provider: fallbackProvider,
    success: false,
    error: `主模型和备用模型均调用失败。主模型(${primaryProvider})错误：${primaryResponse.error}；备用模型(${fallbackProvider})错误：${fallbackResponse.error}`,
  };
}
