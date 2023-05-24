import { Configuration, OpenAIApi } from "openai";

const openAIConfig = new Configuration({
  apiKey: process.env.OPENAI_KEY
});

const openAIApi = new OpenAIApi(openAIConfig);

export const chatCompletion = async (req, res) => {
  try {
    const { prompt } = req.body;

    const answer = await openAIApi.createCompletion({
      model: "text-davinci-003", // 사용할 모델의 ID (ex.gpt-3.5-turbo)
      prompt,
      temperature: 0,
      max_tokens: 3000
    });

    const text = answer.data.choices[0].text;

    res.status(200).json({ text });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};
