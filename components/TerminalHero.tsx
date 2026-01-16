import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Copy, Check, ChevronRight } from 'lucide-react';
import { PROFILE } from '../constants';

interface CommandHistory {
  cmd: string;
  output: React.ReactNode;
}

export const TerminalHero: React.FC = () => {
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  const [isBooting, setIsBooting] = useState(true);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fullBootSequence = [
    "> Initializing environment variables...",
    `> Loading user profile: ${PROFILE.name}`,
    `> Role detected: ${PROFILE.title}`,
    "> Connecting to AWS region us-east-1...",
    "> Establishing secure connection...",
    "> Access granted.",
    "> Type 'help' to view available commands."
  ];

  // Boot sequence animation
  useEffect(() => {
    let delay = 0;
    fullBootSequence.forEach((line, index) => {
      delay += 500;
      setTimeout(() => {
        setBootSequence(prev => [...prev, line]);
        if (index === fullBootSequence.length - 1) {
          setIsBooting(false);
          // Focus input after boot
          setTimeout(() => inputRef.current?.focus(), 100);
        }
      }, delay);
    });
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [bootSequence, history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output: React.ReactNode = "";

      switch (cmd) {
        case 'help':
          output = (
            <div className="text-slate-400 space-y-1">
              <p>Available commands:</p>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="text-emerald-400">about</span> Display profile summary
                <span className="text-emerald-400">skills</span> List technical skills
                <span className="text-emerald-400">clear</span> Clear terminal
                <span className="text-emerald-400">contact</span> Show contact info
                <span className="text-emerald-400">whoami</span> Current user
              </div>
            </div>
          );
          break;
        case 'about':
          output = <p className="text-slate-300">{PROFILE.summary}</p>;
          break;
        case 'skills':
          output = (
             <div className="flex flex-wrap gap-2 text-slate-300">
               {['Terraform', 'Kubernetes', 'AWS', 'Python', 'Docker'].map(s => (
                 <span key={s} className="px-2 py-0.5 bg-slate-800 rounded text-sm">{s}</span>
               ))}
               <span className="text-xs opacity-50 block w-full mt-1">Type 'help' for more</span>
             </div>
          );
          break;
        case 'contact':
          output = <p className="text-slate-300">Email: {PROFILE.email}</p>;
          break;
        case 'whoami':
          output = <p className="text-slate-300">guest_user@portfolio</p>;
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case '':
          output = null;
          break;
        default:
          output = <p className="text-red-400">Command not found: {cmd}. Type 'help' for list.</p>;
      }

      setHistory(prev => [...prev, { cmd: input, output }]);
      setInput('');
    }
  };

  return (
    <div className="relative w-full max-w-4xl mt-10 p-2 sm:p-4 perspective-1000" onClick={() => inputRef.current?.focus()}>
      <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-lg border border-slate-700 shadow-2xl overflow-hidden min-h-[400px] flex flex-col">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700 shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex items-center text-xs text-slate-400 font-mono">
            <Terminal size={12} className="mr-2" />
            <span>bash — {PROFILE.name.toLowerCase().replace(' ', '_')}</span>
          </div>
          <div className="w-8"></div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm sm:text-base md:text-lg flex-grow overflow-y-auto max-h-[500px] text-slate-300 scrollbar-hide">
          {/* Boot Sequence */}
          <div className="space-y-1 mb-4">
            {bootSequence.map((line, i) => (
              <div key={i} className="text-slate-400">{line}</div>
            ))}
          </div>

          {/* User History */}
          {!isBooting && (
            <div className="space-y-4">
              <div className="text-emerald-400 mb-6 animate-fade-in-up">
                 Welcome to the interactive portfolio v2.0.0
                 <br/>
                 <span className="text-slate-500 text-sm">System ready. Awaiting input...</span>
              </div>
              
              {history.map((entry, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-emerald-500 mr-2">guest@portfolio:~$</span>
                    <span className="text-slate-200">{entry.cmd}</span>
                  </div>
                  {entry.output && <div className="ml-4 md:ml-6">{entry.output}</div>}
                </div>
              ))}

              {/* Input Line */}
              <div className="flex items-center">
                 <span className="text-emerald-500 mr-2">guest@portfolio:~$</span>
                 <div className="relative flex-grow">
                   <input
                     ref={inputRef}
                     type="text"
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     onKeyDown={handleCommand}
                     className="bg-transparent border-none outline-none text-slate-200 w-full p-0 font-mono caret-transparent"
                     autoComplete="off"
                     autoFocus
                   />
                   {/* Custom Cursor */}
                   <span 
                      className="absolute top-0 pointer-events-none text-transparent bg-emerald-500/50"
                      style={{ 
                        left: `${input.length}ch`,
                        width: '10px',
                        height: '1.2em',
                        opacity: showCursor ? 1 : 0 
                      }}
                   >
                     _
                   </span>
                 </div>
              </div>
              <div ref={bottomRef} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};