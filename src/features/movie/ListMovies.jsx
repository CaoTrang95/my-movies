import { useDispatch, useSelector } from "react-redux";
import Menus from "../../ui/Menus";
import Movie from "../home/Movie";
import { getListMoviesSearchAsync } from "./searchSlice";
import styled from "styled-components";
import { useCallback, useRef } from "react";
const StyledListMovies = styled.div`
  flex: 1;
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  margin-left: 30px;
  border-radius: 5px;
  margin-top: -30px;
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
  const { listMovies, page } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const observer = useRef(null);
  const clickedLoadMore = useRef(false);

  const loadMore = useCallback(
    (node) => {
      if (!node) return;
      if (!clickedLoadMore.current) return;
      // if (isLoading || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch(getListMoviesSearchAsync({ page: page + 1 }));
        }
      });
      if (node) observer.current.observe(node);
    },
    [page]
  );
  function onClickLoadMoreHandler() {
    clickedLoadMore.current = true;
    dispatch(getListMoviesSearchAsync({ page: page + 1 }));
  }
  return (
    <StyledListMovies className="list-movies">
      <Menus>
        {listMovies.map((movie) => (
          <Movie
            key={movie.id + movie.backdrop_path + movie.vote_average}
            movie={movie}
          />
        ))}
      </Menus>
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
