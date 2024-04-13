import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";
import OscarImage from "../assets/images/oscar.png";

const WelcomeWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  height: calc(100vh / 2.5);
  max-height: 360px;
  display: flex;
  justify-content: center;
`;
const WelcomeContent = styled.section`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  color: #fff;
  max-width: 1400px;
  background-image: image-set(
    url("https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg")
      1x,
    url("https://media.themoviedb.org/t/p/w3840_and_h1200_multi_faces_filter(duotone,00192f,00baff)/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg")
      2x
  );
  display: flex;
  align-items: center;
`;
const Column = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 40px;
  max-width: 1400px;
`;
const Title = styled.div`
  width: 100%;
  margin-bottom: 20px;
  h2 {
    font-size: 3em;
    font-weight: 700;
    line-height: 1;
  }
  h3 {
    font-size: 2em;
    font-weight: 600;
    margin: 0;
  }
`;
const Search = styled.div`
  width: 100%;
  margin-top: 30px;
  position: relative;
  top: 0;
  left: 0;
  input[type="text"] {
    font: inherit;
    width: 100%;
    height: 46px;
    font-size: 1.1em;
    border: 0;
    border-radius: 30px;
    padding: 10px 20px;
  }
  input[type="text"]:focus {
    outline: 0;
  }
  input[type="submit"] {
    font: inherit;
    font-weight: 700;
    height: 46px;
    padding: 10px 26px;
    border: 0;
    background: linear-gradient(
      to right,
      rgba(30, 213, 169, 1) 0%,
      rgba(1, 180, 228, 1) 100%
    );
    border-radius: 30px;
    position: absolute;
    top: 0;
    right: -1px;
    color: #fff;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    color: var(--tmdbDarkBlue);
  }
`;
const OscarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
`;
const Oscar = styled(Column)`
  background-image: linear-gradient(
    to bottom right,
    #221d93 0%,
    #4958ab 30%,
    #91ced8 100%
  );
  color: white;
  img {
    width: 300px;
    color: white;
    filter: brightness(0) invert(1);
    transform: translateX(-40px);
  }
  a {
    text-decoration: none;
    color: white;
  }
  .view-winner {
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 170px;
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 8px 16px;
    transition: linear 0.1s;
    border-radius: 30px;
    cursor: pointer;
  }
`;

export default function Welcome() {
  return (
    <>
      <WelcomeWrapper className="SectionWrapper">
        <WelcomeContent className="WelcomeContent">
          <Column className="Column">
            <Title className="Title">
              <h2>Welcome.</h2>
              <h3>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h3>
            </Title>
            <Search className="Search">
              <form>
                <label>
                  <input
                    type="text"
                    placeholder="Search for a movie, tv show, person......"
                  ></input>
                  <input type="submit" value="Search"></input>
                </label>
              </form>
            </Search>
          </Column>
        </WelcomeContent>
      </WelcomeWrapper>
      <OscarWrapper>
        <Oscar>
          <div>
            <img src={OscarImage} alt="96th Academy Awards" />
          </div>
          <div className="view-winner">
            <Link to="/">View the winner</Link>
            <FaArrowRight />
          </div>
        </Oscar>
      </OscarWrapper>
    </>
  );
}
