import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

const WelcomeWrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  height: calc(100vh / 2.5);
  max-height: 36rem;
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
  max-width: var(--maxPrimaryPageWidth);
  background-image: image-set(
    url("https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg")
      1x,
    url("https://media.themoviedb.org/t/p/w3840_and_h1200_multi_faces_filter(duotone,00192f,00baff)/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg")
      2x
  );
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  h2 {
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 1;
  }
  h3 {
    font-size: 3.2rem;
    font-weight: 600;
    margin: 0;
  }
`;
const Search = styled.div`
  width: 100%;
  margin-top: 3rem;
  position: relative;
  top: 0;
  left: 0;
  input[type="text"] {
    font: inherit;
    width: 100%;
    height: 4.6rem;
    font-size: 1.8rem;
    border: 0;
    border-radius: 3rem;
    padding: 1rem 2rem;
  }
  input[type="text"]:focus {
    outline: 0;
  }
  input[type="submit"] {
    font: inherit;
    font-weight: 700;
    height: 4.6rem;
    padding: 1rem 2.6rem;
    border: 0;
    background: linear-gradient(
      to right,
      rgba(30, 213, 169, 1) 0%,
      rgba(1, 180, 228, 1) 100%
    );
    border-radius: 3rem;
    position: absolute;
    top: 0;
    right: -0.1rem;
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
const Oscar = styled.div`
  background-image: linear-gradient(
    to bottom right,
    #221d93 0%,
    #4958ab 30%,
    #91ced8 100%
  );
  color: white;
  img {
    width: 30rem;
    color: white;
    filter: brightness(0) invert(1);
  }
  a {
    color: white;
  }
  .view-winner {
    font-weight: 600;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 17.4rem;
    border: 0.2rem solid #fff;
    border-radius: 0.5rem;
    padding: 0.8rem 1.6rem;
    transition: linear 0.1s;
    border-radius: 3rem;
    cursor: pointer;
  }
`;

export default function Welcome() {
  return (
    <>
      <WelcomeWrapper className="SectionWrapper">
        <WelcomeContent className="WelcomeContent content-wrapper">
          <Title className="Title">
            <h2>Welcome.</h2>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
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
        </WelcomeContent>
      </WelcomeWrapper>
      <OscarWrapper className="OscarWrapper">
        <Oscar className="Oscar content-wrapper">
          <div>
            <img
              src="https://www.themoviedb.org/assets/2/awards-preview/oscars-2024-title-f69161f90ed90871e9fe79439ea7e9280e03f3cb896b8d35d5d37b6711d00913.svg"
              alt="96th Academy Awards"
            />
          </div>
          <div className="view-winner">
            <Link to="/">View the winners</Link>
            <FaArrowRight />
          </div>
        </Oscar>
      </OscarWrapper>
    </>
  );
}
