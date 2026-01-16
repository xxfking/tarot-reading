import { NextRequest, NextResponse } from 'next/server';

// 测试各个LLM provider的连接状态
export async function GET(request: NextRequest) {
  const results: Record<string, any> = {};

  // 检查环境变量配置
  const config = {
    primary: process.env.PRIMARY_LLM_PROVIDER || 'not set',
    fallback: process.env.FALLBACK_LLM_PROVIDER || 'not set',
    providers: {
      openai: {
        apiKey: process.env.OPENAI_API_KEY ? '✓ configured' : '✗ missing',
        baseUrl: process.env.OPENAI_BASE_URL || 'not set',
        model: process.env.OPENAI_MODEL || 'not set',
      },
      claude: {
        apiKey: process.env.ANTHROPIC_API_KEY ? '✓ configured' : '✗ missing',
        baseUrl: process.env.ANTHROPIC_BASE_URL || 'not set',
        model: process.env.ANTHROPIC_MODEL || 'not set',
      },
      gemini: {
        apiKey: process.env.GEMINI_API_KEY ? '✓ configured' : '✗ missing',
        baseUrl: process.env.GEMINI_BASE_URL || 'not set',
        model: process.env.GEMINI_MODEL || 'not set',
      },
      zhipu: {
        apiKey: process.env.ZHIPU_API_KEY ? '✓ configured' : '✗ missing',
        baseUrl: process.env.ZHIPU_BASE_URL || 'not set',
        model: process.env.ZHIPU_MODEL || 'not set',
      },
      qwen: {
        apiKey: process.env.QWEN_API_KEY ? '✓ configured' : '✗ missing',
        baseUrl: process.env.QWEN_BASE_URL || 'not set',
        model: process.env.QWEN_MODEL || 'not set',
      },
      deepseek: {
        apiKey: process.env.DEEPSEEK_API_KEY ? '✓ configured' : '✗ missing',
        baseUrl: process.env.DEEPSEEK_BASE_URL || 'not set',
        model: process.env.DEEPSEEK_MODEL || 'not set',
      },
    },
  };

  // 测试Gemini连接（简单的API调用测试）
  if (process.env.GEMINI_API_KEY && process.env.GEMINI_BASE_URL) {
    try {
      const testUrl = `${process.env.GEMINI_BASE_URL}/v1beta/models/${process.env.GEMINI_MODEL || 'gemini-1.5-pro'}:generateContent?key=${process.env.GEMINI_API_KEY}`;

      const response = await fetch(testUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: 'Hello',
                },
              ],
            },
          ],
        }),
      });

      results.geminiTest = {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        url: testUrl.replace(process.env.GEMINI_API_KEY, 'API_KEY_HIDDEN'),
      };

      if (!response.ok) {
        const errorData = await response.text();
        results.geminiTest.error = errorData;
      } else {
        results.geminiTest.success = true;
      }
    } catch (error) {
      results.geminiTest = {
        error: error instanceof Error ? error.message : 'Unknown error',
        success: false,
      };
    }
  } else {
    results.geminiTest = {
      error: 'Gemini API key or base URL not configured',
      success: false,
    };
  }

  return NextResponse.json({
    config,
    tests: results,
    timestamp: new Date().toISOString(),
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
