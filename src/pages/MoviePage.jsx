import styled from "styled-components";
import ShowMe from "../features/movie/ShowMe";
import Sort from "../features/movie/Sort";
import Filter from "../features/movie/Filter";

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
    background-color: #e3dddd;
    margin-left: 30px;
  }
`;

export default function MoviePage() {
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
          </div>
          <div className="list-movies"></div>
        </div>
      </MoviePageContent>
    </MoviePageWrapper>
  );
}
