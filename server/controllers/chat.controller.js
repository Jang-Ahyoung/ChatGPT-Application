import { Configuration, OpenAIApi } from 'openai';

const openAIConfig = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openAIApi = new OpenAIApi(openAIConfig);

export const chatCompletion = async (req, res) => {
  try {
    const { prompt } = req.body;
    const answer = await openAIApi.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: prompt,
    });
    const text = answer.data.choices[0].message.content;

    res.status(200).json({ text });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
