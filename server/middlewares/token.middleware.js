import jwt from 'jsonwebtoken'; // ES Module

import User from '../models/user.model.js';
import { setResponseMessage } from '../utils/setResponseMessage.js';

const tokenDecode = (req) => {
  try {
    const bearer = req.headers['authorization'];

    if (bearer) {
      const token = bearer.split(' ')[1];

      return jwt.verify(token, process.env.TOKEN_SECRET); // 검증 함수에 문자열 토큰과 키값 전달
    }

    return false;
  } catch {
    return false;
  }
};

export const tokenAuth = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req);

  if (!tokenDecoded) {
    return setResponseMessage(res, 401, 'Token invalid');
  }

  const user = await User.findById(tokenDecoded.data);

  if (!user) {
    return setResponseMessage(res, 401, 'Token invalid');
  }

  req.user = user;

  next();
};
