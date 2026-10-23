import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Minimize2, 
  Maximize2, 
  RotateCcw,
  ExternalLink,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface ActionButton {
  label: string;
  action: 'scroll' | 'link';
  target: string;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: ActionButton[];
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `Hello! 👋 I'm Ahamad's Portfolio Assistant. I can answer your questions about his skills, education at AJIET (Class of 2028), his academic project ScholarMatch, or how to contact him. What would you like to know?`,
      timestamp: 'Just now',
      actions: [
        { label: 'Technical Skills', action: 'scroll', target: '#skills' },
        { label: 'ScholarMatch Project', action: 'scroll', target: '#projects' },
        { label: 'Education & AJIET', action: 'scroll', target: '#education' },
        { label: 'Contact Details', action: 'scroll', target: '#contact' },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowTooltip(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  // Quick prompt questions
  const quickPrompts = [
    'What are your technical skills?',
    'Tell me about ScholarMatch',
    'Where do you study and graduate?',
    'Are you open for internships?',
    'How can I contact Ahamad?',
  ];

  const handleActionClick = (action: ActionButton) => {
    if (action.action === 'scroll') {
      const el = document.querySelector(action.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.action === 'link') {
      window.open(action.target, '_blank', 'noopener,noreferrer');
    }
  };

  const generateResponse = (query: string): { text: string; actions?: ActionButton[] } => {
    const q = query.toLowerCase().trim();

    // Skills
    if (
      q.includes('skill') || 
      q.includes('python') || 
      q.includes(' c ') || 
      q.includes('programming') || 
      q.includes('excel') || 
      q.includes('technologies') || 
      q.includes('tech stack') || 
      q.includes('language')
    ) {
      return {
        text: `Ahamad specializes in foundational programming and analytical tools:\n\n• **Python**: Core programming, logic design, scripting, and algorithmic problem-solving.\n• **C Programming**: Procedural programming, memory fundamentals, data structure concepts, and system basics.\n• **Microsoft Excel**: Structured tabular data modeling, analytical formulas, and reporting.\n\nHe is also continuously learning Data Structures & Algorithms and Modern Web Development.`,
        actions: [
          { label: 'View Skills Section', action: 'scroll', target: '#skills' },
          { label: 'Check Learning Roadmap', action: 'scroll', target: '#learning' },
        ],
      };
    }

    // Projects / ScholarMatch
    if (
      q.includes('project') || 
      q.includes('scholarmatch') || 
      q.includes('scholar') || 
      q.includes('match') || 
      q.includes('portfolio work')
    ) {
      return {
        text: `Ahamad's featured academic project is **ScholarMatch** 🚀.\n\nIt is designed as an academic prototype to help students discover and match with relevant scholarship opportunities based on eligibility criteria and student profiles. The project is currently in active development as part of his computer science coursework.`,
        actions: [
          { label: 'View ScholarMatch Details', action: 'scroll', target: '#projects' },
        ],
      };
    }

    // Education / College / Degree
    if (
      q.includes('education') || 
      q.includes('college') || 
      q.includes('degree') || 
      q.includes('ajiet') || 
      q.includes('graduate') || 
      q.includes('graduation') || 
      q.includes('cgpa') || 
      q.includes('marks') || 
      q.includes('school')
    ) {
      return {
        text: `Ahamad is pursuing a **Bachelor of Engineering (B.E.) in Computer Science Engineering** at **A.J. Institute of Engineering and Technology (AJIET)**.\n\n• **Expected Graduation**: 2028\n• **Coursework**: Problem Solving in C, Python Programming, Data Structures & Algorithms concepts, Computer Fundamentals, and Mathematics for Computing.\n• **Grades**: Maintained authentically as an editable placeholder pending semester publishings.`,
        actions: [
          { label: 'View Education Timeline', action: 'scroll', target: '#education' },
        ],
      };
    }

    // Contact / Email / Phone / Reach
    if (
      q.includes('contact') || 
      q.includes('email') || 
      q.includes('phone') || 
      q.includes('call') || 
      q.includes('reach') || 
      q.includes('message') || 
      q.includes('number')
    ) {
      return {
        text: `You can reach Ahamad directly through the following channels:\n\n📧 **Email**: [shahadh22831@gmail.com](mailto:shahadh22831@gmail.com)\n📞 **Phone**: [+91 88486 67873](tel:8848667873)\n📍 **Location**: Kasargod, Kerala, India\n\nYou can also submit the interactive contact form on this page!`,
        actions: [
          { label: 'Send Email Now', action: 'link', target: 'mailto:shahadh22831@gmail.com' },
          { label: 'Open Contact Form', action: 'scroll', target: '#contact' },
        ],
      };
    }

    // Job / Hiring / Internships / Career / Fresher
    if (
      q.includes('hire') || 
      q.includes('job') || 
      q.includes('intern') || 
      q.includes('internship') || 
      q.includes('fresher') || 
      q.includes('career') || 
      q.includes('opportunity') || 
      q.includes('open to') || 
      q.includes('experience')
    ) {
      return {
        text: `Ahamad is an **enthusiastic fresher (graduating in 2028)** eager for **entry-level software development and IT opportunities**, including internships, junior software engineer roles, and trainee programs.\n\nHe is dedicated to learning quickly, contributing to real codebases, and collaborating with engineering teams. He is open to remote, hybrid, or on-site positions!`,
        actions: [
          { label: 'Discuss Opportunity', action: 'scroll', target: '#contact' },
        ],
      };
    }

    // Location / Where
    if (
      q.includes('location') || 
      q.includes('where') || 
      q.includes('kerala') || 
      q.includes('kasargod') || 
      q.includes('city')
    ) {
      return {
        text: `Ahamad is based in **Kasargod, Kerala, India** and studies near Mangalore at A.J. Institute of Engineering and Technology. He is open to relocation, hybrid, and remote software roles.`,
      };
    }

    // Bio / About Ahamad
    if (
      q.includes('who is') || 
      q.includes('about') || 
      q.includes('bio') || 
      q.includes('intro') || 
      q.includes('background') || 
      q.includes('tell me')
    ) {
      return {
        text: `**Ahamad Kalandar Shahad** is a Computer Science Engineering student passionate about programming, problem-solving, and creating practical digital experiences. He focuses on building rigorous computer science fundamentals, writing clean code, and working towards a fruitful career in software engineering.`,
        actions: [
          { label: 'Read Full About Section', action: 'scroll', target: '#about' },
        ],
      };
    }

    // Greetings
    if (
      q.startsWith('hi') || 
      q.startsWith('hello') || 
      q.startsWith('hey') || 
      q.includes('good morning') || 
      q.includes('good evening')
    ) {
      return {
        text: `Hello there! 👋 Glad to connect with you. How can I help you explore Ahamad's engineering portfolio today? Feel free to ask about his skills, education, projects, or how to contact him.`,
        actions: [
          { label: 'Technical Skills', action: 'scroll', target: '#skills' },
          { label: 'ScholarMatch Project', action: 'scroll', target: '#projects' },
          { label: 'Contact Details', action: 'scroll', target: '#contact' },
        ],
      };
    }

    // Default Fallback
    return {
      text: `Thanks for asking! As Ahamad's portfolio assistant, I can help you with:\n\n• **Skills**: Python, C Programming, Microsoft Excel\n• **Projects**: ScholarMatch (Academic Project)\n• **Education**: B.E. in CSE at AJIET (Class of 2028)\n• **Contact**: shahadh22831@gmail.com | +91 8848667873\n\nWhat would you like to know more about?`,
      actions: [
        { label: 'Skills', action: 'scroll', target: '#skills' },
        { label: 'Projects', action: 'scroll', target: '#projects' },
        { label: 'Contact Ahamad', action: 'scroll', target: '#contact' },
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const response = generateResponse(query);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        timestamp: 'Just now',
        actions: response.actions,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: `Chat cleared! What else would you like to know about Ahamad's skills, projects, or education?`,
        timestamp: 'Just now',
        actions: [
          { label: 'Technical Skills', action: 'scroll', target: '#skills' },
          { label: 'ScholarMatch Project', action: 'scroll', target: '#projects' },
          { label: 'Contact Details', action: 'scroll', target: '#contact' },
        ],
      },
    ]);
  };

  return (
    <>
      {/* Floating Greeting Tooltip Bubble (Disappears once opened) */}
      {showTooltip && !isOpen && (
        <div className="fixed bottom-20 right-6 z-40 max-w-xs animate-bounce hidden sm:flex items-center gap-2 p-3 rounded-2xl bg-slate-900/95 border border-electric-500/40 text-slate-200 text-xs shadow-2xl backdrop-blur-md">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-electric-500 to-violet-600 flex items-center justify-center text-white shrink-0 shadow-sm">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1 pr-1">
            <span className="font-semibold text-white block">Hi there! 👋</span>
            <span className="text-slate-300 text-[11px]">Ask me anything about Ahamad's profile & skills!</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-1 rounded-md"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close portfolio assistant' : 'Open portfolio assistant'}
        className={`fixed bottom-6 right-6 z-50 p-3.5 sm:p-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-glow-blue flex items-center justify-center ${
          isOpen
            ? 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
            : 'bg-gradient-to-tr from-electric-500 via-sky-500 to-violet-600 text-white'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
          </div>
        )}
      </button>

      {/* Expandable Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Portfolio Assistant"
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[540px] max-h-[80vh] rounded-3xl bg-[#0b1120]/95 border border-slate-700/80 shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden animate-fadeIn text-slate-100"
        >
          {/* Header */}
          <div className="px-5 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-electric-500 to-violet-600 flex items-center justify-center text-white shadow-glow-blue/40 shadow-sm font-bold font-mono text-sm">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                  <span>Portfolio Assistant</span>
                  <span className="text-[10px] font-mono text-electric-400 bg-electric-500/10 px-1.5 py-0.5 rounded border border-electric-500/20">
                    AI
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online • Ahamad's Knowledge Base
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="Reset conversation"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-electric-400 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[82%] space-y-2`}>
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-electric-500 to-violet-600 text-white rounded-tr-none shadow-md'
                        : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Action Buttons if provided */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.actions.map((act, i) => (
                        <button
                          key={i}
                          onClick={() => handleActionClick(act)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium text-electric-300 bg-slate-850 hover:bg-slate-800 border border-electric-500/30 hover:border-electric-400 transition-colors"
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="w-3 h-3 text-electric-400" />
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="block text-[10px] text-slate-400 px-1 font-mono">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-violet-600 to-electric-500 flex items-center justify-center text-white shrink-0 mt-0.5 text-xs font-mono">
                    U
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-electric-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 rounded-tl-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse delay-150" />
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse delay-300" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompts */}
          <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-950/60 overflow-x-auto no-scrollbar flex items-center gap-1.5">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-electric-500/40 transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about skills, ScholarMatch, contact..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-electric-400 focus:outline-none focus:ring-1 focus:ring-electric-400 text-xs sm:text-sm text-white placeholder-slate-400"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-electric-500 to-violet-600 hover:from-electric-400 hover:to-violet-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-glow-blue"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
