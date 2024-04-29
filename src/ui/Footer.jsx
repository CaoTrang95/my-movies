import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--tmdbDarkBlue);
  color: #fff;
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 80px 0;
  }
  nav div {
    margin-right: 40px;
  }
  .join {
    /* width: 146px; */
    position: relative;
    top: -32px;
    right: 0;
    margin-right: 40px;
  }
  img {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 130px;
    height: 94px;
  }
  a {
    display: inline-block;
    position: relative;
    top: 140px;
    background-color: #fff;
    border-color: #fff;
    color: var(--tmbLightBlue);
    font-size: 1.3em;
    font-weight: 700;
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 8px 16px;
  }
  h3 {
    text-transform: uppercase;
    font-size: 1.3em;
    line-height: 1.4em;
    white-space: nowrap;
  }
  ul {
    list-style-type: none;
  }
  li {
    line-height: 1.6em;
    font-size: 1.1em;
    max-width: 260px;
    white-space: nowrap;
  }
`;
export default function Footer() {
  return (
    <Wrapper>
      <nav>
        <div className="join">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="logo"
          ></img>
          <Link>Hi CaoTrang!</Link>
        </div>
        <div>
          <h3>The basics</h3>
          <ul>
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li> API</li>
            <li>System Status</li>
          </ul>
        </div>
        <div>
          <h3>GET INVOLVED</h3>
          <ul>
            <li>Contribution Bibble</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
        </div>
        <div>
          <h3>Community</h3>
          <ul>
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li>Terms of Use</li>
            <li>API Term of Use</li>
            <li>Privacy Policy</li>
            <li>DMCA Policy</li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
}
