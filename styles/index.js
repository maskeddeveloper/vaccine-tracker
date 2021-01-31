import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    //https://coolors.co/be6e46-cde7b0-a3bfa8-7286a0-59594a
    primary: "#7286A0",
    accent: "#BE6E46",
    dark: "#CDE7B0",
    background: "#FFFFFF"
  }
};

export const GlobalStyles = createGlobalStyle`
  body {
    background:${({ theme }) => theme.colors.background} ;
    color: ${({ theme }) => theme.colors.dark};
    /* color: #CDE7B0; */
    font-family: 'Montserrat', sans-serif;
    font-size:  1rem;
  }
`;
