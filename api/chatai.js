import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: '<Put your own api key here>',
});

export async function generateChatResponse(userMessage) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: userMessage }],
    });

    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Error calling OpenAI API:", error.message);
    throw error;
  }
}

