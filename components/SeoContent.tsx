import React, { useState } from 'react';

const SeoContent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="container mx-auto px-4 py-16 relative z-10" id="seo-article">
      <div className="max-w-6xl mx-auto bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
        
        {/* Article Container */}
        <article className="p-8 md:p-12">
          
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 mb-6 drop-shadow-sm tracking-tight">
              Doodax.com: The Ultimate Free AI File Converter & OCR Powerhouse
            </h1>
            <p className="text-lg text-indigo-200 max-w-3xl mx-auto font-medium">
              Transforming the way you handle documents with Google Gemini AI technology. Secure, Fast, Free.
            </p>
          </header>

          {/* The Content Area - Logic for 2 Lines limit */}
          <div className={`transition-all duration-1000 ease-in-out relative ${isExpanded ? 'max-h-full opacity-100' : 'max-h-[80px] overflow-hidden opacity-80'}`}>
            
            <div className="prose prose-invert prose-lg max-w-none text-slate-300">
              
              {/* Introduction - This will be partially visible */}
              <p className="lead text-xl text-white font-semibold mb-8">
                Welcome to <strong>Doodax.com (OmniConvert AI)</strong>, the definitive solution for modern file conversion. In a digital landscape dominated by subscription fees and data harvesting, Doodax stands apart as a beacon of open-source integrity and cutting-edge performance. Whether you are a student needing to extract notes from a whiteboard photo, a developer converting assets, or a business professional managing PDF workflows, our platform leverages the immense power of <strong>Google's Gemini 2.5 Flash AI</strong> to deliver results that were previously impossible with standard tools.
              </p>

              {/* Comprehensive Content starts here */}
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 my-12">
                <h2 className="text-2xl font-bold text-white mb-6">Table of Contents</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-indigo-300 list-none pl-0">
                  <li><a href="#introduction" className="hover:text-white transition-colors">1. Introduction to Next-Gen Conversion</a></li>
                  <li><a href="#ai-ocr" className="hover:text-white transition-colors">2. The Power of AI Optical Character Recognition</a></li>
                  <li><a href="#security" className="hover:text-white transition-colors">3. Privacy-First Security Architecture</a></li>
                  <li><a href="#tools-suite" className="hover:text-white transition-colors">4. Comprehensive Tool Suite Breakdown</a></li>
                  <li><a href="#user-guide" className="hover:text-white transition-colors">5. Step-by-Step User Guide</a></li>
                  <li><a href="#technology" className="hover:text-white transition-colors">6. Under the Hood: React 19 & Gemini</a></li>
                  <li><a href="#faq" className="hover:text-white transition-colors">7. Frequently Asked Questions (FAQ)</a></li>
                  <li><a href="#conclusion" className="hover:text-white transition-colors">8. Conclusion</a></li>
                </ul>
              </div>

              <h2 id="introduction" className="text-3xl font-bold text-white mt-16 mb-6">1. Introduction to Next-Gen Conversion</h2>
              <p>
                The internet is flooded with file converters. Most are outdated, riddled with ads, or insecure. Doodax.com redefines expectations by treating file conversion not as a utility, but as an intelligent process. By integrating Large Language Models (LLMs), we move beyond binary file manipulation into semantic understanding. This means when you convert a document, our system understands the context, preserving layout, intent, and data integrity better than any legacy algorithm.
              </p>

              <h2 id="ai-ocr" className="text-3xl font-bold text-white mt-16 mb-6">2. The Power of AI Optical Character Recognition</h2>
              <p>
                Optical Character Recognition (OCR) has traditionally been a hit-or-miss technology. Traditional OCR engines struggle with shadows, cursive handwriting, and complex table structures. Doodax utilizes the <strong>Gemini 2.5 Vision model</strong>.
              </p>
              <h3 className="text-xl font-bold text-indigo-300 mt-6">How It Works</h3>
              <p>
                When you upload an image to our OCR tool, we don't just look for shapes that resemble letters. The AI "sees" the image like a human would. It recognizes that a string of numbers at the bottom of a receipt is a total, not a random artifact. It understands that a handwritten note in the margin belongs to the adjacent paragraph.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Handwriting Recognition:</strong> Decipher doctor's notes, whiteboard brainstorming, and historical manuscripts.</li>
                <li><strong>Multi-Language Support:</strong> Automatically detects and translates text from over 100 languages.</li>
                <li><strong>Format Preservation:</strong> Maintains lists, headers, and bold text in the output.</li>
              </ul>

              <h2 id="security" className="text-3xl font-bold text-white mt-16 mb-6">3. Privacy-First Security Architecture</h2>
              <p>
                In 2024, data privacy is paramount. Doodax.com is engineered with a "Zero-Retention" philosophy.
              </p>
              <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 my-8 bg-slate-800/30 text-slate-200 italic rounded-r-lg">
                "Your files are yours. We do not store, view, or sell your documents. All processing is transient, and data is wiped from memory immediately after the transaction is complete."
              </blockquote>
              <p>
                For standard conversions (like JPG to PNG), the processing often happens entirely within your browser using WebAssembly technology, meaning the file never even leaves your device. For AI tasks requiring cloud processing, we use encrypted TLS 1.3 tunnels to Google's secure enterprise endpoints, ensuring military-grade security during transit.
              </p>

              <h2 id="tools-suite" className="text-3xl font-bold text-white mt-16 mb-6">4. Comprehensive Tool Suite Breakdown</h2>
              
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">PDF Tools</h3>
              <p>
                Manage the world's most popular document format with ease.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="bg-slate-800/40 p-4 rounded-lg"><strong>PDF to Word:</strong> Convert locked PDFs into editable DOCX files.</li>
                <li className="bg-slate-800/40 p-4 rounded-lg"><strong>Compress PDF:</strong> Shrink large reports for email without quality loss.</li>
                <li className="bg-slate-800/40 p-4 rounded-lg"><strong>Merge & Split:</strong> Organize your pages exactly how you need them.</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">Image Tools</h3>
              <p>
                Perfect for designers and web developers.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="bg-slate-800/40 p-4 rounded-lg"><strong>HEIC to JPG:</strong> Convert iPhone photos for Windows compatibility.</li>
                <li className="bg-slate-800/40 p-4 rounded-lg"><strong>WEBP Converter:</strong> Modernize your web assets.</li>
                <li className="bg-slate-800/40 p-4 rounded-lg"><strong>Image to Text:</strong> The core of our AI offering.</li>
              </ul>

              <h2 id="faq" className="text-3xl font-bold text-white mt-16 mb-6">7. Frequently Asked Questions (FAQ)</h2>
              <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                  <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h3 className="font-bold text-lg text-white mb-2" itemProp="name">Is OmniConvert AI free?</h3>
                      <div className="text-slate-400" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <div itemProp="text">Yes, OmniConvert AI is completely free to use. We are supported by the open-source community.</div>
                      </div>
                  </div>
                  <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h3 className="font-bold text-lg text-white mb-2" itemProp="name">How do I contact support?</h3>
                      <div className="text-slate-400" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <div itemProp="text">You can reach us at hsini.web@gmail.com for any inquiries, bug reports, or DMCA notices.</div>
                      </div>
                  </div>
                   <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h3 className="font-bold text-lg text-white mb-2" itemProp="name">Is my data safe?</h3>
                      <div className="text-slate-400" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <div itemProp="text">Absolutely. We use a zero-retention policy. Your files are deleted immediately after processing.</div>
                      </div>
                  </div>
              </div>

              <div className="mt-16 p-8 bg-indigo-900/20 border border-indigo-500/20 rounded-2xl text-center">
                <p className="text-2xl font-bold text-white mb-4">Ready to transform your files?</p>
                <p className="text-indigo-200">Experience the future of file conversion today with OmniConvert AI.</p>
              </div>

            </div>
          </div>

          {/* Gradient Overlay for Collapsed State */}
          {!isExpanded && (
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent z-10 pointer-events-none rounded-b-3xl"></div>
          )}

          {/* Read More / Read Less Button */}
          <div className="relative z-20 mt-8 flex justify-center">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 px-8 py-3 bg-white text-slate-900 hover:bg-indigo-50 font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
            >
              <span>{isExpanded ? 'Read Less' : 'Read Full Article'}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'animate-bounce'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

        </article>
      </div>
    </section>
  );
};

export default SeoContent;