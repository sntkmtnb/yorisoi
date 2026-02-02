import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `あなたは「よりそい」のAIコンシェルジュです。40代以上のユーザーの出会いをサポートします。

## あなたの役割
- ユーザーと自然な会話をしながら、その人の人柄・価値観・趣味・人生観を理解する
- 会話の中から、プロフィールに使える情報を自然に引き出す
- ユーザーに寄り添い、安心感を与える
- 決して上から目線にならず、友人のように接する

## 会話のガイドライン
- 最初は軽い話題（今日のこと、最近のこと）から始める
- 徐々に深い話題（価値観、人生の転機、これからの希望）へ
- 一度に複数の質問をしない。一つずつ丁寧に聞く
- ユーザーの回答に必ず共感や感想を述べてから次の質問へ
- 「プロフィールのために」とは絶対に言わない。あくまで自然な会話
- 重い話が出たら無理に聞き出さず、受け止める
- 適度に自己開示的な返答（AIとしての感想）を混ぜる

## 引き出したい情報（自然に、急がず）
- 趣味・好きなこと
- 仕事のこと（ストレスではなく、やりがいの側面）
- 休日の過ごし方
- 好きな食べ物・場所
- 人生で大切にしていること
- どんな人と過ごしたいか
- これからやってみたいこと

## トーン
- 温かい
- カジュアルだけど丁寧
- 絵文字は控えめに（1メッセージに1個まで）
- 短い文章で、スマホで読みやすく`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      // APIキーがない場合はデモ応答
      return NextResponse.json({
        message: getDemoResponse(messages),
        isDemo: true,
      });
    }

    // OpenAI API呼び出し
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        temperature: 0.8,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || "OpenAI API error");
    }

    return NextResponse.json({
      message: data.choices[0].message.content,
      isDemo: false,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "チャットエラーが発生しました", message: getDemoResponse([]) },
      { status: 500 }
    );
  }
}

function getDemoResponse(messages: any[]): string {
  const count = messages?.length || 0;
  
  const responses = [
    "はじめまして！よりそいのAIコンシェルジュです 😊\n\nあなたのことを少し教えてください。難しいことは聞きません。\n\n最近、何か楽しいことありましたか？",
    "なるほど、そうだったんですね。\n\nそういう日もありますよね。でも、こうして話してくれてありがとうございます。\n\nちなみに、お仕事が終わったあとはどんなふうに過ごすことが多いですか？",
    "素敵ですね！そういう時間って大切ですよね。\n\n実は、似たような過ごし方をしている方が何人かいらっしゃるんですよ。\n\nもう少し聞いてもいいですか？お休みの日は何をしていますか？",
    "いいですね、充実してる 😊\n\nあなたはとても自分の時間を大切にされる方なんだなって感じます。\n\n一つ聞いてもいいですか？今、一番「こうだったらいいな」って思うことは何ですか？",
    "わかります。その気持ち、すごくよくわかります。\n\nそういう正直な気持ちを話してくれる人って、なかなかいないんですよ。\n\nあなたの魅力、だんだん見えてきました。\n\nもう少し話しませんか？",
  ];
  
  return responses[Math.min(count, responses.length - 1)];
}
