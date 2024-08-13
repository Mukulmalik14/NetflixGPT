import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./constants";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";


const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];


const genAI = new GoogleGenerativeAI(GEMINI_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"},safetySettings);
