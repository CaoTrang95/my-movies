import styled from "styled-components";
import Sort from "../features/movie/Sort";
import Filter from "../features/movie/Filter";
import { useDispatch } from "react-redux";
import { CardWrapper } from "../features/home/Movie";
import { useEffect } from "react";
import Search from "../features/movie/Search";
import { getListMoviesSearchAsync } from "../features/movie/searchSlice";
import { ListMovies } from "../features/movie/ListMovies";
import LoadingBarProgress from "../ui/progress-bar/LoadingBarProgress";
import { setProgressBar } from "../ui/progress-bar/progressBarSlice";

const MoviePageWrapper = styled.div`
  width: 100%;
  margin-top: 64px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;
const MoviePageContent = styled.div`
  width: 100%;
  max-width: var(--maxPrimaryPageWidth);
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .title {
    width: 100%;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 1.6em;
    font-weight: 600;
  }
  .content {
    width: 100%;
    display: flex;
  }
  .search-infos {
    width: 260px;
    min-width: 260px;
    height: 1380px;
    display: flex;
    flex-direction: column;
  }
  ${CardWrapper} {
    margin-top: 30px;
    border-radius: 8px;
    border: 1px solid #e3e3e3;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: calc(
      (
          100vw - 80px - 260px -
            (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))
        ) / var(--numberOfDiscoverColumns)
    );
    max-width: calc(
      (
          var(--maxPrimaryPageWidth) - 80px - 260px -
            (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))
        ) / var(--numberOfDiscoverColumns)
    );
    h2 {
      font-size: 1em;
      font-weight: 600;
    }
    p {
      font-size: 1em;
      margin: 0;
    }
    .image {
      border: none;
      border-radius: 0;
      box-shadow: none;
    }
    .content {
      width: 100%;
      padding-bottom: 12px;
    }
    .wrapper-image {
      width: 100%;
      height: calc(
        (
            100vw - 80px - 260px -(var(--discoverColumnPadding) *
                  var(--numberOfDiscoverColumns))
          ) / var(--numberOfDiscoverColumns) * 1.5
      );
      max-height: calc(
        (
            var(--maxPrimaryPageWidth) - 80px - 260px -(var(
                    --discoverColumnPadding
                  ) * var(--numberOfDiscoverColumns))
          ) / var(--numberOfDiscoverColumns) * 1.5
      );
    }
  }
`;

export default function MoviePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListMoviesSearchAsync({ page: 1 }));
  }, []);

  return (
    <>
      <LoadingBarProgress
        color="#01b4e4"
        height={4}
        onLoadFinished={() => setProgressBar(0)}
      />
      <MoviePageWrapper>
        <MoviePageContent className="MoviePageContent">
          <div className="title">
            <h2>Popular Movies</h2>
          </div>
          <div className="content">
            <div className="search-infos">
              <Sort />
              <Filter />
              <Search />
            </div>
            <ListMovies />
          </div>
        </MoviePageContent>
      </MoviePageWrapper>
    </>
  );
}
