import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getListMoviesTrendingAsync,
  setTabTrending,
} from "../../redux/homePageSlice";
import Tab from "../../ui/Tab";
import ListMovies from "./ListMovies";
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
  padding-top: 30px;
  flex-direction: column;
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
  const tabIndex = trendingTabs.findIndex((tab) => tab.id === tabTrending);
  useEffect(() => {
    dispatch(getListMoviesTrendingAsync({ tabTrending: tabTrending }));
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
          tabIndex={tabIndex}
        />
        <ListMovies
          cardVisibility={cardVisibility}
          listMovies={listMoviesTrending}
          render={(movie) => <Movie key={movie.id} movie={movie} />}
        />
      </TrendingContent>
    </TrendingWrapper>
  );
}
