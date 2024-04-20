import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getListMoviesAsync, setTabTrending } from "../../redux/homePageSlice";
import Movie from "./Movie";
import Tab from "../../ui/Tab";

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
const ListMoviesWrapper = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`;
const ListMoviesContent = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0 20px 0;
  max-width: 1300px;
  overflow-x: scroll;
  overflow-y: hidden;
  opacity: 1;

  > div:first-child {
    margin-left: 40px;
  }

  .CardWrapper {
    margin-left: 20px;
    margin-top: 0;
  }
  &::after {
    transition: linear 0.3s;
    opacity: 1;
    content: "";
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0,
      #fff 100%
    );
    will-change: opacity;
    pointer-events: none;
  }
`;

const trendingTabs = [
  { id: "day", title: "Today" },
  { id: "week", title: "This Week" },
];

export default function Trending() {
  const dispatch = useDispatch();
  const { listMoviesTrending, tabTrending, cardVisibility } = useSelector(
    (state) => state.homepage
  );

  useEffect(() => {
    dispatch(getListMoviesAsync({ tabTrending: tabTrending }));
  }, [dispatch, tabTrending]);

  function handleOnclickTab(tabName) {
    dispatch(setTabTrending(tabName));
  }

  return (
    <TrendingWrapper className="TrendingWrapper">
      <TrendingContent className="TrendingContent">
        <Tab
          dark="true"
          title="Trending"
          tabs={trendingTabs}
          onTabClick={handleOnclickTab}
          activeTab={tabTrending}
        />
        <ListMoviesWrapper className="ListMoviesWrapper">
          <ListMoviesContent
            className={`ListMoviesContent ${
              cardVisibility && listMoviesTrending[0].original_title
                ? "anim-in"
                : !cardVisibility
                ? "anim-out"
                : ""
            }`}
          >
            {listMoviesTrending.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </ListMoviesContent>
        </ListMoviesWrapper>
      </TrendingContent>
    </TrendingWrapper>
  );
}
