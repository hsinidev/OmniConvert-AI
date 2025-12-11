
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available from environment variables
if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Extracts text from a base64 encoded image using Gemini.
 * @param base64Image The base64 encoded image data.
 * @param mimeType The MIME type of the image (e.g., 'image/jpeg', 'image/png').
 * @returns A promise that resolves to the extracted text.
 */
export async function extractTextFromImage(base64Image: string, mimeType: string): Promise<string> {
  try {
    const imagePart = {
      inlineData: {
        data: base64Image,
        mimeType: mimeType,
      },
    };

    const textPart = {
        text: "Extract all text from this image, preserving the original formatting as much as possible."
    };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', // Using flash as it is fast and capable for OCR
      contents: { parts: [imagePart, textPart] },
    });

    if (response && response.text) {
      return response.text;
    } else {
      throw new Error("Failed to extract text. The API response was empty.");
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Provide a more user-friendly error message
    if (error instanceof Error && error.message.includes('API key not valid')) {
        throw new Error("The configured API key is not valid. Please check your configuration.");
    }
    throw new Error("An error occurred while communicating with the AI service.");
  }
}
