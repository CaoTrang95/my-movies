import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/source-sans-pro-italic.woff2') format('woff2');
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/source-sans-pro-300.woff2') format('woff2');
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/source-sans-pro-regular.woff2') format('woff2');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/source-sans-pro-italic.woff2') format('woff2');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/source-sans-pro-600.woff2') format('woff2');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/source-sans-pro-600.woff2') format('woff2');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/source-sans-pro-700.woff2') format('woff2');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/source-sans-pro-700.woff2') format('woff2');
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('./fonts/fonts/source-sans-pro-700.woff2') format('woff2');
}

:root{
  & {
  --max-width: 1300px;
  --tmdbDarkBlue:rgba(3, 37, 65, 1);
  }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
@keyframes fadein {
  0%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeout {
  0%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.anim-in {
  animation-name: fadein;
  animation-duration: 2s;
}
.anim-out {
  animation-name: fadeout;
  animation-duration: .5s;
}
.content-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 30px 40px;
    max-width: var(--max-width);
}

a {
    cursor: pointer;
    text-decoration: none;
}

body {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
}
`;

export default GlobalStyles;
