import React, { useState } from 'react';
import { Tool } from './types';
import { CONVERSION_TOOLS } from './constants';
import ToolGrid from './components/ToolGrid';
import ConverterView from './components/ConverterView';
import GalaxyBackground from './components/GalaxyBackground';
import SeoContent from './components/SeoContent';
import LegalModal from './components/LegalModal';

type LegalPage = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

const App: React.FC = () => {
  const [activeTool, setActiveTool] = useState<Tool | null>(null);
  const [activeLegalPage, setActiveLegalPage] = useState<LegalPage>(null);

  const handleSelectTool = (tool: Tool) => {
    setActiveTool(tool);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setActiveTool(null);
  };

  const renderLegalContent = () => {
    switch (activeLegalPage) {
      case 'about':
        return (
          <div className="space-y-4">
            <p><strong>OmniConvert AI (doodax.com)</strong> is an open-source initiative dedicated to democratizing access to high-end file manipulation tools. Founded by Hsini Mohamed, our mission is to eliminate the barrier between static files and editable data.</p>
            <p>We leverage Google's Gemini AI to provide OCR capabilities that far surpass traditional methods, all while maintaining a strict privacy-first architecture.</p>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-4">
            <p>We are here to help. For support queries, DMCA notices, or business partnerships, please reach out:</p>
            <ul className="space-y-2 bg-slate-800 p-4 rounded-lg">
              <li><strong>Official Website:</strong> <a href="https://doodax.com" className="text-indigo-400">doodax.com</a></li>
              <li><strong>Support Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:underline">hsini.web@gmail.com</a></li>
              <li><strong>Developer:</strong> Hsini Mohamed</li>
            </ul>
          </div>
        );
      case 'guide':
        return (
          <div className="space-y-4">
            <h4 className="font-bold text-white">How to use OmniConvert AI:</h4>
            <ol className="list-decimal pl-5 space-y-3">
              <li><strong>Select a Tool:</strong> Browse our grid of tools for PDF, Image, or AI OCR needs.</li>
              <li><strong>Upload File:</strong> Drag and drop your file or click to browse. We accept PDF, JPG, PNG, WEBP, and ZIP.</li>
              <li><strong>AI Processing:</strong> For OCR tasks, our Gemini engine analyzes the image. For standard conversions, our secure algorithms process the data locally or in a sandbox.</li>
              <li><strong>Download:</strong> Get your result instantly. No email required.</li>
            </ol>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-4">
            <p><strong>Last Updated: 2024</strong></p>
            <p>Your privacy is non-negotiable at Doodax.com.</p>
            <ul className="list-disc pl-5">
                <li><strong>No Retention:</strong> Files are deleted immediately after processing.</li>
                <li><strong>No Sharing:</strong> We do not sell user data to third parties.</li>
                <li><strong>Cookies:</strong> We use minimal cookies solely for site functionality and analytics to improve performance.</li>
            </ul>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-4">
            <p>By accessing doodax.com, you agree to these terms:</p>
            <p>1. You must not upload illegal, harmful, or malicious files.</p>
            <p>2. The service is provided "AS IS". While we strive for perfection, we cannot guarantee zero errors in complex AI conversions.</p>
            <p>3. You retain ownership of your original files.</p>
          </div>
        );
      case 'dmca':
        return (
          <div className="space-y-4">
            <p>Doodax respects intellectual property. If you believe a file hosted temporarily on our service infringes your copyright, send a notice to <strong>hsini.web@gmail.com</strong> containing:</p>
            <ul className="list-disc pl-5">
                <li>Identification of the copyrighted work.</li>
                <li>Contact information (Email/Phone).</li>
                <li>A statement of good faith belief.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  const getLegalTitle = () => {
    if (!activeLegalPage) return '';
    return activeLegalPage === 'dmca' ? 'DMCA & Copyright' : activeLegalPage.charAt(0).toUpperCase() + activeLegalPage.slice(1).replace('-', ' ');
  };

  return (
    <div className="relative min-h-screen font-sans text-slate-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200 flex flex-col">
      
      <GalaxyBackground />

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-slate-950/50 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={handleBack}>
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                <img src="/public/favicon.svg" alt="Logo" className="relative w-10 h-10 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white drop-shadow-md">
                OmniConvert <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI</span>
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
                <button onClick={() => setActiveLegalPage('about')} className="text-sm font-semibold text-slate-300 hover:text-white hover:scale-105 transition-all">About</button>
                <button onClick={() => setActiveLegalPage('guide')} className="text-sm font-semibold text-slate-300 hover:text-white hover:scale-105 transition-all">Guide</button>
                <button onClick={() => setActiveLegalPage('contact')} className="px-4 py-2 text-sm font-bold bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all">Contact</button>
            </nav>
            
            {/* Mobile Menu Button (Simple implementation) */}
            <button className="md:hidden text-white p-2" onClick={() => setActiveLegalPage('guide')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        {activeTool ? (
          <div className="animate-fade-in-up">
            <ConverterView tool={activeTool} onBack={handleBack} />
          </div>
        ) : (
          <ToolGrid tools={CONVERSION_TOOLS} onSelectTool={handleSelectTool} />
        )}
      </main>

      {/* SEO Section (Homepage Only) */}
      {!activeTool && <SeoContent />}

      {/* Footer */}
       <footer className="relative z-10 bg-slate-950/80 backdrop-blur-xl border-t border-white/5 mt-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">OmniConvert AI</h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                        The ultimate free online file converter. Secure, fast, and enhanced with powerful Artificial Intelligence. 
                        Built for the modern web by Doodax.
                    </p>
                    <div className="flex space-x-4">
                        {/* Social Placeholders */}
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </a>
                        <a href="https://github.com/hsinidev" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gray-700 hover:text-white transition-all">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-6">Support</h3>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><button onClick={() => setActiveLegalPage('contact')} className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Contact Us</button></li>
                        <li><button onClick={() => setActiveLegalPage('guide')} className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> User Guide</button></li>
                        <li><a href="mailto:hsini.web@gmail.com" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Report Bug</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-6">Legal</h3>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><button onClick={() => setActiveLegalPage('privacy')} className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Privacy Policy</button></li>
                        <li><button onClick={() => setActiveLegalPage('terms')} className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Terms of Service</button></li>
                        <li><button onClick={() => setActiveLegalPage('dmca')} className="hover:text-indigo-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> DMCA</button></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Doodax.com. All rights reserved.</p>
                
                <div className="px-6 py-2 bg-indigo-900/20 rounded-full border border-indigo-500/20">
                     <span className="text-slate-400 text-sm font-medium">Powered by </span>
                     <a 
                        href="https://github.com/hsinidev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 font-bold hover:underline transition-colors ml-1"
                     >
                        HSINI MOHAMED
                     </a>
                </div>
            </div>
          </div>
        </footer>

        <LegalModal 
            isOpen={!!activeLegalPage}
            onClose={() => setActiveLegalPage(null)}
            title={getLegalTitle()}
            content={renderLegalContent()}
        />
    </div>
  );
};

export default App;