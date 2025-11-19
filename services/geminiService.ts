import { GoogleGenAI, Type, Schema } from "@google/genai";
import { Question } from "../types";

// Initialize the client
// Note: API key is expected to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getExplanation = async (
  question: string,
  correctAnswer: string,
  userAnswer: string
): Promise<string> => {
  try {
    const modelId = "gemini-2.5-flash"; 
    const prompt = `
      You are an expert graphic design tutor. 
      Question: "${question}"
      Correct Answer: "${correctAnswer}"
      User's Answer: "${userAnswer}"

      Please explain concisely (in 2-3 sentences) why the correct answer is right and, if the user was wrong, why their answer was incorrect.
      Focus on the concepts of graphic design workflow, file formats, and best practices.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: "Be helpful, encouraging, and concise.",
      }
    });

    return response.text || "No explanation available.";
  } catch (error) {
    console.error("Error fetching explanation:", error);
    return "Sorry, I couldn't generate an explanation at this moment. Please try again.";
  }
};

export const generateNewQuestions = async (currentQuestions: Question[]): Promise<Question[]> => {
  try {
    const modelId = "gemini-2.5-flash";
    
    // We send a few examples to guide style
    const examples = currentQuestions.slice(0, 3).map(q => 
      `Q: ${q.text} | Options: ${q.options.join(', ')} | Correct Index: ${q.correctAnswerIndex}`
    ).join('\n');

    const schema: Schema = {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          text: { type: Type.STRING },
          options: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          correctAnswerIndex: { type: Type.INTEGER, description: "Index 0-3" }
        },
        required: ["text", "options", "correctAnswerIndex"]
      }
    };

    const response = await ai.models.generateContent({
      model: modelId,
      contents: `Generate 5 new multiple-choice questions about graphic design, freelancing, Adobe Illustrator/Photoshop workflow, and professional practices. 
      They should be similar in difficulty and style to these examples:
      ${examples}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema
      }
    });

    const jsonStr = response.text;
    if (!jsonStr) return [];

    const parsed = JSON.parse(jsonStr);
    
    // Map to add IDs (using timestamp + index to avoid collision)
    return parsed.map((q: Omit<Question, 'id'>, idx: number) => ({
      ...q,
      id: Date.now() + idx
    }));

  } catch (error) {
    console.error("Error generating questions:", error);
    throw error;
  }
};
