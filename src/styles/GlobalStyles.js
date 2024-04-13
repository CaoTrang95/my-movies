import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
:root{
   & {
   --tmdbDarkBlue:rgba(3, 37, 65, 1);
   }
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
}
`;
export default GlobalStyles;
