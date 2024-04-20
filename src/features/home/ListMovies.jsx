import styled from "styled-components";
import Movie from "./Movie";

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
export default function ListMovies({ cardVisibility, listMovies }) {
  return (
    <ListMoviesWrapper className="ListMoviesWrapper">
      <ListMoviesContent
        className={`ListMoviesContent ${
          cardVisibility && listMovies[0].original_title
            ? "anim-in"
            : !cardVisibility
            ? "anim-out"
            : ""
        }`}
      >
        {listMovies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ListMoviesContent>
    </ListMoviesWrapper>
  );
}
