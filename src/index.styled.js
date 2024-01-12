import styled, { createGlobalStyle } from "styled-components";
import "reset-css";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-first-color: #F5CC82;
    --primary-second-color: #db9e2f;
    --secondary-first-color: #FDF1DC;
    --secondary-second-color: #FFF8EC;
    --secondary-dark: #353535
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--primary-white);
    color: #151621;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  button {
    padding: 0;
    cursor: pointer;
    border: none;
    background: transparent;
  }
`;

export const CircleButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 30px;
  line-height: 0;
  border-radius: 50%;
  color: var(--primary-first-color);
  background-color: var(--secondary-dark);
  transition: all 0.25s;

  &:hover {
    background-color: var(--secondary-first-color);
    transition: all 0.25s;
  }
`;
