import { useDispatch, useSelector } from "react-redux";
import Menus from "../../ui/Menus";
import Movie from "../home/Movie";
import { getListMoviesSearchAsync, setClickedLoadMore } from "./searchSlice";
import styled from "styled-components";
import { useCallback, useRef } from "react";
import Spinner from "../../ui/Spinner";
const StyledListMovies = styled.div`
  flex: 1;
  display: flex;
  margin-left: 30px;
  margin-top: -30px;
  flex-direction: column;
  .list-movies {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
  }
  .loading-movies-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading-movies-container-full {
    height: calc(100vh - 100px);
  }
  .loading-movies-container-mini {
    margin-top: 20px;
    height: 48px;
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
`;

export function ListMovies() {
  const isLoading = useSelector((state) => state.search.isLoading);
  const listMovies = useSelector((state) => state.search.listMovies);
  const page = useSelector((state) => state.search.page);
  const clickedLoadMore = useSelector((state) => state.search.clickedLoadMore);
  const dispatch = useDispatch();
  const observer = useRef(null);

  const loadMore = useCallback(
    (node) => {
      if (!node) return;
      if (clickedLoadMore === false) {
        if (observer.current) observer.current.disconnect();
        return;
      }
      // if (isLoading || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch(getListMoviesSearchAsync({ page: page + 1 }));
        }
      });
      if (node) observer.current.observe(node);
    },
    [page, clickedLoadMore]
  );
  function onClickLoadMoreHandler() {
    dispatch(setClickedLoadMore(true));
    dispatch(getListMoviesSearchAsync({ page: page + 1 }));
  }
  return (
    <StyledListMovies className="list-movies">
      <Menus>
        <div className="list-movies">
          {listMovies?.map((movie, index) => (
            <Movie
              key={movie.id + movie.title + movie.poster_path + index}
              movie={movie}
            />
          ))}
        </div>
      </Menus>
      {isLoading && (
        <div
          className={`loading-movies-container ${
            listMovies.length === 0
              ? "loading-movies-container-full"
              : "loading-movies-container-mini"
          }`}
        >
          <Spinner size={listMovies.length === 0 ? 48 : 36} />
        </div>
      )}
      <div
        className="pagination"
        onClick={onClickLoadMoreHandler}
        ref={loadMore}
      >
        Load More
      </div>
    </StyledListMovies>
  );
}
