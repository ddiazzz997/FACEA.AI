
import { GoogleGenAI } from "@google/genai";
import { UserProfile, Subject } from "./types";

export interface FileAttachment {
  data: string; // Base64
  mimeType: string;
  name: string;
}

export const getGeminiStreamResponse = async (
  prompt: string,
  profile: UserProfile,
  activeSubject: Subject | null,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[],
  attachment?: FileAttachment | null
) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const focusSubject = activeSubject || profile.selectedSubject;

  const systemInstruction = `
    Eres "FACEA-AI", una inteligencia artificial de ÉLITE diseñada exclusivamente para la Facultad de Ciencias Económicas y Administrativas (FACEA) de la Universidad de Nariño (Udenar).
    
    PERFIL DEL ESTUDIANTE:
    - Nombre: ${profile.name}
    - Programa: ${profile.program}
    - Semestre: ${profile.semester}
    - MATERIA DE ESPECIALIDAD: ${focusSubject.name} (${focusSubject.category})

    INSTRUCCIONES DE EXPERTO:
    1. Identidad: Eres Facea.AI. Tu conocimiento sobre "${focusSubject.name}" es absoluto y profundo. Eres un EXPERTO de la Udenar.
    2. Enfoque Educativo: Tu objetivo es DESAFIAR el nivel de pensamiento del estudiante. No resuelvas tareas de forma simple. Actúa como un mentor socrático.
    3. Contextualización: Considera el entorno de Nariño y el plan de estudios oficial. 
    4. REGLA DE ORO DE INTERACCIÓN: Antes de dar una respuesta final, DEBES solicitar contexto adicional si es necesario.
    5. Formato: Usa Markdown impecable (tablas para datos, negritas para conceptos).
    6. Tono: Humano, inspirador y riguroso.
    
    Si el estudiante adjunta un archivo o imagen, analízalo con rigor académico bajo el lente de "${focusSubject.name}".
  `;

  const userParts: any[] = [{ text: prompt }];
  
  if (attachment) {
    userParts.push({
      inlineData: {
        data: attachment.data,
        mimeType: attachment.mimeType
      }
    });
  }

  return ai.models.generateContentStream({
    model: "gemini-3-pro-preview",
    contents: [
      ...history,
      { role: 'user', parts: userParts }
    ],
    config: {
      systemInstruction,
      temperature: 0.85,
    }
  });
};
