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
  --tmbLightBlue: rgba(1,180,228,1);
  --tmdbLighterGreen: rgba(192,254,207,1);
  --tmdbLightGreen: rgba(30,213,169,1);
  --tmdbLogoOrange: rgba(253,193,112,1);
  --tmdbLogoRed: rgba(217,59,99,1);
  --color-grey-700: #374151;
  --color-grey-0: #fff;
  --color-grey-100: #f3f4f6;
  --color-grey-300: #d1d5db;
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
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
  font-family: Arial, Helvetica, sans-serif;
  /* font-family: 'Source Sans Pro', sans-serif !important; */
  -webkit-font-smoothing: antialiased;
  background-color: var(--tmdbDarkBlue);
  font-size: .9em;
}
body::-webkit-scrollbar,.scroll::-webkit-scrollbar {
  height: 8px;width: 8px;
}
body::-webkit-scrollbar-thumb,.scroll::-webkit-scrollbar-thumb {
  background-color: rgba(219, 219, 219,1);
  border-radius: 20px;
}
.scroll::-webkit-scrollbar-track {
  background: 0 0;
}
body::-webkit-scrollbar-track{
  background: #fff;
}
body.modal-open>:not(.StyledModal) {
  /* backdrop-filter: grayscale(100%) contrast(50%); */
  filter: grayscale(100%);
}
body.modal-open {
  overflow: hidden;
}
.nav-up{
  top: -64px;
}
.form-field{
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.sort-filter-card {
    display: flex;
    padding: 14px 16px;
    justify-content: space-between;
    align-items: center;
  }
`;

export default GlobalStyles;
