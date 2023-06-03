import axiosClient from './axios.client';

import type { ChatCompletion, ChatCompletionResponse } from './types';

export const chatCompletion = async ({ prompt }: ChatCompletion) => {
  try {
    const response: ChatCompletionResponse = await axiosClient.post('chats', { prompt });
    return { response };
  } catch (err) {
    console.warn('chatCompletion err 발생!', err);
    return { err };
  }
};
