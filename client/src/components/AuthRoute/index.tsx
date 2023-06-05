import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import S from './AuthRoute.styled';
import { Loader } from '@components';
import { userCheckToken } from '@api/user.api';

import type { FC } from 'react';
import type { AuthRouteProps } from './types';

const AuthRoute: FC<AuthRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const checkToken = async () => {
    setIsLoading(true);
    const { response, err } = await userCheckToken();

    if (err) {
      localStorage.removeItem('tkn');
      setIsLoading(false);
    }

    if (response) navigate('/');
  };

  useEffect(() => {
    checkToken();

    const token = localStorage.getItem('tkn');
    if (token) checkToken();
    else setIsLoading(false);
  }, [navigate]);

  if (isLoading) return <Loader />;
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default AuthRoute;
