"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: "assistant",
    content: "はじめまして！よりそいのAIコンシェルジュです 😊\n\nあなたのことを少し教えてください。難しいことは聞きません。最近のことでいいんです。\n\n今日はどんな一日でしたか？",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // TODO: 実際のAI API呼び出し
    // デモ用の応答
    setTimeout(() => {
      const responses = [
        "なるほど、そうだったんですね。\n\nそういう日もありますよね。でも、こうして話してくれてありがとうございます。\n\nちなみに、仕事が終わったあとは何をして過ごすことが多いですか？",
        "素敵ですね！そういうことが好きなんですね。\n\n実は、似たような趣味を持っている方が何人かいらっしゃるんですよ。\n\nもう少し聞いてもいいですか？休日はどんなふうに過ごしていますか？",
        "わかります。その気持ち、すごくよくわかります。\n\nあなたはとても誠実な方なんだなって感じます。そういう人って、なかなかいないんですよ。\n\n一つ聞いてもいいですか？もし明日、何も制約がなかったら何をしたいですか？",
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
      setIsTyping(false);
    }, 1500 + Math.random() * 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-[var(--color-cream-dark)] px-6 py-4 flex items-center gap-4">
        <a href="/" className="text-[var(--color-text-light)] hover:text-[var(--color-warm)]">
          ← 戻る
        </a>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-warm)] to-[var(--color-accent)] flex items-center justify-center text-white text-lg">
            🤝
          </div>
          <div>
            <p className="font-medium text-[var(--color-warm-dark)]">よりそいAI</p>
            <p className="text-xs text-[var(--color-text-light)]">あなたの味方です</p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-5 py-3 whitespace-pre-wrap leading-relaxed ${
                msg.role === "user"
                  ? "bg-[var(--color-warm)] text-white rounded-br-md"
                  : "bg-white text-[var(--color-text)] rounded-bl-md shadow-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-[var(--color-text-light)] rounded-2xl rounded-bl-md px-5 py-3 shadow-sm">
              <span className="inline-flex gap-1">
                <span className="w-2 h-2 rounded-full bg-[var(--color-warm-light)] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-[var(--color-warm-light)] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-[var(--color-warm-light)] animate-bounce" style={{ animationDelay: "300ms" }} />
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t border-[var(--color-cream-dark)] px-4 py-4">
        <div className="max-w-3xl mx-auto flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            placeholder="なんでも話してください..."
            className="flex-1 px-5 py-3 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] text-[var(--color-text)] placeholder:text-[var(--color-text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)]"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] disabled:opacity-50 text-white px-6 py-3 rounded-xl transition-all"
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
}
