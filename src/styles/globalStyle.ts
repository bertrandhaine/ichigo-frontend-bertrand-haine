import { createGlobalStyle } from "styled-components";

// we could always create App.css at the root of the folder, but we are using styled-components
// so we uses their recommended way to create a global style
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
  } 
`;
