import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in-up">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh] relative overflow-hidden ring-1 ring-white/10">
        
        {/* BIG CAUTION HEADER - GOOGLE POLICY COMPLIANCE */}
        <div className="bg-red-600/10 border-b border-red-500/20 p-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
             <div className="bg-red-500 text-white p-3 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)] shrink-0 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
             </div>
             <div>
                <h2 className="text-2xl font-black text-red-500 uppercase tracking-widest">CAUTION: IMPORTANT NOTICE</h2>
                <p className="text-red-200 text-sm mt-1">
                    To comply with international digital safety standards and Google Policy, please read the following information carefully. Use of <strong>doodax.com</strong> implies strict adherence to our Terms of Service.
                </p>
             </div>
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            <h3 className="text-3xl font-bold text-white mb-6 pb-4 border-b border-slate-800 flex items-center gap-3">
                <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
                {title}
            </h3>
            
            <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                {content}
            </div>
            
            <div className="mt-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Official Contact</p>
                    <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:text-white transition-colors font-mono">hsini.web@gmail.com</a>
                </div>
                <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Official Domain</p>
                    <a href="https://doodax.com" target="_blank" className="text-indigo-400 hover:text-white transition-colors font-mono">doodax.com</a>
                </div>
            </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/90 flex justify-end gap-4">
          <button 
            onClick={onClose}
            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-10 rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;