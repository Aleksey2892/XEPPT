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
  
  
  /* Global Animations */
  @keyframes slideFromLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideFromRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes lineX {
    0% {
      width: 10px;
      transform: translateX(0);
      opacity: 0.07;
    }

    25% {
      width: 4px;
      opacity: 0.3;
    }

    50% {
      width: 2px;
      transform: translateX(350px);
      opacity: 0.5;
    }

    75% {
      width: 4px;
      opacity: 0.3;
    }

    100% {
      width: 10px;
      transform: translateX(0);
      opacity: 0.07;
    }
  }

  @keyframes lineY {
    0% {
      height: 10px;
      transform: translateY(0);
      opacity: 0.07;
    }

    25% {
      height: 4px;
      opacity: 0.3;
    }

    50% {
      height: 2px;
      transform: translateY(500px);
      opacity: 0.5;
    }

    75% {
      height: 4px;
      opacity: 0.3;
    }

    100% {
      height: 10px;
      transform: translateY(0);
      opacity: 0.07;
    }
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
