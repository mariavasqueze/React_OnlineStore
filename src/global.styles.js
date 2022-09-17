import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Montserrat', sans-serif;
  padding: 20px 40px;

  @media screen and (max-width: 800px) {
    padding: 10px;
    margin-left: auto;
margin-right: auto;
    
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;
