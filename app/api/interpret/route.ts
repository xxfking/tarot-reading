import { NextRequest, NextResponse } from 'next/server';
import { DrawnCard } from '@/lib/types';
import { callLLM, buildTarotPrompt } from '@/lib/llm-client';

export const runtime = 'edge';

interface InterpretRequest {
  drawnCards: DrawnCard[];
  spreadName: string;
  question?: string;
  locale?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: InterpretRequest = await request.json();
    const { drawnCards, spreadName, question, locale = 'zh' } = body;

    // 验证请求参数
    if (!drawnCards || !Array.isArray(drawnCards) || drawnCards.length === 0) {
      return NextResponse.json(
        { error: '缺少有效的抽牌结果' },
        { status: 400 }
      );
    }

    if (!spreadName) {
      return NextResponse.json(
        { error: '缺少牌阵名称' },
        { status: 400 }
      );
    }

    // 构建提示词（根据语言环境）
    const prompt = buildTarotPrompt(drawnCards, spreadName, question, locale);

    // 调用 LLM（带主备切换）
    const llmResponse = await callLLM(prompt);

    if (!llmResponse.success) {
      console.error('[API] LLM call failed:', llmResponse.error);
      return NextResponse.json(
        {
          error: 'AI 解读服务暂时不可用，请稍后再试',
          details: llmResponse.error,
        },
        { status: 503 }
      );
    }

    // 返回成功响应
    return NextResponse.json({
      interpretation: llmResponse.content,
      provider: llmResponse.provider,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('[API] Interpret error:', error);
    return NextResponse.json(
      {
        error: '服务器错误',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
