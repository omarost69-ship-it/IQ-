import { GoogleGenAI } from "@google/genai";
import { TestResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateCognitiveProfile(result: TestResult) {
  const prompt = `
    Based on the following IQ test results, generate a professional and encouraging cognitive profile.
    
    Overall IQ Estimate: ${result.iqEstimate}
    Score: ${result.score}/${result.totalQuestions}
    
    Breakdown:
    - Logical Reasoning: ${result.breakdown.logical}%
    - Mathematical Ability: ${result.breakdown.mathematical}%
    - Spatial Awareness: ${result.breakdown.spatial}%
    - Verbal Comprehension: ${result.breakdown.verbal}%
    
    Provide:
    1. A summary of their cognitive strengths.
    2. Areas for potential growth.
    3. A brief explanation of what these scores mean in a real-world context.
    
    Keep the tone professional, scientific yet accessible.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating profile:", error);
    return "Unable to generate a detailed profile at this time. However, your scores indicate a strong performance across multiple cognitive domains.";
  }
}
