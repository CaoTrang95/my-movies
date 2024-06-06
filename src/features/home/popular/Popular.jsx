import styled from "styled-components";
import Tab from "../../../ui/Tab";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getListMoviesPopularAsync, setTabPopular } from "./popularSlice";
import ListMovies from "../ListMovies";
import Movie from "../Movie";

const PopularWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const PopularContent = styled.div`
  width: 100%;
  padding: 30px 0;
  max-width: var(--maxPrimaryPageWidth);
  display: flex;
  flex-direction: column;
  .error {
    padding: 20px 40px 20px 40px;
  }
  .error a {
    color: var(--tmbLightBlue);
  }
`;
const whatPopularTabs = [
  { id: "in-theaters", title: "In Theaters" },
  { id: "on-tv", title: "On TV" },
  { id: "streaming", title: "Streaming" },
];
export default function Popular() {
  const dispatch = useDispatch();
  const {
    listMoviesPopular,
    tabPopular,
    cardPopularVisibility,
    isErrorPopular,
  } = useSelector((state) => state.popular);
  const tabIndex = whatPopularTabs.findIndex((tab) => tab.id === tabPopular);

  function handleOnclickTab(newTab) {
    dispatch(setTabPopular(newTab));
  }
  useEffect(() => {
    dispatch(getListMoviesPopularAsync({ tabPopular: tabPopular }));
  }, [dispatch, tabPopular]);

  return (
    <PopularWrapper className="PopularWrapper">
      <PopularContent className="PopularContent">
        <Tab
          dark="true"
          title="What's Popular"
          tabs={whatPopularTabs}
          onTabClick={(id) => handleOnclickTab(id)}
          activeTab={tabPopular}
          tabIndex={tabIndex}
        />
        {isErrorPopular && (
          <p className="error">
            This panel didn't return any results. Try
            <Link to="/">refreshing</Link> it.
          </p>
        )}

        {!isErrorPopular && listMoviesPopular.length > 0 && (
          <ListMovies
            cardVisibility={cardPopularVisibility}
            listMovies={listMoviesPopular}
            render={(movie) => <Movie key={movie.id} movie={movie} />}
          />
        )}
      </PopularContent>
    </PopularWrapper>
  );
}
