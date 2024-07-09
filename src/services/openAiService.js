import openai from "../config/openaiClient";
import { JS_TEACHER_CONTEXT } from "../const/openAi";

export const makeQuestion = async (question, context = JS_TEACHER_CONTEXT) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: context,
      },
      {
        role: "user",
        content: question,
      },
    ],
  });

  console.log("COMPLETIONS  ", completion.choices[0].message.content);
  return completion.choices[0].message.content;
};
