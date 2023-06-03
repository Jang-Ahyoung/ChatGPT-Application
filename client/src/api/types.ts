import type { Message } from '@pages';

/* chat.api.ts */
export type ChatCompletion = {
  prompt: Message[];
};

export type ChatCompletionResponse = {
  text: string;
};

/* user.api.ts */
export type UserSignUp = {
  username: string;
  password: string;
};

export type UserSignIn = UserSignUp;

export type SignInResponse = {
  id: string;
  token: string;
  username: string;
};
