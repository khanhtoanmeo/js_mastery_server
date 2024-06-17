import fetch from "node-fetch";
import openai from "../config/openaiClient";
import { makeQuestion } from "../services/openAiService";
import {
  getAnalyzingCodeQuery,
  getAskingChatGptQuery,
  getGeneratingQuestionQuery,
} from "../helpers/openAi";

export const executeCode = async (req, res) => {
  try {
    const {
      body: { codeSnippet },
    } = req;

    console.log("CODE :: ", codeSnippet);

    const requestBody = {
      language: "javascript",
      version: "18.15.0",
      files: [
        {
          name: "my_cool_code.js",
          content: codeSnippet,
        },
      ],
    };

    const resp = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await resp.json();
    console.log("RESP ::: ", data);
    res.json({
      success: true,
      data: data.run.output,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

export const analyzeCode = async (req, res) => {
  try {
    const { question, codeSnippet } = req.body;

    const data = await makeQuestion(
      getAnalyzingCodeQuery(codeSnippet, question)
    );

    console.log("DATA :: ", data);
    res.json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

export const generateQuestion = async (req, res) => {
  try {
    const { topic } = req.body;

    const data = await makeQuestion(getGeneratingQuestionQuery(topic));

    console.log("DATA :: ", data);
    res.json({
      success: true,
      data:
        typeof data === "string" && data.startsWith("Bài tập:")
          ? data.replace("Bài tập:", "")
          : data,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

export const askChatGpt = async (req, res) => {
  try {
    const { query } = req.body;

    const data = await makeQuestion(getAskingChatGptQuery(query));

    const { explanation, examples } = JSON.parse(data);
    console.log("EXP :: ", explanation, examples);
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};
