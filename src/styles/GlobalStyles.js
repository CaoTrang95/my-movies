import * as styled from "styled-components";
import { NavWrapper } from "../ui/Header";
import { FooterWrapper } from "../ui/Footer";
import { WrapperLeaderBoard } from "../features/home/leaderboard/LeaderBoardItem";
import { TabHeader } from "../ui/Tab";
import { CardWrapper } from "../features/home/Movie";
import {
  MovieInfoContent,
  MovieInfoWrapper,
} from "../features/detail-movie/DetailInfoMovie";
import { Content, MediaMenu } from "../features/detail-movie/Media";
import { TopBilledCastWrapper } from "../features/detail-movie/TopBilledCast";
import { MenuMovie, OtherContentWrapper } from "../pages/DetailMovie";
import { RightColumnInfoStyled } from "../features/detail-movie/RightColumnInfo";
import { StyledListMovies } from "../features/movie/ListMovies";
import { Review, SocialMenu } from "../features/detail-movie/Review";
const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url("/fonts/source-sans-pro-italic.woff2") format("woff2");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url("/fonts/source-sans-pro-300.woff2") format("woff2");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/source-sans-pro-regular.woff2") format("woff2");
  }
  @font-face {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/source-sans-pro-italic.woff2") format("woff2");
  }
  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url("/fonts/source-sans-pro-600.woff2") format("woff2");
  }
  @font-face {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url("/fonts/source-sans-pro-600.woff2") format("woff2");
  }
  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/source-sans-pro-700.woff2") format("woff2");
  }
  @font-face {
    font-family: "Source Sans Pro";
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/source-sans-pro-700.woff2") format("woff2");
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("./fonts/fonts/source-sans-pro-700.woff2") format("woff2");
  }

  html {
    font-size: 62.5%;
    --numberOfDiscoverColumns: 5;
    --stroke-dasharray: 175px;
    --discoverColumnPadding: 3rem;
    --maxPrimaryPageWidth: 1400px;
    --primaryColor: rgba(10.5, 31.5, 31.5, 1);
    --padding-top-bottom: 3rem;
    --padding-left-right: 4rem;
    --height-nav-bar: 5rem;
    overflow-x: hidden;
  }
  ${NavWrapper} .header-nav-bar-small {
    display: none;
  }
  .NavItem {
    display: flex;
  }
  /* BELOW 1344px (Smaller desktops) */
  @media only screen and (max-width: 84em) {
    html {
      --maxPrimaryPageWidth: 130rem;
      --numberOfDiscoverColumns: 4;
    }
  }
  @media only screen and (max-width: 67em) {
    html {
      ${MediaMenu} {
        a,
        li {
          font-size: 1.4rem;
        }
      }
    }
  }
  //BELOW 864px
  @media only screen and (max-width: 54em) {
    html {
      font-size: 56.25%;
      --numberOfDiscoverColumns: 3;
      --stroke-dasharray: 135px;
    }
    ${NavWrapper} {
      font-size: 1.2rem;
    }
    ${FooterWrapper} nav {
      justify-content: space-between;
      padding: 8rem 2rem;
      .join,
      div {
        margin-right: 2rem;
      }
    }
    ${MovieInfoContent} {
      .outer-ring {
        width: 6rem;
        height: 6rem;
        padding: 0.2rem;
        circle {
          cx: 2.8rem;
          cy: 2.8rem;
          r: 2.4rem;
        }
        .number h3 {
          font-size: 1.2rem;
        }
      }
    }
  }
  //BELOW 704px
  @media only screen and (max-width: 44em) {
    html {
      font-size: 54%;
      --stroke-dasharray: 108px;
      --numberOfDiscoverColumns: 2;
      --padding-top-bottom: 2rem;
      --padding-left-right: 2rem;
      --height-nav-bar: 4.4rem;
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
      padding: 3rem 2rem 6rem;
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
    ${TabHeader} {
      flex-direction: column;
      gap: 1.2rem;
    }
    .content-movie-list {
      flex-direction: column;
      gap: 3.2rem;
    }
    .search-infos {
      width: 100% !important;
      .from-date {
        gap: 6rem;
        #from-date {
          flex: 1;
        }
      }
      .from-date {
        gap: 6rem;
        #to-date {
          flex: 1;
        }
      }
    }
    .list-movies {
      flex-direction: column;
      margin-left: 0;
      ${CardWrapper} {
        width: 100%;
        max-width: 100%;
        padding-bottom: 0;
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
        .wrapper-image {
          width: 9.4rem;
          height: 14rem;
          min-height: 14rem;
        }
        .content {
          flex: 1;
          padding: 2.6rem 1.4rem 1.2rem;
          .overview-content {
            display: -webkit-box;
          }
        }
        h2 {
          font-size: 1.4rem;
        }
        p {
          font-size: 1.3rem;
        }
      }
    }
    ${MovieInfoContent} {
      flex-direction: column;
      gap: 5rem;
      .poster-wrapper {
        width: calc(((100vw / 2.222222) - 40px) / 1.5);
        min-width: calc(((100vw / 2.222222) - 40px) / 1.5);
        height: calc((100vw / 2.222222) - 40px);
        min-height: calc((100vw / 2.222222) - 40px);
      }
      .poster {
        width: 100%;
        height: 100%;
      }
      .outer-ring {
        width: 5rem;
        height: 5rem;
        padding: 0.2rem;
        circle {
          cx: 2.3rem;
          cy: 2.3rem;
          r: 2rem;
        }
        .number h3 {
          font-size: 1.2rem;
        }
      }
      .poster-info {
        padding-left: 0;
        .fact {
          justify-content: center;
        }
        .ring-line {
          justify-content: center;
          gap: 1.6rem;
        }
        .break-line {
          display: none;
        }
        .pipe {
          width: 1px;
          height: 24px;
          display: inline-block;
          border-left: 1px solid rgba(255, 255, 255, 0.3);
          margin-top: 4px;
          margin-left: 6rem;
          margin-right: 6rem;
        }
        .actions {
          position: fixed;
          z-index: 10000;
          bottom: 0;
          left: 0;
          background-color: rgba(3, 37, 65, 0.8);
          width: 100vw;
          display: flex;
          justify-content: space-around;
          backdrop-filter: blur(20px);
          ul {
            margin: 0;
            width: 100%;
          }
          li {
            background-color: transparent;
            width: 25%;
          }
          .icon-star {
            display: flex;
          }
          .play {
            display: none;
          }
        }
        .tagline {
          font-size: 1.4rem;
          margin-top: 2rem;
        }
        h3 {
          font-size: 1.8rem;
        }
        .overview {
          font-size: 1.4rem;
          line-height: 2rem;
          letter-spacing: 0.4px;
        }
      }
      .crew-item .crew-name {
        font-size: 1.4rem;
      }
    }
    ${MovieInfoWrapper} {
      .background-image {
        background-position: calc((((100vw / 2.222222) - 20px) / 1.5) / 2) 0;
        background-size: 100% calc((100vw / 2.222222));
        position: relative;
        background-color: rgb(32, 32, 32);
      }
      .custom_bg {
        background-image: linear-gradient(
          to right,
          rgba(31.5, 31.5, 31.5, 1) 20%,
          rgba(31.5, 31.5, 31.5, 0) 50%
        );
        h2 {
          font-size: calc(0.5em + 3vw);
          text-align: center;
        }
      }
    }
    ${TopBilledCastWrapper} {
      width: 100%;
      padding-right: 0;
    }
    ${OtherContentWrapper} {
      .detail-movie {
        display: flex;
        flex-direction: column;
      }
    }
    ${RightColumnInfoStyled} {
      margin-top: 4rem;
    }
    ${StyledListMovies} {
      margin-left: 0;
      .list-movies {
        flex-direction: column;
        ${CardWrapper} {
          width: 100%;
          max-width: 100%;
          padding-bottom: 0;
          margin-top: 2rem;
          display: flex;
          flex-direction: row;
          .wrapper-image {
            width: 12rem;
            height: 18rem;
            min-height: 18rem;
          }
          .content {
            flex: 1;
            padding: 2.6rem 1.4rem 1.2rem;
            .overview-content {
              display: -webkit-box;
              font-size: 1.6rem;
              letter-spacing: 0.2px;
            }
          }
          h2 {
            font-size: 1.8rem;
          }
          p {
            font-size: 1.6rem;
          }
        }
      }
    }
    ${Content} {
      .backdrop,
      .video {
        width: 30rem;
        min-width: 30rem;
        height: 20rem;
        min-height: 20rem;
      }
      .poster {
        min-width: 14rem;
        width: 14rem;
        min-height: 20rem;
        height: 20rem;
      }
    }
    ${Review} {
      .content p {
        letter-spacing: 0.3px;
        font-size: 1.4rem;
      }
    }
  }
  //BELOW 560px
  @media only screen and (max-width: 35em) {
    html {
      font-size: 50%;
    }
  }
  //BELOW 464px
  @media only screen and (max-width: 29em) {
    ${MenuMovie} {
      ul {
        gap: 2rem;
      }
    }
    ${MediaMenu} {
      ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row-reverse;
        column-gap: 1.4rem;
        row-gap: 0.6rem;
      }
    }
    ${MovieInfoContent} {
      .poster-info {
        .pipe {
          margin-left: 1rem;
          margin-right: 1rem;
        }
        .ring-line {
          gap: 0.6rem;
        }
      }
      .vibes {
        margin-left: 0;
      }
    }
    ${SocialMenu} {
      justify-content: space-between;
      .social-reviews {
        flex-direction: row-reverse;
      }
    }
  }
  //BELOW 384px
  @media only screen and (max-width: 24em) {
    ${MovieInfoContent} {
      .poster-info .pipe {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
  :root {
    & {
      --tmdbDarkBlue: rgba(3, 37, 65, 1);
      --tmbLightBlue: rgba(1, 180, 228, 1);
      --tmdbLighterGreen: rgba(192, 254, 207, 1);
      --tmdbLightGreen: rgba(30, 213, 169, 1);
      --tmdbLogoOrange: rgba(253, 193, 112, 1);
      --tmdbLogoRed: rgba(217, 59, 99, 1);
      --color-grey-700: #374151;
      --lightGrey: rgba(227, 227, 227, 1);
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
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    0% {
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
    animation-duration: 0.5s;
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
    padding: 0.8rem 1.2rem;
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
    border-width: 0.6rem;
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
  body::-webkit-scrollbar,
  .scroll::-webkit-scrollbar {
    height: 0.8rem;
    width: 0.8rem;
  }
  body::-webkit-scrollbar-thumb,
  .scroll::-webkit-scrollbar-thumb {
    background-color: rgba(219, 219, 219, 1);
    border-radius: 2rem;
  }
  .scroll::-webkit-scrollbar-track {
    background: 0 0;
  }
  body::-webkit-scrollbar-track {
    background: #fff;
  }
  body.modal-open > :not(.StyledModal) {
    /* backdrop-filter: grayscale(100%) contrast(50%); */
    filter: grayscale(100%);
  }
  body.modal-open {
    overflow: hidden;
  }
  .nav-up {
    top: -6.4rem;
  }
  .form-field {
    width: 100%;
    border-radius: 0.8rem;
    border: 0.1rem solid #e3e3e3;
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);
  }
  .sort-filter-card {
    display: flex;
    padding: 1.4rem 1.6rem;
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
