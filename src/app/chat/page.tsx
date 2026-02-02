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

const QUICK_REPLIES = [
  "普通の一日だったかな",
  "ちょっと疲れた…",
  "いい一日だった！",
  "うーん、まあまあかな",
];

const STORAGE_KEY = "yorisoi-chat-messages";

function loadMessages(): Message[] {
  if (typeof window === "undefined") return INITIAL_MESSAGES;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch { /* ignore */ }
  return INITIAL_MESSAGES;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  // Load saved messages on mount
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const saved = loadMessages();
      setMessages(saved);
      if (saved.length > 1) {
        setShowQuickReplies(false);
      }
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (initialized.current && messages.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch { /* ignore */ }
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isTyping) return;

    const userMessage: Message = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    // Reset textarea height
    const textarea = document.querySelector("textarea");
    if (textarea) textarea.style.height = "48px";
    setIsTyping(true);
    setShowQuickReplies(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "ごめんなさい、少し調子が悪いみたいです。もう一度話しかけてもらえますか？ 😊",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-[var(--color-cream-dark)] px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <a href="/" className="text-[var(--color-text-light)] hover:text-[var(--color-warm)] py-1 text-base md:text-lg">
            ← 戻る
          </a>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-[var(--color-warm)] to-[var(--color-accent)] flex items-center justify-center text-white text-lg">
              🤝
            </div>
            <div>
              <p className="font-medium text-[var(--color-warm-dark)] text-base">よりそいAI</p>
              <p className="text-xs md:text-sm text-[var(--color-text-light)]">あなたの味方です</p>
            </div>
          </div>
        </div>
        {messages.length > 1 && (
          <button
            onClick={() => {
              if (confirm("会話をリセットしますか？")) {
                localStorage.removeItem(STORAGE_KEY);
                setMessages(INITIAL_MESSAGES);
                setShowQuickReplies(true);
              }
            }}
            className="text-xs text-[var(--color-text-light)] hover:text-[var(--color-warm)] py-2 px-3"
          >
            リセット
          </button>
        )}
      </header>

      {/* Privacy Note - First time */}
      {messages.length <= 1 && (
        <div className="bg-[var(--color-safe-light)] px-4 py-2.5 text-center">
          <p className="text-sm text-[var(--color-safe)]">
            🔒 会話内容は暗号化され、安全に保護されています
          </p>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 md:px-4 py-6 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-4 md:px-5 py-3 whitespace-pre-wrap leading-relaxed text-base ${
                msg.role === "user"
                  ? "bg-[var(--color-warm)] text-white rounded-br-md"
                  : "bg-white text-[var(--color-text)] rounded-bl-md shadow-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Quick Reply Buttons */}
        {showQuickReplies && !isTyping && (
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSend(reply)}
                className="px-4 py-2.5 rounded-full border-2 border-[var(--color-warm-light)] text-[var(--color-warm-dark)] bg-white hover:bg-[var(--color-cream)] transition-all text-sm md:text-base"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-[var(--color-text-light)] rounded-2xl rounded-bl-md px-5 py-3 shadow-sm">
              <span className="inline-flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-warm-light)] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-warm-light)] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-warm-light)] animate-bounce" style={{ animationDelay: "300ms" }} />
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t border-[var(--color-cream-dark)] px-3 md:px-4 py-3 md:py-4">
        <div className="max-w-3xl mx-auto flex gap-2 md:gap-3">
          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              // Auto-resize
              e.target.style.height = "48px";
              e.target.style.height = Math.min(e.target.scrollHeight, 128) + "px";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="なんでも話してください...（🎤音声入力もOK）"
            rows={1}
            className="flex-1 px-4 md:px-5 py-3.5 rounded-xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)] text-[var(--color-text)] placeholder:text-[var(--color-text-light)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-light)] text-base resize-none overflow-y-auto"
            style={{ height: "48px", maxHeight: "128px" }}
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isTyping}
            className="bg-[var(--color-warm)] hover:bg-[var(--color-warm-dark)] disabled:opacity-40 text-white px-5 md:px-6 py-3.5 rounded-xl transition-all text-base font-medium shrink-0"
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
}
