import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getListMoviesAsync } from "../../redux/homePageSlice";
import Movie from "./Movie";

const TrendingWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url("https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg");
  background-position: 50% 200px;
  background-size: 1300px;
  background-repeat: no-repeat;
`;
const TrendingContent = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  padding: 30px 0 30px 0;
  flex-direction: column;
`;
const TrendingHeader = styled.div`
  display: flex;
  padding-left: 40px;
  padding-right: 40px;
  h2 {
    margin-right: 20px;
    font-weight: 600;
    font-size: 1.5em;
  }
  .selector {
    display: flex;
    align-items: center;
    border: 1px solid var(--tmdbDarkBlue);
    border-radius: 30px;
    position: relative;
    min-width: 240px;
  }
  .anchor-tab {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 1em;
    padding: 4px 20px;
  }
  .anchor {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .selector h3 a {
    transition: -webkit-text-fill-color 0.5s;
    color: var(--tmdbDarkBlue);
    font-weight: 600;
  }
  .selected h3 a {
    background: linear-gradient(to right, #c0fecf 0, #1ed5a9 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
  .background {
    z-index: -1;
    background: var(--tmdbDarkBlue);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    height: 100%;
    width: calc(50% + 1px);
    transition: 0.5s all ease;
    transform: translateX(-1px);
  }
  .translate-to-left {
    transform: translateX(100%) translateX(-1px);
  }
`;
const ListMoviesWrapper = styled.div`
  width: 100%;
  height: 500px;
`;
const ListMoviesContent = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0 20px 0;
  max-width: 1300px;
  overflow-x: scroll;
  overflow-y: hidden;
  transition: height 0.5s linear;

  > div:first-child {
    margin-left: 40px;
  }

  .CardWrapper {
    margin-left: 20px;
    margin-top: 0;
  }
`;

export default function Trending() {
  const [isToday, setIsToday] = useState(true);
  const dispatch = useDispatch();
  const { listMoviesTrending, isLoadingTrending } = useSelector(
    (state) => state.homepage
  );

  useEffect(() => {
    dispatch(getListMoviesAsync());
  }, []);

  return (
    <TrendingWrapper className="TrendingWrapper">
      <TrendingContent className="TrendingContent">
        <TrendingHeader className="TrendingHeader">
          <h2>Trending</h2>
          <div className="selector">
            <div className={`anchor-tab ${isToday ? "selected" : ""}`}>
              <h3 onClick={() => setIsToday(true)}>
                <Link>Today</Link>
              </h3>
            </div>
            <div className={`anchor-tab ${!isToday ? "selected" : ""}`}>
              <h3 onClick={() => setIsToday(false)}>
                <Link>This week</Link>
              </h3>
            </div>
            <div
              className={`background ${!isToday ? "translate-to-left" : ""}`}
            ></div>
          </div>
        </TrendingHeader>
        <ListMoviesWrapper className="ListMoviesWrapper">
          <ListMoviesContent className="ListMoviesContent">
            {
              // isLoadingTrending &&
              Array(8)
                .fill(0)
                .map((item, index) => (
                  <Movie.Loading key={index}></Movie.Loading>
                ))
            }
            {/* {!isLoadingTrending &&
              listMoviesTrending.map((movie) => (
                <Movie key={movie.id} movie={movie} />
              ))} */}
          </ListMoviesContent>
        </ListMoviesWrapper>
      </TrendingContent>
    </TrendingWrapper>
  );
}
