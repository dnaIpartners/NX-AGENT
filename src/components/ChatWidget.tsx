import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, MessageSquare, Send, Paperclip } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: '안녕하세요! IPARTNERS AI 어시스턴트입니다. 무엇을 도와드릴까요?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('https://ipart.app.n8n.cloud/webhook/7add635d-b495-453a-8da5-ad62a7040ff9/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'sendMessage',
          sessionId: 'ipartners-nx-session', // Basic session management
          chatInput: userMessage.text,
        })
      });

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.output || '응답을 받는 중 문제가 발생했습니다.',
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '서버와 연결할 수 없습니다. 나중에 다시 시도해 주세요.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[400px] h-[480px] max-h-[80vh] flex flex-col bg-[#030303] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#111111] border-b border-white/5">
              <div className="flex items-center gap-2">
                <Sparkles className="text-emerald-400 w-5 h-5" />
                <h3 className="text-white font-bold text-lg">IPARTNERS NX Agent</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.sender === 'user' 
                        ? 'bg-[#0a1128] border border-blue-600/40 text-blue-50 ml-4 rounded-tr-sm' 
                        : 'bg-[#061a15] border border-emerald-500/40 text-emerald-50 mr-4 rounded-tl-sm'
                    }`}
                  >
                    <div className="text-[15px] leading-relaxed break-words whitespace-pre-wrap">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                          a: ({node, ...props}) => <a className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc ml-4 mb-2" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal ml-4 mb-2" {...props} />,
                          li: ({node, ...props}) => <li className="mb-1" {...props} />
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex w-full justify-start">
                  <div className="max-w-[85%] bg-[#061a15] border border-emerald-500/40 rounded-2xl rounded-tl-sm px-4 py-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#111111] border-t border-white/5">
              <div className="relative flex border border-white/10 bg-[#18181b] rounded-xl overflow-hidden focus-within:border-emerald-500/50 transition-colors">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="메시지를 입력하세요..."
                  className="w-full max-h-32 min-h-[50px] bg-transparent text-white text-[15px] p-3 pl-4 pr-12 resize-none focus:outline-none custom-scrollbar"
                  rows={Math.min(4, inputValue.split('\\n').length)}
                  style={{
                    lineHeight: '1.5',
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-2 bottom-2 p-2 text-emerald-500 hover:text-emerald-400 disabled:text-gray-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full flex flex-col items-center justify-center border-2 z-50 transition-colors duration-300"
        style={{
          backgroundColor: isOpen ? '#022c22' : '#061a15',
          borderColor: '#10b981',
          boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
        }}
      >
        {isOpen ? (
          <X className="text-emerald-400 w-7 h-7" />
        ) : (
          <Sparkles className="text-emerald-400 w-7 h-7" />
        )}
      </motion.button>
    </>
  );
}
