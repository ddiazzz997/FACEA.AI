
import React, { useState, useRef, useEffect } from 'react';
import { UserProfile, Message, Subject, PROGRAM_SUBJECTS } from '../types';
import { getGeminiStreamResponse, FileAttachment } from '../geminiService';
import { Send, BookOpen, BrainCircuit, Sparkles, User, Bot, LogOut, Menu, X, ChevronRight, Loader2, GraduationCap, Plus, History, MessageSquare, Lightbulb, Paperclip, FileText, Image as ImageIcon, CirclePlus } from 'lucide-react';
import { GenerateContentResponse } from "@google/genai";
import Logo from './Logo';

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  date: Date;
}

interface ChatInterfaceProps {
  profile: UserProfile;
  onLogout: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ profile, onLogout }) => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeSubject, setActiveSubject] = useState<Subject | null>(profile.selectedSubject || null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [attachment, setAttachment] = useState<FileAttachment | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const subjects = PROGRAM_SUBJECTS[profile.program][profile.semester] || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    startNewChat();
  }, [activeSubject]);

  const startNewChat = (customMessage?: string) => {
    const focusSub = activeSubject || profile.selectedSubject;
    const welcomeText = customMessage || `¡Hola de nuevo, **${profile.name}**! 👋
    
Veo que hoy estamos enfocados en **${focusSub.name}** de tu programa en **${profile.program}**. He configurado mi sistema como un experto senior en esta materia para ayudarte a desafiar tus límites intelectuales.

¿En qué punto exacto de tu trabajo o estudio te encuentras hoy? Cuéntame los detalles o **adjunta tus archivos/fotos** usando el botón **(+)** para empezar a potenciar tus resultados.`;
    
    const welcome: Message = {
      id: 'welcome-' + Date.now(),
      role: 'model',
      content: welcomeText,
      timestamp: new Date()
    };
    
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: focusSub ? `Foco: ${focusSub.name}` : 'Nueva Consulta',
      messages: [welcome],
      date: new Date()
    };

    setSessions(prev => [newSession, ...prev]);
    setCurrentSessionId(newSession.id);
    setMessages([welcome]);
  };

  const switchSession = (sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId);
    if (session) {
      setCurrentSessionId(sessionId);
      setMessages(session.messages);
    }
  };

  const handleSuggestion = (subjectName: string) => {
    setInput(`Deseo potenciar mi aprendizaje en ${subjectName}. ¿Podrías darme un desafío intelectual relacionado con el tema actual que estoy viendo?`);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = (event.target?.result as string).split(',')[1];
      setAttachment({
        data: base64,
        mimeType: file.type || 'application/octet-stream',
        name: file.name
      });
    };
    reader.readAsDataURL(file);
    // Reset input value to allow the same file to be uploaded again if needed
    e.target.value = '';
  };

  const handleSend = async (overrideInput?: string) => {
    const messageText = overrideInput || input;
    if ((!messageText.trim() && !attachment) || isTyping || !currentSessionId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: attachment ? `${messageText}\n\n📎 [Archivo adjunto: ${attachment.name}]` : messageText,
      timestamp: new Date()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    
    setSessions(prev => prev.map(s => 
      s.id === currentSessionId ? { ...s, messages: newMessages, title: messageText.substring(0, 25) + (messageText.length > 25 ? '...' : '') } : s
    ));

    const currentAttachment = attachment;
    setInput('');
    setAttachment(null);
    setIsTyping(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.content }]
    }));

    try {
      const stream = await getGeminiStreamResponse(messageText || "Analiza el archivo adjunto", profile, activeSubject, history, currentAttachment);
      
      let fullContent = '';
      const modelMessageId = (Date.now() + 1).toString();
      
      setMessages(prev => [...prev, {
        id: modelMessageId,
        role: 'model',
        content: '',
        timestamp: new Date()
      }]);

      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        const text = c.text || '';
        fullContent += text;
        setMessages(prev => {
            const updated = prev.map(m => 
              m.id === modelMessageId ? { ...m, content: fullContent } : m
            );
            setSessions(prevS => prevS.map(s => 
                s.id === currentSessionId ? { ...s, messages: updated } : s
            ));
            return updated;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex h-screen bg-white text-slate-900 overflow-hidden font-sans">
      {!isSidebarOpen && (
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-40 p-3 bg-white border border-slate-200 rounded-2xl lg:hidden shadow-lg text-[#D32F2F]"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative z-50 h-full bg-slate-50 border-r border-slate-200 transition-all duration-500 shadow-2xl lg:shadow-none
        ${isSidebarOpen ? 'w-80 translate-x-0' : 'w-0 -translate-x-full lg:w-0'}
      `}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <Logo size="sm" showSubtext={false} />
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-[#D32F2F]">
              <X size={20} />
            </button>
          </div>

          <button 
            onClick={() => startNewChat()}
            className="w-full flex items-center justify-center gap-2 py-4 bg-white border-2 border-slate-200 rounded-2xl text-slate-800 font-black text-sm uppercase tracking-widest hover:border-[#D32F2F] hover:text-[#D32F2F] transition-all mb-8 shadow-sm group"
          >
            <Plus size={18} className="group-hover:rotate-90 transition-transform" /> Nueva Consulta
          </button>

          <div className="flex-1 space-y-8 overflow-y-auto custom-scrollbar">
            {/* History Section */}
            <div>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-2 flex items-center gap-2">
                <History size={12} /> Historial de Sesión
              </h3>
              <div className="space-y-1">
                {sessions.map(s => (
                  <button 
                    key={s.id}
                    onClick={() => switchSession(s.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left font-bold text-xs ${currentSessionId === s.id ? 'bg-red-50 text-[#D32F2F] border border-red-100' : 'text-slate-500 hover:bg-white hover:shadow-sm'}`}
                  >
                    <MessageSquare size={14} className={currentSessionId === s.id ? 'text-[#D32F2F]' : 'text-slate-300'} />
                    <span className="truncate">{s.title}</span>
                  </button>
                ))}
                {sessions.length === 0 && <p className="text-[10px] text-slate-400 px-4 italic">No hay historial aún.</p>}
              </div>
            </div>

            {/* Subjects Section */}
            <div>
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-2 flex items-center gap-2">
                <BookOpen size={12} /> Malla Semestre {profile.semester}
              </h3>
              <div className="space-y-1">
                {subjects.map(s => (
                  <button 
                    key={s.id}
                    onClick={() => setActiveSubject(s)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left font-bold text-xs ${activeSubject?.id === s.id ? 'bg-[#D32F2F] text-white shadow-lg shadow-red-500/20' : 'text-slate-500 hover:bg-white hover:shadow-sm'}`}
                  >
                    <BookOpen size={14} />
                    <span className="truncate">{s.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-200 space-y-4">
            <div className="flex items-center gap-3 px-2">
              <img src={profile.avatar} className="w-12 h-12 rounded-2xl border-2 border-slate-100 bg-white shadow-sm" alt="Avatar" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black text-slate-900 truncate">{profile.name}</p>
                <p className="text-[9px] font-black text-slate-400 truncate uppercase tracking-tighter">{profile.program}</p>
              </div>
            </div>
            <button 
              onClick={onLogout}
              className="w-full flex items-center gap-2 px-4 py-3 rounded-2xl text-slate-400 hover:text-[#D32F2F] hover:bg-red-50 transition-all text-xs font-black uppercase tracking-widest"
            >
              <LogOut size={16} /> Salir de Facea.AI
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative bg-white">
        <header className="h-24 border-b border-slate-100 flex items-center justify-between px-10 bg-white/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-4">
            {!isSidebarOpen && <div className="w-12" />}
            <div className="flex flex-col">
              <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Módulo de Especialidad Facea.AI</h2>
              <div className="flex items-center gap-2">
                <p className="text-black font-black text-lg">
                  {activeSubject ? activeSubject.name : profile.selectedSubject.name}
                </p>
                <div className="px-2 py-0.5 bg-red-50 text-[#D32F2F] text-[9px] font-black rounded-lg border border-red-100 uppercase tracking-widest">Experto Activado</div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest border border-slate-700 shadow-xl">
              <BrainCircuit size={16} className="text-red-500" /> IA de Élite FACEA
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-14 space-y-12 scroll-smooth custom-scrollbar">
          <div className="max-w-4xl mx-auto space-y-12">
            {messages.length === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-4 duration-1000">
                <button 
                  onClick={() => handleSuggestion(activeSubject?.name || profile.selectedSubject.name)}
                  className="flex items-center gap-3 p-4 bg-red-50/50 border border-red-100 rounded-2xl text-left hover:bg-red-100 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-red-200 flex items-center justify-center text-[#D32F2F] group-hover:scale-110 transition-transform">
                    <Lightbulb size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Desafío Intelectual</p>
                    <p className="text-xs font-bold text-slate-700">Analizar caso real de {activeSubject?.name || profile.selectedSubject.name}</p>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-red-300" />
                </button>
              </div>
            )}

            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-6 duration-700`}>
                <div className={`flex gap-6 max-w-2xl ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-12 h-12 rounded-[1.25rem] flex-shrink-0 flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${
                    m.role === 'user' ? 'bg-[#D32F2F] border-2 border-red-400' : 'bg-white border-2 border-slate-100'
                  }`}>
                    {m.role === 'user' ? <User size={24} className="text-white" /> : <Bot size={24} className="text-[#D32F2F]" />}
                  </div>
                  <div className={`space-y-3 ${m.role === 'user' ? 'text-right' : ''}`}>
                    <div className={`rounded-[2rem] px-8 py-5 text-[15px] leading-relaxed shadow-xl border ${
                      m.role === 'user' 
                        ? 'bg-slate-900 text-white border-slate-800' 
                        : 'bg-white border-slate-50 text-slate-700'
                    }`}>
                      {m.content.split('\n').map((line, i) => (
                        <p key={i} className={line.trim() === '' ? 'h-4' : 'mb-3'}>
                          {line.split('**').map((part, j) => (
                            j % 2 === 1 ? <strong key={j} className="text-[#D32F2F] font-black">{part}</strong> : part
                          ))}
                        </p>
                      ))}
                    </div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                      {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {m.role === 'user' ? 'ESTUDIANTE' : 'FACEA.AI'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-6 max-w-2xl">
                  <div className="w-12 h-12 rounded-[1.25rem] bg-white border-2 border-slate-100 flex items-center justify-center shadow-lg animate-float">
                    <Loader2 size={24} className="text-[#D32F2F] animate-spin" />
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-[2rem] px-8 py-5 flex items-center gap-2 shadow-inner">
                    <div className="w-2 h-2 bg-[#D32F2F] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#D32F2F] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-[#D32F2F] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="p-8 md:p-12 bg-white flex flex-col items-center">
            {attachment && (
              <div className="w-full max-w-4xl mb-4 animate-in slide-in-from-bottom-2 duration-300">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 border border-red-100 rounded-2xl shadow-sm">
                  {attachment.mimeType.startsWith('image/') ? <ImageIcon size={18} className="text-[#D32F2F]" /> : <FileText size={18} className="text-[#D32F2F]" />}
                  <span className="text-xs font-bold text-slate-700 truncate max-w-[200px]">{attachment.name}</span>
                  <button onClick={() => setAttachment(null)} className="p-1 hover:bg-red-100 rounded-full transition-colors">
                    <X size={14} className="text-[#D32F2F]" />
                  </button>
                </div>
              </div>
            )}
            
            <div className="w-full max-w-5xl flex items-center gap-4">
                {/* Botón +1 para archivos */}
                <div className="relative group">
                    <input 
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*,.pdf,.doc,.docx,.txt"
                    />
                    <button 
                        onClick={() => fileInputRef.current?.click()}
                        title="Cargar archivos y fotos"
                        className="p-5 bg-white border-2 border-slate-100 text-[#D32F2F] rounded-full hover:bg-red-50 hover:border-[#D32F2F] hover:scale-110 active:scale-95 transition-all shadow-xl flex items-center justify-center group"
                    >
                        <CirclePlus size={28} className="group-hover:rotate-90 transition-transform duration-300" />
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">ADJUNTAR (+1)</span>
                    </button>
                </div>

                <div className="flex-1 relative group">
                    <div className="absolute inset-0 bg-red-500/5 blur-3xl group-focus-within:bg-red-500/10 transition-colors -z-10 rounded-[2.5rem]"></div>
                    <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder={activeSubject ? `Escribe tu consulta sobre ${activeSubject.name}...` : "Escribe tu consulta académica..."}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] py-6 pl-10 pr-20 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-8 focus:ring-red-500/5 focus:bg-white focus:border-[#D32F2F] transition-all shadow-2xl text-lg font-bold"
                    />
                    <button 
                        onClick={() => handleSend()}
                        disabled={(!input.trim() && !attachment) || isTyping}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black text-white rounded-full hover:bg-[#D32F2F] transition-all hover:scale-110 active:scale-90 shadow-2xl disabled:opacity-20 disabled:grayscale disabled:scale-100"
                    >
                        <Send size={24} />
                    </button>
                </div>
            </div>
            
            <div className="mt-6 flex justify-center gap-12 text-[10px] text-slate-400 uppercase tracking-[0.4em] font-black">
                <span className="flex items-center gap-2 hover:text-[#D32F2F] transition-colors cursor-help">
                    <History size={14} /> NODO ACTIVADO
                </span>
                <span className="flex items-center gap-2 hover:text-black transition-colors cursor-help">
                    <GraduationCap size={14} /> FACEA - UNIVERSIDAD DE NARIÑO
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
