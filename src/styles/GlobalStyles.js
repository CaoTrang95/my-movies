import { createGlobalStyle } from "styled-components";
import { NavWrapper } from "../ui/Header";
import Footer, { FooterWrapper } from "../ui/Footer";
import { WrapperLeaderBoard } from "../features/home/leaderboard/LeaderBoardItem";
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

html {
  --numberOfDiscoverColumns: 1;
  --discoverColumnPadding: 3rem;
  --maxPrimaryPageWidth: 1400px;
  --primaryColor: rgba(10.5, 31.5, 31.5, 1);
  --padding-top-bottom: 3rem;
  --padding-left-right: 4rem;
  --height-nav-bar: 5rem;
  overflow-x: hidden;
  font-size: 62.5%;
}
${NavWrapper} .header-nav-bar-small {
    display: none;
  }
.NavItem{
  display: flex;
}

@media only screen and (max-width: 87em) {
  html {
      --maxPrimaryPageWidth: 130rem
  }
}

@media only screen and (max-width: 44em) {
    html {
      --numberOfDiscoverColumns:2;
      --padding-top-bottom: 2rem;
      --padding-left-right: 2rem;
      --height-nav-bar: 4.4rem
    }
    ${NavWrapper} .header-nav-bar-small {
      display: flex;
    }

    .NavItem {
      display: none;
    }

    ${FooterWrapper} nav {
      flex-direction: column;
      row-gap: 3rem;
      padding: 2rem;
      .join img {
        display: none;
      }
      .join {
        top: 0;
      }
      .join a {
        top: 0;
        color: #235ea7;
      }
    }
    ${WrapperLeaderBoard} {
      width: 100%;
    }
}

@media only screen and (min-width: 900px) {
    html {
        --numberOfDiscoverColumns:3
    }
}

@media only screen and (min-width: 104rem) {
    html {
        --numberOfDiscoverColumns:4
    }
}

@media only screen and (min-width: 124rem) {
    html {
        --numberOfDiscoverColumns:5
    }
}

:root{
  & {
  --tmdbDarkBlue:rgba(3, 37, 65, 1);
  --tmbLightBlue: rgba(1,180,228,1);
  --tmdbLighterGreen: rgba(192,254,207,1);
  --tmdbLightGreen: rgba(30,213,169,1);
  --tmdbLogoOrange: rgba(253,193,112,1);
  --tmdbLogoRed: rgba(217,59,99,1);
  --color-grey-700: #374151;
  --lightGrey: rgba(227,227,227,1);
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
    padding: var(--padding-top-bottom) var(--padding-left-right);
    max-width: var(--maxPrimaryPageWidth);
}
.tooltip {
  position: relative;
}
.tooltiptext {
  visibility: hidden;
  text-align: center;
  white-space: nowrap;
  background-color: rgba(3, 37, 65, 1);
  color: #fff;
  border-radius: 0.3rem;
  padding:0.8rem1.2rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.tooltiptext.bottom {
  top: 150%;
}
.tooltiptext.top {
  bottom: 70%;
}
.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  left: 50%;
  margin-left: -6px;
  border-width:0.6rem;
  border-style: solid;
}
.tooltip .tooltiptext.bottom::after {
  bottom: 100%; /* At the bottom of the tooltip */
  border-color: transparent transparent rgba(3, 37, 65, 1) transparent;
}
.tooltip .tooltiptext.top::after {
  top: 100%; /* At the top of the tooltip */
  border-color: rgba(3, 37, 65, 1) transparent transparent transparent;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
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
  font-size: 1.4rem;
  overflow-x: hidden;
}
body::-webkit-scrollbar,.scroll::-webkit-scrollbar {
  height:0.8rem;width:0.8rem;
}
body::-webkit-scrollbar-thumb,.scroll::-webkit-scrollbar-thumb {
  background-color: rgba(219, 219, 219,1);
  border-radius: 2rem;
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
  top: -6.4rem;
}
.form-field{
  width: 100%;
  border-radius:0.8rem;
  border: 0.1rem solid #e3e3e3;
  box-shadow: 0 0.2rem0.8rem rgba(0, 0, 0, 0.1);
}
.sort-filter-card {
    display: flex;
    padding:1.4rem1.6rem;
    justify-content: space-between;
    align-items: center;
  }
.dot-text {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;

export default GlobalStyles;
