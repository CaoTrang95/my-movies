import styled from "styled-components";
import ShowMe from "../features/movie/ShowMe";
import Sort from "../features/movie/Sort";
import Filter from "../features/movie/Filter";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../features/home/Movie";
import { getListMoviesPopularAsync } from "../features/home/popular/popularSlice";
import { useEffect } from "react";
import Menus from "../ui/Menus";

const MoviePageWrapper = styled.div`
  width: 100%;
  margin-top: 64px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;
const MoviePageContent = styled.div`
  width: 100%;
  max-width: var(--max-width);
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
`;

export default function MoviePage() {
  const { listMoviesPopular } = useSelector((state) => state.popular);
  console.log(listMoviesPopular);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListMoviesPopularAsync({ tabPopular: "in-theaters" }));
  }, []);
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
            {/* <Search /> */}
          </div>
          <div className="list-movies">
            <Menus>
              {listMoviesPopular.map((movie) => (
                <Movie key={movie.id} movie={movie} />
              ))}
            </Menus>
          </div>
        </div>
      </MoviePageContent>
    </MoviePageWrapper>
  );
}
