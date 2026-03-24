"use client";

import { FormEvent, type WheelEventHandler, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMessageSquare, FiSend, FiX } from "react-icons/fi";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const starterPrompts = [
  "Ask me about my projects",
  "Which project uses AI/ML?",
  "Show me full-stack projects",
];

export function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi, I am Puneeth's AI assistant. Ask me about his projects, stack, or live demos.",
    },
  ]);
  const messagesRef = useRef<HTMLDivElement>(null);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  const submitMessage = async (question: string) => {
    const text = question.trim();
    if (!text || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      const data = (await res.json()) as { answer?: string; error?: string };
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer ?? data.error ?? "Please try again in a moment.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Network issue. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await submitMessage(input);
  };

  const pausePageScroll = () => {
    window.__lenis?.stop();
  };

  const resumePageScroll = () => {
    window.__lenis?.start();
  };

  const onChatWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    const el = messagesRef.current;
    if (!el) return;

    event.preventDefault();
    event.stopPropagation();
    el.scrollTop += event.deltaY;
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="interactive fixed bottom-6 right-6 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-surface-800/85 text-white shadow-glow backdrop-blur-xl"
        whileTap={{ scale: 0.94 }}
        whileHover={{ scale: 1.05 }}
        aria-label="Toggle chatbot"
      >
        {open ? <FiX className="h-5 w-5" /> : <FiMessageSquare className="h-5 w-5" />}
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[69] w-[22rem] overflow-hidden rounded-2xl border border-white/15 bg-surface-900/88 shadow-premium backdrop-blur-2xl"
            data-lenis-prevent
            onMouseEnter={pausePageScroll}
            onMouseLeave={resumePageScroll}
          >
            <div className="border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="text-sm font-medium text-text-high">Project AI Assistant</p>
              <p className="text-xs text-text-low">Ask me about my projects</p>
            </div>

            <div
              ref={messagesRef}
              data-lenis-prevent
              onWheel={onChatWheel}
              className="max-h-80 space-y-3 overflow-y-auto overscroll-contain px-4 py-3 [touch-action:pan-y]"
            >
              <div className="flex flex-wrap gap-2">
                {starterPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] text-text-medium transition hover:border-brand-purple/45 hover:text-text-high"
                    onClick={() => submitMessage(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={
                    message.role === "assistant"
                      ? "mr-8 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-text-medium"
                      : "ml-8 rounded-xl bg-brand-gradient px-3 py-2 text-sm text-white"
                  }
                >
                  {message.content}
                </div>
              ))}

              {loading ? (
                <div className="mr-8 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-text-medium">
                  Thinking...
                </div>
              ) : null}
            </div>

            <form onSubmit={onSubmit} className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="h-10 w-full rounded-full border border-white/15 bg-white/[0.03] px-4 text-sm text-text-high outline-none transition placeholder:text-text-low focus:border-brand-blue/45"
                />
                <button
                  type="submit"
                  disabled={!canSend}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white disabled:opacity-50"
                >
                  <FiSend className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
