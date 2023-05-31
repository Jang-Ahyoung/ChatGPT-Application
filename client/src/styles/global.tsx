import { Global, css } from '@emotion/react';

const style = css`
  html {
    font-size: 16px;
  }

  body {
    font-family: 'Marcellus';
    transition: 0.25s;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
    font-family: 'Noto Sans KR', sans-serif;
  }

  p {
    margin: 0;
  }

  span {
    font-family: 'Noto Sans KR', sans-serif;
  }

  hr {
    margin: 0;
    border: 0;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
