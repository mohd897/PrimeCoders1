require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

let ai;
try {
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
} catch (e) {
  console.log("Failed to initialize GoogleGenAI", e);
}

const chatInteraction = async (req, res) => {
  try {
    const { message, history } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
      // Mock response if no API key is present
      const mockResponses = [
        "I understand. Can you tell me how long you've been experiencing these symptoms?",
        "Are there any other symptoms you've noticed recently, like fever, fatigue, or pain?",
        "On a scale of 1 to 10, how severe would you rate your discomfort?",
        "Thank you for sharing. Based on what you've described, it sounds like it could be a common viral issue or fatigue, but I highly recommend monitoring it. Please consult a doctor if it gets worse."
      ];
      
      const isIntro = !history || history.length === 0;
      let replyText = isIntro ? 
        "Hello! I am the OmniGen AI symptom checker. I see you're not feeling well. To help identify the problem, could you describe your main symptoms?" 
        : mockResponses[Math.floor(Math.random() * mockResponses.length)];
        
      if (!isIntro) {
         replyText = "[Mock Mode - Set GEMINI_API_KEY in backend/.env to enable real AI] " + replyText;
      }

      return res.json({ reply: replyText });
    }

    const formattedHistory = history ? history.map(h => ({
      role: h.role, // 'user' or 'model'
      parts: [{ text: h.text }]
    })) : [];

    // Using Gemini 2.5 Flash as standard fast model
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            ...formattedHistory,
            { role: 'user', parts: [{ text: message }] }
        ],
        config: {
            systemInstruction: "You are an AI medical symptom checker assistant for OmniGen AI. Your goal is to help patients investigate their problem by asking clarifying questions about their symptoms. Keep responses concise, professional, empathetic. Ask only 1 or 2 clear questions at a time. Remind them you are an AI, not a doctor. Eventually, summarize their likely condition and advise consulting a healthcare professional."
        }
    });

    res.json({ reply: response.text });
  } catch (error) {
    console.error('Chat AI error:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
};

module.exports = {
  chatInteraction
};
