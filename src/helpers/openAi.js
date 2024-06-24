export const getAnalyzingCodeQuery = (code, question) => {
  return `Hãy nhìn vào đoạn code dưới đây '${code}' và đây là câu hỏi '${question}',
   Hãy phân tích một cách ngắn gọn điểm sai và điểm tốt ở trong đoạn code, đừng đưa ra đáp án, chỉ cần nêu ra cách cải thiện, 
   Chỉ trả lời bằng format object {good:string, bad:string, improvement: string}
   , trong đó good là những điểm tốt ở trong code, bad là những lỗi sai hoặc điểm chưa tốt trong code, improvement là gợi ý những cách để cải thiện bài code, không có thêm chữ cái nào trong câu trả lời ngoại trừ object đó`;
};

export const getGeneratingQuestionQuery = (topic) => {
  return `Hãy tạo 1 bài tập Javascript thuần theo chủ đề '${topic}'. Chỉ tạo ra bài tập xử lí với ngôn javascript thuần,
   không xử lý DOM, không cần viết gì thêm trong câu trả lời của bạn. Không cần đưa gợi ý, chỉ tạo duy nhất 1 bài tập.`;
};

export const getAskingChatGptQuery = (query) => {
  return `Hãy phân tích chủ đề '${query}' thật sâu và đưa ra code ví dụ minh họa nếu có. Chỉ trả lời bằng format object '{explanation:string, examples:array}',examples là array có các string là các đoạn code ví dụ tương tự như này ' examples: [
        "let date = new Date();\nconsole.log(date.getDate());",
        "date.setFullYear(2025);\nconsole.log(date);",
      ]', không viết comment trong ví dụ , không có thêm chữ cái nào trong câu trả lời ngoại trừ object đó`;
};
