import React, { useState, useMemo } from 'react';
import { Tool, ToolCategory } from '../types';
import DocumentIcon from './icons/DocumentIcon';
import ImageIcon from './icons/ImageIcon';
import PdfIcon from './icons/PdfIcon';
import AiIcon from './icons/AiIcon';
import ArchiveIcon from './icons/ArchiveIcon';

interface ToolGridProps {
  tools: Tool[];
  onSelectTool: (tool: Tool) => void;
}

const CategoryIcon: React.FC<{ category: ToolCategory }> = ({ category }) => {
  switch (category) {
    case ToolCategory.PDF:
      return <PdfIcon className="w-8 h-8 text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]" />;
    case ToolCategory.IMAGE:
      return <ImageIcon className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />;
    case ToolCategory.DOCUMENT:
      return <DocumentIcon className="w-8 h-8 text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />;
    case ToolCategory.AI:
        return <AiIcon className="w-8 h-8 text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]" />;
    case ToolCategory.ARCHIVE:
        return <ArchiveIcon className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />;
    default:
      return null;
  }
};


const ToolCard: React.FC<{ tool: Tool; onSelect: () => void }> = ({ tool, onSelect }) => (
    <div
        onClick={onSelect}
        className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2 overflow-hidden"
    >
        {/* Glow Effect on Hover */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-all duration-500"></div>

        <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-4">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-white/5 group-hover:border-indigo-500/50 transition-colors shadow-lg">
                    <CategoryIcon category={tool.category} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors tracking-tight">{tool.name}</h3>
                </div>
            </div>
            <p className="text-sm text-slate-400 group-hover:text-slate-200 min-h-[40px] leading-relaxed">{tool.description}</p>
        </div>
        <div className="mt-6 flex justify-end items-center relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 group-hover:text-indigo-300 transition-colors flex items-center gap-1">
                Launch Tool
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
            </span>
        </div>
    </div>
);


const ToolGrid: React.FC<ToolGridProps> = ({ tools, onSelectTool }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = useMemo(() => {
    return tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tools, searchTerm]);

  const categorizedTools = useMemo(() => {
    return filteredTools.reduce((acc, tool) => {
      (acc[tool.category] = acc[tool.category] || []).push(tool);
      return acc;
    }, {} as Record<ToolCategory, Tool[]>);
  }, [filteredTools]);

  const sortedCategories = Object.keys(categorizedTools).sort() as ToolCategory[];

  return (
    <div className="space-y-16">
      <div className="text-center relative py-10">
        <h2 className="relative text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter mb-8 drop-shadow-2xl">
          <span className="block mb-2">Convert. Edit.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
            Create.
          </span>
        </h2>
        <p className="relative mt-6 text-xl text-indigo-200 max-w-2xl mx-auto leading-relaxed">
          The all-in-one AI toolkit for your digital files. <br/>
          Secure, fast, and completely free.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto z-20">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <svg className="w-6 h-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search tools (e.g., 'OCR', 'PDF', 'Extract')"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-14 pr-6 py-5 text-lg text-white bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.2)] placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-slate-900/80"
        />
      </div>

      {sortedCategories.map(category => (
        <section key={category} className="animate-fade-in-up">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-10 w-1.5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.6)]"></div>
             <h3 className="text-3xl font-bold text-white tracking-tight">{category}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorizedTools[category].map(tool => (
              <ToolCard key={tool.id} tool={tool} onSelect={() => onSelectTool(tool)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ToolGrid;