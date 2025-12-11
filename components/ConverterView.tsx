import React, { useState, useCallback } from 'react';
import { Tool, ConversionStatus } from '../types';
import { extractTextFromImage } from '../services/geminiService';
import BackIcon from './icons/BackIcon';
import UploadIcon from './icons/UploadIcon';
import CheckCircleIcon from './icons/CheckCircleIcon';
import XCircleIcon from './icons/XCircleIcon';
import DownloadIcon from './icons/DownloadIcon';

interface ConverterViewProps {
  tool: Tool;
  onBack: () => void;
}

// Helper to convert a file to a Base64 string
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(',')[1]); // Remove the data URI prefix
    };
    reader.onerror = error => reject(error);
  });
};


const ConverterView: React.FC<ConverterViewProps> = ({ tool, onBack }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ConversionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [convertedFileUrl, setConvertedFileUrl] = useState<string | null>(null);
  const [convertedFileName, setConvertedFileName] = useState<string>('');
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      resetState();
      setSelectedFile(event.target.files[0]);
    }
  };

  const resetState = () => {
    setSelectedFile(null);
    setStatus('idle');
    setErrorMessage('');
    setConvertedFileUrl(null);
    setConvertedFileName('');
  }

  const handleConvert = useCallback(async () => {
    if (!selectedFile) return;

    setStatus('converting');
    setErrorMessage('');
    
    try {
      if (tool.isAiPowered) {
        // AI-powered conversion (OCR)
        const base64Image = await fileToBase64(selectedFile);
        const text = await extractTextFromImage(base64Image, selectedFile.type);
        const blob = new Blob([text], { type: 'text/plain' });
        setConvertedFileUrl(URL.createObjectURL(blob));
        setConvertedFileName(selectedFile.name.replace(/\.[^/.]+$/, "") + ".txt");
      } else {
        // Mock conversion for other tools
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network/processing delay
        const mockBlob = new Blob([`Mock converted content for ${selectedFile.name}`], { type: 'application/octet-stream' });
        setConvertedFileUrl(URL.createObjectURL(mockBlob));
        setConvertedFileName(`converted_${selectedFile.name.replace(/\.[^/.]+$/, "")}.${tool.toFormat.toLowerCase()}`);
      }
      setStatus('success');
    } catch (error) {
      console.error("Conversion failed:", error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred.');
    }
  }, [selectedFile, tool]);

  const getStatusContent = () => {
    switch(status) {
      case 'converting':
        return (
          <div className="text-center p-12 border-2 border-dashed border-slate-600 rounded-2xl bg-slate-900/40">
            <div className="relative w-20 h-20 mx-auto">
                 <div className="absolute inset-0 border-4 border-indigo-500/30 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-6 text-xl font-bold text-white animate-pulse">Processing File...</p>
            <p className="text-sm text-indigo-300">Securely analyzing and converting.</p>
          </div>
        );
      case 'success':
        return (
          <div className="text-center p-12 bg-green-900/20 border-2 border-green-500/50 rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.1)]">
            <div className="bg-green-500/20 p-4 rounded-full inline-block mb-4">
                <CheckCircleIcon className="w-16 h-16 text-green-400" />
            </div>
            <p className="text-2xl font-bold text-white mb-2">Conversion Complete!</p>
            <p className="text-green-200 mb-8">Your file is ready for download.</p>
            <a
              href={convertedFileUrl!}
              download={convertedFileName}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full shadow-lg text-white bg-green-600 hover:bg-green-500 hover:shadow-green-500/40 focus:outline-none focus:ring-4 focus:ring-green-500/50 transition-all transform hover:-translate-y-1"
            >
              <DownloadIcon className="w-6 h-6 mr-2" />
              Download Result
            </a>
          </div>
        );
      case 'error':
        return (
          <div className="text-center p-12 bg-red-900/20 border-2 border-red-500/50 rounded-2xl">
            <div className="bg-red-500/20 p-4 rounded-full inline-block mb-4">
                <XCircleIcon className="w-16 h-16 text-red-400" />
            </div>
            <p className="text-2xl font-bold text-white mb-2">Conversion Failed</p>
            <p className="text-red-200">{errorMessage}</p>
          </div>
        );
      default: // 'idle'
        return (
          <div className="text-center p-16 border-2 border-dashed border-slate-600 rounded-3xl hover:border-indigo-500 hover:bg-slate-800/40 transition-all cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
                <div className="bg-slate-800 p-6 rounded-full inline-block mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <UploadIcon className="w-12 h-12 text-indigo-400" />
                </div>
                <label htmlFor="file-upload" className="block text-2xl font-black text-white mb-2 cursor-pointer">
                Select File to Convert
                </label>
                <p className="text-slate-400 mb-6 text-lg">or drag and drop it here</p>
                <div className="inline-block bg-slate-900/80 px-4 py-2 rounded-full text-sm font-mono text-indigo-300 border border-slate-700">
                    Accepts: <span className="font-bold text-white">{tool.accept}</span>
                </div>
            </div>
            <input id="file-upload" name="file-upload" type="file" className="sr-only" accept={tool.accept} onChange={handleFileChange} />
          </div>
        );
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <button onClick={onBack} className="flex items-center text-sm font-bold text-slate-400 hover:text-white mb-8 transition-colors group">
        <span className="bg-slate-800/80 p-2 rounded-full mr-3 group-hover:bg-indigo-600 transition-colors">
            <BackIcon className="w-5 h-5 group-hover:text-white" />
        </span>
        Back to Tools
      </button>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-14 relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">{tool.name}</h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">{tool.description}</p>
        </div>

        <div className="space-y-8 relative z-10">
          { getStatusContent() }

          {selectedFile && status !== 'converting' && (
             <div className="p-5 bg-slate-900/60 border border-slate-700 rounded-xl flex items-center justify-between shadow-inner">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-900/50 rounded-lg flex items-center justify-center border border-indigo-500/30">
                        <span className="text-xs font-bold text-indigo-300">FILE</span>
                    </div>
                    <div>
                        <p className="text-base font-bold text-white">
                            {selectedFile.name}
                        </p>
                        <p className="text-xs text-slate-400 font-mono">
                            {(selectedFile.size / 1024).toFixed(2)} KB
                        </p>
                    </div>
                </div>
                <div className="text-green-400">
                    <CheckCircleIcon className="w-8 h-8 drop-shadow-lg" />
                </div>
            </div>
          )}

          <div className="flex justify-center pt-6">
             {status === 'idle' && selectedFile && (
                <button
                    onClick={handleConvert}
                    className="w-full md:w-auto inline-flex items-center justify-center px-12 py-5 border border-transparent text-xl font-black rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)] text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition-all transform hover:-translate-y-1 active:scale-95"
                >
                    Start Conversion
                </button>
             )}
             {(status === 'success' || status === 'error') && (
                <button
                    onClick={resetState}
                    className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 border border-slate-600 text-lg font-medium rounded-full text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none transition-all"
                >
                    Convert Another File
                </button>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverterView;