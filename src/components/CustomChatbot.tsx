import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  role: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

export default function CustomChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      content: '안녕하세요! IPARTNERS AI 어시스턴트입니다. 어떤 도움이 필요하신가요?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Call actual backend endpoint
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: data.reply || '오류가 발생했습니다.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Chat API call failed:", error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: '서버와 통신하는 중 오류가 발생했습니다.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#061a15] border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:bg-[#0a2e22] hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 z-50 ${
          isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Sparkles size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-[90px] right-6 w-[360px] md:w-[400px] h-[500px] max-h-[80vh] bg-[#06060c] border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(16,185,129,0.1)] flex flex-col z-50 transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[rgba(10,10,13,0.95)] border-b border-white/5 rounded-t-2xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm tracking-wide">IPARTNERS NX Agent</h3>
              <p className="text-emerald-400/80 text-[10px] font-medium tracking-widest mt-0.5">자체 지식베이스 연결 중..</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#030303] bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05),transparent_70%)] custom-scrollbar">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 text-[14px] leading-relaxed break-words overflow-hidden ${
                  message.role === 'user'
                    ? 'bg-[#061a15] text-white border border-emerald-500/30 rounded-t-[16px] rounded-l-[16px] rounded-br-[4px] shadow-[inset_0_0_10px_rgba(16,185,129,0.1)]'
                    : 'bg-[#0a1128] text-gray-200 border border-blue-500/20 rounded-t-[16px] rounded-r-[16px] rounded-bl-[4px] shadow-[inset_0_0_10px_rgba(59,130,246,0.05)] markdown-body'
                }`}
              >
                {message.role === 'bot' ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {message.content}
                  </ReactMarkdown>
                ) : (
                  message.content
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#0a1128] text-gray-200 border border-blue-500/20 rounded-t-[16px] rounded-r-[16px] rounded-bl-[4px] p-3 flex gap-1">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="p-3 bg-[#0a0a0d] border-t border-white/5 rounded-b-2xl flex gap-2 items-end"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="메시지를 입력하세요..."
            className="flex-1 bg-transparent text-white text-[14px] p-2 focus:outline-none focus:bg-white/[0.03] rounded-lg transition-colors placeholder:text-gray-600"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10 rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
}
