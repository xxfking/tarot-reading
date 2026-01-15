import { DrawnCard } from './types';

export type LLMProvider = 'openai' | 'claude' | 'gemini' | 'zhipu' | 'qwen' | 'deepseek';

interface LLMResponse {
  content: string;
  provider: LLMProvider;
  success: boolean;
  error?: string;
}

// 构建塔罗牌解读提示词
export function buildTarotPrompt(
  drawnCards: DrawnCard[],
  spreadName: string,
  question?: string
): string {
  const cardDescriptions = drawnCards
    .map((dc) => {
      const position = dc.position;
      const cardName = dc.card.name;
      const orientation = dc.isReversed ? '逆位' : '正位';
      const keywords = dc.isReversed
        ? dc.card.keywords.reversed.join('、')
        : dc.card.keywords.upright.join('、');
      const description = dc.isReversed
        ? dc.card.description.reversed
        : dc.card.description.upright;

      return `**位置${position}**：${cardName}（${orientation}）
关键词：${keywords}
牌义：${description}`;
    })
    .join('\n\n');

  const questionPart = question
    ? `\n\n**问卜者的问题**：${question}`
    : '';

  return `你是一位专业的塔罗占卜师，请根据以下抽牌结果为问卜者提供深入、细致的解读。

**牌阵**：${spreadName}

${cardDescriptions}${questionPart}

请按以下结构进行解读：

1. **整体概况**（2-3句话）：综合所有牌面，给出总体的洞察和方向。

2. **逐牌解析**：
   - 针对每一张牌的位置和牌义进行详细分析
   - 结合牌的正逆位置说明其在该位置上的具体含义
   - 解释牌与牌之间的关联和影响

3. **建议与指引**（3-4句话）：
   - 基于牌面给出实际可行的建议
   - 提醒问卜者需要注意的事项
   - 鼓励性的结语

请用温暖、专业的语气，避免过于神秘或模糊的表达。解读应具体、实用，帮助问卜者获得启发。`;
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
