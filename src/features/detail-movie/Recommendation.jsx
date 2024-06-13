import { useSelector } from "react-redux";
import styled from "styled-components";
const StyledRecommend = styled.div`
  width: 100%;
  border-top: 0.1rem solid #d7d7d7;
  margin-top: 3rem;
  padding-top: 2rem;
  .list-recommend {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    gap: 2rem;
    padding-bottom: 1.4rem;
  }
  .recomend-wrapper {
    width: 25rem;
    min-width: 25rem;
    height: 14rem;
    min-height: 14rem;
    border-radius: 0.8rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 0.6rem;
  }
  .recommend:hover {
  }
`;
export default function Recommendation() {
  const recommendations = useSelector(
    (state) => state.detailMovie.recommendations
  );
  const movieName = useSelector((state) => state.detailMovie.movie.title);
  return (
    <StyledRecommend>
      <h3>Recommendations</h3>
      <div className="list-recommend scroll">
        {recommendations &&
          recommendations.map((item) => (
            <div className="recommend" key={item.id}>
              <div className="recomend-wrapper">
                <img
                  loading="lazy"
                  src={`https://media.themoviedb.org/t/p/w250_and_h141_face${item.backdrop_path}`}
                  srcSet={`https://media.themoviedb.org/t/p/w250_and_h141_face${item.backdrop_path} 1x, 
                 https://media.themoviedb.org/t/p/w500_and_h282_face${item.backdrop_path} 2x`}
                  alt={item.title}
                ></img>
              </div>
              <div className="info">
                <span>{item.title}</span>
                <span>
                  {item.vote_average * 10 !== 0
                    ? Math.ceil(item.vote_average * 10) + "%"
                    : "NR"}
                </span>
              </div>
            </div>
          ))}
      </div>
      {recommendations.length === 0 && (
        <p>
          We don't have enough data to suggest any movies based on
          <span> {movieName}</span>. You can help by rating movies you've seen.
        </p>
      )}
    </StyledRecommend>
  );
}
