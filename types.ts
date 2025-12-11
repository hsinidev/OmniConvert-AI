
export enum ToolCategory {
  PDF = 'PDF Tools',
  IMAGE = 'Image Tools',
  DOCUMENT = 'Document Tools',
  AI = 'AI Powered Tools',
  ARCHIVE = 'Archive Tools',
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  fromFormat: string;
  toFormat: string;
  accept: string;
  isAiPowered?: boolean;
}

export type ConversionStatus = 'idle' | 'uploading' | 'converting' | 'success' | 'error';
