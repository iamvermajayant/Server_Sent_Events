import OpenAI from "openai";
import dotenv from "dotenv"

dotenv.config();

const client = new OpenAI({
  organization: "Personal",
  apiKey: process.env.OPEN_AI_API,
});

const systemMessage = {
  role: "system",
  content:
    "You are a Askbot. You are supposed to answer the questions asked by the users. Validate the prompts to be a question and it should not in approprite. Give funky responses",
};

export const getStreamingCompletion = async ({ userPrompt }) => {
  return client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [systemMessage, { role: "user", content: userPrompt }],
    stream: true,
  });
};
