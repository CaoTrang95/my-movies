import styled from "styled-components";
import ShowMe from "../features/movie/ShowMe";
import Sort from "../features/movie/Sort";
import Filter from "../features/movie/Filter";
import { useDispatch, useSelector } from "react-redux";
import Movie, { CardWrapper } from "../features/home/Movie";
import { getListMoviesPopularAsync } from "../features/home/popular/popularSlice";
import { useEffect } from "react";
import Menus from "../ui/Menus";
import Search from "../features/movie/Search";
import { getListMoviesSearch } from "../service/moviesApi";
import { getListMoviesSearchAsync } from "../features/movie/searchSlice";

const MoviePageWrapper = styled.div`
  width: 100%;
  margin-top: 64px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;
const MoviePageContent = styled.div`
  width: 100%;
  max-width: 1400px;
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
  .list-movies {
    flex: 1;
    display: flex;
    column-gap: 20px;
    flex-wrap: wrap;
    margin-left: 30px;
    border-radius: 5px;
    margin-top: -30px;
  }
  .pagination {
    margin-top: 30px;
    width: 100%;
    max-width: 100%;
    height: 50px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(1, 180, 228, 1);
    color: #fff;
    font-size: 1.5em;
    font-weight: 600;
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
  const { listMovies, enableSearch, page } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListMoviesSearchAsync({ page: 1 }));
  }, []);
  function onClickLoadMoreHandler() {
    console.log("Page: ", page);
    dispatch(getListMoviesSearchAsync({ page: page + 1 }));
  }
  return (
    <MoviePageWrapper>
      <MoviePageContent className="MoviePageContent">
        <div className="title">
          <h2>Popular Movies</h2>
        </div>
        <div className="content">
          <div className="search-infos">
            <Sort />
            <Filter />
            <Search $enableSearch={enableSearch} />
          </div>
          <div className="list-movies">
            <Menus>
              {listMovies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
              ))}
            </Menus>
            <div className="pagination" onClick={onClickLoadMoreHandler}>
              Load More
            </div>
          </div>
        </div>
      </MoviePageContent>
    </MoviePageWrapper>
  );
}
