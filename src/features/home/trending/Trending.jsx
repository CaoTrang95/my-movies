import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getListMoviesTrendingAsync, setTabTrending } from "./trendingSlice";
import Tab from "../../../ui/Tab";
import ListMovies from "../ListMovies";
import Movie from "../Movie";

const TrendingWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url("https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg");
  background-position: 50% 200px;
  background-size: var(--maxPrimaryPageWidth);
  background-repeat: no-repeat;
`;
const TrendingContent = styled.div`
  width: 100%;
  max-width: var(--maxPrimaryPageWidth);
  display: flex;
  padding-top: 30px;
  flex-direction: column;
`;

const trendingTabs = [
  { id: "day", title: "Today" },
  { id: "week", title: "This Week" },
];

export default function Trending() {
  const { tabTrending, cardVisibility, listMoviesTrending } = useSelector(
    (state) => state.trending
  );
  const tabIndex = trendingTabs.findIndex((tab) => tab.id === tabTrending);
  const dispatch = useDispatch();

  useEffect(() => {
    var thunkAction = getListMoviesTrendingAsync({ tabTrending: tabTrending });
    /*
    {
      "type" : "",
      "payload": {
        "tabTrending": tabTrending
      }
    }
    */
    // hey thunk, do your job
    dispatch(thunkAction);
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
