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
  margin-top: 6.4rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;
const MoviePageContent = styled.div`
  width: 100%;
  max-width: var(--maxPrimaryPageWidth);
  padding: var(--padding-top-bottom) var(--padding-left-right);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .title {
    width: 100%;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 1.6em;
    font-weight: 600;
  }
  .content-movie-list {
    width: 100%;
    display: flex;
  }
  .search-infos {
    width: 26rem;
    min-width: 26rem;
    display: flex;
    flex-direction: column;
  }
  ${CardWrapper} {
    margin-top: 3rem;
    padding-bottom: 2rem;
    border-radius: 0.8rem;
    border: 0.1rem solid #e3e3e3;
    overflow: hidden;
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);
    width: calc(
      (
          100vw - 8rem - 26rem -
            (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))
        ) / var(--numberOfDiscoverColumns)
    );
    max-width: calc(
      (
          var(--maxPrimaryPageWidth) - 8rem - 26rem -
            (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))
        ) / var(--numberOfDiscoverColumns)
    );
    h2 {
      font-size: 1.6rem;
      font-weight: 600;
    }
    p {
      font-size: 1.6rem;
      margin: 0;
    }
    .image {
      border: none;
      border-radius: 0;
      box-shadow: none;
    }
    .content-movie-list {
      width: 100%;
      padding-bottom: 1.2rem;
    }
    .wrapper-image {
      width: 100%;
      height: calc(
        (
            100vw - 8rem - 26rem -(var(--discoverColumnPadding) *
                  var(--numberOfDiscoverColumns))
          ) / var(--numberOfDiscoverColumns) * 1.5
      );
      max-height: calc(
        (
            var(--maxPrimaryPageWidth) - 8rem - 26rem -(var(
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
          <div className="content-movie-list">
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
