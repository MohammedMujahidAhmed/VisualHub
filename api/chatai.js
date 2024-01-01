import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: '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',
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

