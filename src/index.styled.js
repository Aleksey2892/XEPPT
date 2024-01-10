import styled, { createGlobalStyle } from "styled-components";
import "reset-css";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-first-color: #F5CC82;
    --primary-secondary-color: #FDF1DC;
    --primary-third-color: #FFF8EC;
    --secondary-color: #353535
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

export const AddPlusButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 30px;
  border-radius: 50%;
  color: var(--primary-first-color);
  background-color: var(--secondary-color);
`;
