import styled from "styled-components";
import Menus from "../../ui/Menus";

const ListMoviesWrapper = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`;
export const ListMoviesContent = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0 var(--padding-top-bottom) 0;
  max-width: var(--maxPrimaryPageWidth);
  overflow-x: scroll;
  overflow-y: hidden;
  opacity: 1;

  > div:first-child {
    margin-left: var(--padding-left-right);
  }

  .CardWrapper {
    margin-left: 2rem;
    margin-top: 0;
  }
  &::after {
    transition: linear 0.3s;
    opacity: 1;
    content: "";
    width: 6rem;
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
  .spacer {
    margin-left: 2rem;
    width: 2rem;
    min-width: 2rem;
    height: calc(15rem * 1.5);
    min-height: calc(15rem * 1.5);
  }
`;
export default function ListMovies({ cardVisibility, listMovies, render }) {
  return (
    <Menus>
      <ListMoviesWrapper className="ListMoviesWrapper">
        <ListMoviesContent
          className={`ListMoviesContent scroll ${
            cardVisibility ? "anim-in" : !cardVisibility ? "anim-out" : ""
          }`}
        >
          {listMovies && listMovies?.map(render)}
          <div className="spacer"></div>
        </ListMoviesContent>
      </ListMoviesWrapper>
    </Menus>
  );
}
