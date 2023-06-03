import axiosClient from './axios.client';

import type { UserSignUp, UserSignIn, SignInResponse } from './types';

export const userSignUp = async ({ username, password }: UserSignUp) => {
  try {
    const response = await axiosClient.post('users/signup', { username, password });
    return { response };
  } catch (err) {
    return { err };
  }
};

export const userSignIn = async ({ username, password }: UserSignIn) => {
  try {
    const response: SignInResponse = await axiosClient.post('users/signin', { username, password });

    return { response };
  } catch (err) {
    return { err };
  }
};

export const userCheckToken = async () => {
  try {
    const response = await axiosClient.get('users/check-token');

    return { response };
  } catch (err) {
    return { err };
  }
};
