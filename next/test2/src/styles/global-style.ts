import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}


  * {
    box-sizing: border-box;
  }

  html, body { 
    font-size: 1.3rem;
  }

  ul, ol {
  }


`;
