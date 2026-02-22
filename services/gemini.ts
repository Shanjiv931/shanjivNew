import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCE, EDUCATION_HIGHLIGHTS, ACCOMPLISHMENTS } from '../constants';

// Initialize the API
// The API key must be obtained exclusively from the environment variable process.env.GEMINI_API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Construct the system prompt with portfolio context
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PERSONAL_INFO.name}'s portfolio website. 
Your goal is to answer visitor questions about ${PERSONAL_INFO.name} in a professional yet friendly and slightly witty manner.

Here is the context about ${PERSONAL_INFO.name}:
Bio: ${PERSONAL_INFO.bio}
Tagline: ${PERSONAL_INFO.tagline}
Contact: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}

Education & Awards:
${EDUCATION_HIGHLIGHTS.map(e => `- ${e}`).join('\n')}

Accomplishments:
${ACCOMPLISHMENTS.map(a => `- ${a}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tags: ${p.tags.join(', ')})`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

Rules:
1. Keep answers concise (under 100 words unless asked for detail).
2. If asked about contact, provide the email or phone if urgent.
3. Highlight the "Rank 1" and "National Art Winner" facts when relevant to show versatility.
4. Adopt a helpful, tech-savvy, and creative persona.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I seem to be having trouble connecting to my brain. Please try again later.";
  }
};